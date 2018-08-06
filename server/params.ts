import * as path from 'path'

export const cfg = {
  env: process.env.NODE_ENV || 'production',
  host: process.env.HOST || '0.0.0.0' ,
  port: parseInt(process.env.PORT, 10) || 3000,
  mail: {
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT, 10),
    login: process.env.MAIL_LOGIN,
    pass: process.env.MAIL_PASS,
    subject: process.env.MAIL_SUBJECTS
  }
}

export const rootStaticFiles = [
  '/robots.txt',
  '/sitemap.xml',
  '/favicon.ico'
]

export const dev = cfg.env !== 'production'
export const rootDir = dev
  ? path.join(__dirname, '..')
  : path.join(__dirname, '../../')