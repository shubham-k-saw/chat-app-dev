import nodemailer from 'nodemailer'
import { verifyEmailTemplate, emailVerifiedTemplate } from '../utils/emailTemplate.js'

const MAIL_FROM = process.env.MAIL_FROM

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const sendEmail = async (type, user, data) => {
  try {
    let mailOptions = {
      from: MAIL_FROM,
      to: user.email
    }

    switch (type) {
      case 'VERIFY_EMAIL': {
        mailOptions.subject = 'Verify Your Email'
        mailOptions.html = verifyEmailTemplate(user, data)
        break
      }
      case 'EMAIL_VERIFIED': {
        mailOptions.subject = 'Verify Your Email'
        mailOptions.html = emailVerifiedTemplate(user)
        break
      }
      default:
        throw new Error('Invalid Email Type')
    }

    const mailInfo = await transporter.sendMail(mailOptions)
    return mailInfo
  } catch (error) {
    console.log('Error sending Email: ', error)
    throw error
  }
}

export { sendEmail }