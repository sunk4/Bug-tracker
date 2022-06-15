import { UnauthorizedError, UnauthenticatedError } from '../errors/index.js'
import { isTokenValid } from '../utils/index.js'

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token

  try {
    if (!token) {
      throw new UnauthenticatedError('Authentication invalid')
    }
    const { firstName, userId, role } = isTokenValid({ token })
    req.user = { firstName, userId, role }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid')
  }
}

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized to access this route')
    }
    next()
  }
}

export { authenticateUser, authorizePermissions }
