# Next Template

Template with minimal functional for sites with SSR and callback forms.

## About

* Next
* React
* Express
* Babel
* Typescript
* PostCSS
* Import Assets
* TSLint
* Nodemailer

## Requirements

NodeJS 7.6^


## Installation

```bash
npm install
```


## Running Dev Server

```bash
npm run dev
```

## Building and Running Production Server

```bash
npm run build
npm start
```

## Nodemailer settings

Gmail service
```bash
const { login, pass, subject } = cfg.mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: login,
    pass
  }
})
```

Other mail services
```bash
const { host, port, login, pass, subject } = cfg.mail
const transporter = nodemailer.createTransport({
  host,
  port,
  auth: {
    user: login,
    pass
  }
})
```

## Configs

Default application configs

* NODE_ENV=production
* HOST=0.0.0.0
* PORT=3000

Configs located in ./configs (.env.*)

Gmail service
* MAIL_LOGIN=some@gmail.com
* MAIL_PASS=password123
* MAIL_SUBJECTS=some@gmail.com

Other mail services (example)
* MAIL_HOST=mail.adm.tools
* MAIL_PORT=2233
* MAIL_LOGIN=mail@mail.mail
* MAIL_PASS=password123
* MAIL_SUBJECTS=mail@mail.mail
