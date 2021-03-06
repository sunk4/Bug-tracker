import User from '../models/User.js'
import Token from '../models/Token.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnauthenticatedError } from '../errors/index.js'
import {
  createTokenUser,
  attachCookiesToResponse,
  sendVerificationEmail,
} from '../utils/index.js'
import crypto from 'crypto'

const register = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body

  const emailAlreadyExist = await User.findOne({ email })
  if (emailAlreadyExist) {
    throw new BadRequestError('Email already exist, please provide new one')
  }

  const phoneNumberAlreadyExist = await User.findOne({ phoneNumber })
  if (phoneNumberAlreadyExist) {
    throw new BadRequestError(
      'Phone number already exist, please provide new one'
    )
  }

  const isFirstAccount = (await User.countDocuments()) === 0
  const role = isFirstAccount ? 'admin' : 'junior'

  const verificationToken = crypto.randomBytes(40).toString('hex')

  const user = await User.create({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    role,
    verificationToken,
  })

  const origin = 'http://localhost:3000'

  await sendVerificationEmail({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  })

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'success, please check your email to verify account' })
}

const verifyEmail = async (req, res) => {
  const { email, verificationToken } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    throw new UnauthenticatedError('verification failed')
  }

  if (user.verificationToken !== verificationToken) {
    throw new UnauthenticatedError('verification failed')
  }
  user.isVerified = true
  user.verified = Date.now()
  user.verificationToken = ''

  await user.save()

  res.status(StatusCodes.OK).json({ msg: 'Email verified' })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }

  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid email or password')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid email or password')
  }
  if (!user.isVerified) {
    throw new UnauthenticatedError('Please verify your email')
  }

  const tokenUser = createTokenUser(user)

  let refreshToken = ''

  const existingToken = await Token.findOne({ user: user._id })

  if (existingToken) {
    const { isValid } = existingToken
    if (!isValid) {
      throw new UnauthenticatedError('Invalid credentials')
    }
    refreshToken = existingToken.refreshToken
    attachCookiesToResponse({ res, user: tokenUser, refreshToken })
    res.status(StatusCodes.OK).json({ user: tokenUser })
    return
  }

  refreshToken = crypto.randomBytes(40).toString('hex')
  const userAgent = req.headers['user-agent']
  const userToken = { refreshToken, userAgent, user: user.id }

  await Token.create(userToken)

  attachCookiesToResponse({ res, user: tokenUser, refreshToken })

  res.status(StatusCodes.OK).json({ user: tokenUser })
}
const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId })

  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({ msg: 'user logged out' })
}

export { register, login, logout, verifyEmail }
