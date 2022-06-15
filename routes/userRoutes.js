import express from 'express'
const router = express.Router()
import {
  authenticateUser,
  authorizePermissions,
} from '../middleware/authentication.js'

import {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUserByAdmin,
  updateUserPassword,
  updateUser,
  deleteUser,
} from '../controllers/userControllers.js'

router
  .route('/')
  .get(authenticateUser, authorizePermissions('admin', 'senior'), getAllUsers)

router.route('/showMe').get(authenticateUser, showCurrentUser)
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword)
router.route('/updateUser').patch(authenticateUser, updateUser)

router
  .route('/updateUser/:id')
  .patch(authenticateUser, authorizePermissions('admin'), updateUserByAdmin)

router.route('/:id').get(authenticateUser, getSingleUser)
router
  .route('/:id')
  .delete(authenticateUser, authorizePermissions('admin'), deleteUser)

export default router
