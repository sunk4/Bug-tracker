const createTokenUser = (user) => {
  return { email: user.email, userId: user._id, role: user.role }
}

export default createTokenUser
