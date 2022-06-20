import nodemailer from 'nodemailer'
import nodemailerConfig from './nodemailerConfig.js'

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport(nodemailerConfig)

  return transporter.sendMail({
    from: '"Roman Trnka" <trnka.roman13@gmail.com>', // sender address
    to: to,
    subject: subject,
    html: html,
  })
}

export default sendEmail
