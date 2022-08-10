import Project from '../models/Project.js'
import Ticket from '../models/Ticket.js'
import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/index.js'

const createProject = async (req, res) => {
  const { projectUsers: usersId } = req.body

  for (let i = 0; i < usersId.length; i++) {
    const userIdExist = await User.findOne({ _id: usersId[i] })
    if (!userIdExist) {
      throw new NotFoundError(`User with id ${usersId[i]} does not exist`)
    }
  }

  req.body.user = req.user._id

  const project = await Project.create(req.body)

  res.status(StatusCodes.CREATED).json({ project })
}
const getAllProjects = async (req, res) => {
  const user = req.user
  if (user.role === 'admin') {
    const projects = await Project.find({}).populate({
      path: 'user',
      select: '-password _id',
    })
    res.status(StatusCodes.OK).json({ projects, counts: projects.length })
  } else {
    const projects = await Project.find({
      projectUsers: user._id,
    }).populate({
      path: 'user',
      select: '-password _id',
    })
    res.status(StatusCodes.OK).json({ projects, counts: projects.length })
  }
}
const getSingleProject = async (req, res) => {
  const { id } = req.params

  const project = await Project.findOne({ _id: id })

  if (!project) {
    throw new NotFoundError(`Project with id: ${id} does not exist`)
  }

  const users = await User.find({
    _id: {
      $in: project.projectUsers,
    },
  }).select('-password')

  res.status(StatusCodes.OK).json({ project, users })
}
const updateProject = async (req, res) => {
  const { id: projectId } = req.params

  const { projectUsers: usersId } = req.body

  for (let i = 0; i < usersId.length; i++) {
    const userIdExist = await User.findOne({ _id: usersId[i] })
    if (!userIdExist) {
      throw new NotFoundError(`User with id ${usersId[i]} does not exist`)
    }
  }

  const { projectName, projectDescription, projectUsers } = req.body

  const project = await Project.findOneAndUpdate(
    { _id: projectId },

    {
      $addToSet: {
        projectUsers: { $each: projectUsers },
      },
      projectDescription,
      projectName,
    },

    {
      new: true,
      runValidators: true,
    }
  )

  if (!project) {
    throw new NotFoundError(`Project with id: ${projectId} does not exist`)
  }
  res.status(StatusCodes.OK).json({ project })
}
const deleteProject = async (req, res) => {
  const { id: projectId } = req.params
  const project = await Project.findOne({ _id: projectId })
  if (!project) {
    throw new NotFoundError(`Project with id: ${projectId} does not exist`)
  }

  await project.remove()
  res.status(StatusCodes.OK).json({ msg: 'project removed' })
}

export {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
}
