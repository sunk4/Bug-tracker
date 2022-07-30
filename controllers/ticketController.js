import Ticket from '../models/Ticket.js'
import Project from '../models/Project.js'
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/index.js'

const createTicket = async (req, res) => {
  const { ticketProjectId } = req.body

  const projectExist = await Project.findOne({ _id: ticketProjectId })

  if (!projectExist) {
    throw new NotFoundError(
      `Project with id: ${req.body.project} does not exist`
    )
  }

  req.body.user = req.user.userId

  const ticket = await Ticket.create(req.body)
  res.status(StatusCodes.CREATED).json({ ticket })
}
const getAllTickets = async (req, res) => {
  const tickets = await Ticket.find({}).populate({
    path: 'ticketProjectId',
  })
  res.status(StatusCodes.OK).json({ tickets, count: tickets.length })
}

//toto je zle ---->>>>
const getSingleTicket = async (req, res) => {
  const { id: ticketId } = req.params
  const ticket = await Ticket.findOne({ _id: ticketId }).populate({
    path: 'project',
  })
  if (!ticket) {
    throw new NotFoundError(`Ticket with id: ${ticket} does not exist`)
  }

  res.status(StatusCodes.OK).json({ ticket })
}
const updateTicket = async (req, res) => {
  const { id: ticketId } = req.params

  const ticket = await Ticket.findOneAndUpdate({ _id: ticketId }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!ticket) {
    throw new NotFoundError(`Ticket with id: ${ticketId} does not exist`)
  }
  req.body.user = req.user.userId

  res.status(StatusCodes.OK).json({ ticket })
}
const deleteTicket = async (req, res) => {
  const { id: ticketId } = req.params

  const ticket = await Ticket.findOne({ _id: ticketId })

  if (!ticket) {
    throw new NotFoundError(`Ticket with id: ${ticketId} does not exist`)
  }

  await ticket.remove()
  res.status(StatusCodes.OK).json({ msg: 'ticket removed' })
}

export {
  createTicket,
  getAllTickets,
  getSingleTicket,
  updateTicket,
  deleteTicket,
}
