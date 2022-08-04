import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnauthenticatedError } from '../errors/index.js'
import { attachCookiesToResponse } from '../utils/index.js'
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

  await User.create({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    role,
    verificationToken,
  })

  res.status(StatusCodes.CREATED).json({ msg: 'success' })
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

  attachCookiesToResponse({ res, user })

  res.status(StatusCodes.OK).json({ user })
}
const logout = async (req, res) => {
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

export { register, login, logout }
