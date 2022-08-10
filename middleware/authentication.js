import { UnauthorizedError, UnauthenticatedError } from '../errors/index.js'
import { attachCookiesToResponse, isTokenValid } from '../utils/index.js'

const authenticateUser = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken)

      req.user = payload.user
      return next()
    }
    const payload = isTokenValid(refreshToken)

    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: accessToken,
    })

    req.user = payload.user
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
