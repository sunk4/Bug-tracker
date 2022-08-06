import express from 'express'
const router = express.Router()

import {
  authenticateUser,
  authorizePermissions,
} from '../middleware/authentication.js'

import {
  createTicket,
  getAllTickets,
  getSingleTicket,
  updateTicket,
  deleteTicket,
  getStatsTickets,
} from '../controllers/ticketController.js'

router
  .route('/')
  .post(authenticateUser, authorizePermissions('admin', 'senior'), createTicket)
  .get(authenticateUser, getAllTickets)

router.route('/showStats').get(authenticateUser, getStatsTickets)

router
  .route('/:id')
  .get(authenticateUser, getSingleTicket)
  .patch(
    authenticateUser,
    authorizePermissions('admin', 'senior'),
    updateTicket
  )
  .delete(
    authenticateUser,
    authorizePermissions('admin', 'senior'),
    deleteTicket
  )

export default router
