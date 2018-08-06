import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return <html>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Next Template Description" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  }
}