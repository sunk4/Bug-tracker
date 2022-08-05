import express from 'express'
const router = express.Router()

import { register, login, logout } from '../controllers/authController.js'

import { authenticateUser } from '../middleware/authentication.js'

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').delete(authenticateUser, logout)

export default router
