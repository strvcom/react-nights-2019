/* eslint-env node */
const express = require('express')
const next = require('next')
//const compression = require('compression')
const { parse } = require('url')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app
  .prepare()
  .then(() => {
    const server = express()
    //server.use(compression())

    server.get('/products/:id/:name', (req, res) => {
      app.render(req, res, '/product', req.params)
    })

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { query, pathname } = parsedUrl
      app.render(req, res, pathname, query)
    })

    server.listen(PORT, err => {
      if (err) {
        throw err
      }
      console.log('> Ready on http://localhost:' + PORT) // eslint-disable-line
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
