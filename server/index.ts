import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as next from 'next'
import { join, resolve } from 'path'
import { parse } from 'url'
import { apiRouter } from './api'
import { cfg, dev, rootDir, rootStaticFiles } from './params'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    const staticDir = resolve(rootDir, '.next/static')

    server.use('/_next/static', express.static(staticDir))

    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
    server.use('/api', apiRouter)

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(rootDir, 'static', parsedUrl.pathname)
        app.serveStatic(req, res, path)
      } else {
        handle(req, res, parsedUrl)
      }
    })

    server.listen(cfg.port, cfg.host, err => {
      if (err) throw err
      console.log(`> Ready on http://${cfg.host}:${cfg.port}`)
    })
  })
  .catch(ex => {
    console.log(ex.stack)
    process.exit(1)
  })