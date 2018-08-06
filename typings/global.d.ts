declare namespace NodeJS {
  interface ProcessEnv {
    MAIL_HOST: string
    MAIL_PORT: string
    MAIL_LOGIN: string
    MAIL_PASS: string
    MAIL_SUBJECTS: string
  }
}