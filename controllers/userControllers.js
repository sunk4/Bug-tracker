import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import {
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
} from '../errors/index.js'
import {
  createTokenUser,
  attachCookiesToResponse,
  checkPermissions,
} from '../utils/index.js'

const getAllUsers = async (req, res) => {
  const users = await User.find({}).select('-password')
  res.status(StatusCodes.OK).json({ users, count: users.length })
}

const getSingleUser = async (req, res) => {
  const userId = req.params.id

  const user = await User.findOne({ _id: userId }).select('-password')
  if (!user) {
    throw NotFoundError(`User with id: ${userId} does not exist`)
  }
  checkPermissions(req.user, user._id)
  res.status(StatusCodes.OK).json({ user })
}
const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user })
}

const updateUser = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, role } = req.body

  if (!firstName || !lastName || !phoneNumber || !email) {
    throw new BadRequestError('Please provide all values')
  }

  const user = await User.findOne({ _id: req.user.userId })

  user.firstName = firstName
  user.lastName = lastName
  user.phoneNumber = phoneNumber
  user.email = email

  await user.save()

  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.OK).json({ user: tokenUser })
}

const updateUserByAdmin = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, role } = req.body
  const userId = req.params.id

  if (!firstName || !lastName || !phoneNumber || !email || !role) {
    throw new BadRequestError('Please provide all values')
  }

  const user = await User.findOne({ _id: userId })

  user.firstName = firstName
  user.lastName = lastName
  user.phoneNumber = phoneNumber
  user.email = email
  user.role = role

  await user.save()

  res.status(StatusCodes.OK).json({ user })
}
const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  if (!oldPassword || !newPassword) {
    throw new BadRequestError('Please provide old and new password')
  }

  const userId = req.user.userId

  const user = await User.findById({ _id: userId })
  if (!user) {
    throw new NotFoundError(`No user with id: ${userId}`)
  }
  const isPasswordCorrect = await user.comparePassword(oldPassword)

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Password is incorrect')
  }

  user.password = newPassword

  await user.save()

  res.status(StatusCodes.OK).json({ msg: 'password changed' })
}

const deleteUser = async (req, res) => {
  const { id: userId } = req.params
  console.log(userId)

  const user = await User.findOne({ _id: userId })
  if (!user) {
    throw new BadRequestError(`No user with id: ${userId}`)
  }

  await user.remove()

  res.status(StatusCodes.OK).json({ msg: 'user removed' })
}

export {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUserByAdmin,
  updateUserPassword,
  updateUser,
  deleteUser,
}
