import { UnauthorizedError, UnauthenticatedError } from '../errors/index.js'
import { isTokenValid } from '../utils/index.js'
import Token from '../models/Token.js'
import { attachCookiesToResponse } from '../utils/index.js'

const authenticateUser = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies
  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken)
      req.user = payload.user
      return next()
    }
    const payload = isTokenValid(refreshToken)

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    })

    if (!existingToken || !existingToken?.isValid) {
      throw new UnauthenticatedError('Authentication invalid')
    }

    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
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
