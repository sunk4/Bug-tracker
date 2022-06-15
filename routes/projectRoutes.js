import express from 'express'
const router = express.Router()

import {
  authenticateUser,
  authorizePermissions,
} from '../middleware/authentication.js'

import {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js'

router
  .route('/')
  .post(authenticateUser, authorizePermissions('admin'), createProject)
  .get(authenticateUser, getAllProjects)

router
  .route('/:id')
  .get(authenticateUser, getSingleProject)
  .patch(
    authenticateUser,
    authorizePermissions('admin', 'senior'),
    updateProject
  )
  .delete(authenticateUser, authorizePermissions('admin'), deleteProject)

export default router
