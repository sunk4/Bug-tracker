import express from 'express'
const router = express.Router()

import {
  register,
  login,
  logout,
  verifyEmail,
} from '../controllers/authController.js'

import { authenticateUser } from '../middleware/authentication.js'

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').delete(authenticateUser, logout)
router.route('/verify-email').post(verifyEmail)

export default router
