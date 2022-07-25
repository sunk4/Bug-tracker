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
  req.body.user = req.user.userId

  const project = await Project.create(req.body)

  res.status(StatusCodes.CREATED).json({ project })
}
const getAllProjects = async (req, res) => {
  const projects = await Project.find({}).populate({
    path: 'user',
    select: '-password _id',
  })

  res.status(StatusCodes.OK).json({ projects, counts: projects.length })
}
const getSingleProject = async (req, res) => {
  const { id: projectId } = req.params
  const project = await Project.findOne({ projectId })
  if (!project) {
    throw new NotFoundError(`Project with id: ${projectId} does not exist`)
  }

  res.status(StatusCodes.OK).json({ project })
}
const updateProject = async (req, res) => {
  const { id: projectId } = req.params

  const { users: usersId } = req.body

  for (let i = 0; i < usersId.length; i++) {
    const userIdExist = await User.findOne({ _id: usersId[i] })
    if (!userIdExist) {
      throw new NotFoundError(`User with id ${usersId[i]} does not exist`)
    }
  }
  const project = await Project.findOneAndUpdate({ _id: projectId }, req.body, {
    new: true,
    runValidators: true,
  })

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
