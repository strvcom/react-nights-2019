/* eslint-env node */
const React = require('react')
const express = require('express')
const ReactDomServer = require('react-dom/server')
const Product = require('../src/pages/ProductDetail')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = express({ dev })

app
  .then(() => {
    const server = express()

    server.get('/products/:id/:name', async (req, res) => {
      const product = await getProduct(req.params.id)
      const html = ReactDomServer.renderToString(<Product product={product} />)
      res.send(html)
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
