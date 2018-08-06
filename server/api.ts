import { SendFormRequestDTO } from 'api/send-mail'
import * as express from 'express'
import * as nodemailer from 'nodemailer'
import { cfg } from './params'

export const apiRouter = express.Router()

apiRouter
  .route('/callback')
  .post((req, res) => {
    const { login, pass, subject } = cfg.mail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: login,
        pass
      }
    })

    const { name, lastName, email, mobileNumber, message } = req.body as SendFormRequestDTO
    const mailOptions = {
      from: '"Site" <info@site>', // sender address
      to: subject, // list of receivers
      replyTo: email,
      subject: 'Site Form', // Subject line
      // text: body, // plain text body
      html: `
        Имя: ${name}<br />
        Фамилия: ${lastName}<br />
        Номер мобильного телефона: ${mobileNumber}<br />
        Email: ${email}<br />
        Message: ${message}
      ` // html body
    }

    transporter.sendMail(mailOptions, (error, info) => {

      if (error) {
        res.sendStatus(500)
        return console.log(error)
      }
      console.log('Message %s sent: %s', info.messageId, info.response)
      res.end()
    })
})