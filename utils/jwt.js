import jwt from 'jsonwebtoken'

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
  return token
}

const isTokenValid = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

const attachCookiesToResponse = ({ res, user }) => {
  const accessTokenJWT = createJWT({ payload: { user } })
  const refreshTokenJWT = createJWT({ payload: { user } })

  const oneDay = 1000 * 60 * 60 * 24
  const longerExp = 1000 * 60 * 60 * 24 * 30

  res.cookie('accessToken', accessTokenJWT, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  })

  res.cookie('refreshToken', refreshTokenJWT, {
    httpOnly: true,
    expires: new Date(Date.now() + longerExp),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  })
}

export { createJWT, isTokenValid, attachCookiesToResponse }
