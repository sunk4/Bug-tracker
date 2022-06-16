import sendEmail from './sendEmail.js'

const sendVerificationEmail = async ({
  firstName,
  lastName,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`

  const message = `<p>Please confirm your email by click on the following : <a href="${verifyEmail}">Verify email</a></p>`

  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h4>${firstName} ${lastName}</h4> ${message} `,
  })
}

export default sendVerificationEmail
