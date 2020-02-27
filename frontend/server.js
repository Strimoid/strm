const { basename } = require('path')
const { createServer } = require('http')
const accepts = require('accepts')
const glob = require('glob')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const supportedLanguages = glob
  .sync('./lang/*.json')
  .map(f => basename(f, '.json'))

const getMessages = locale => {
  return require(`./lang/${locale}.json`)
}

app.prepare().then(() => {
  createServer((req, res) => {
    const accept = accepts(req)
    const locale = accept.language(supportedLanguages) || 'en'
    req.locale = locale
    req.messages = dev ? {} : getMessages(locale)
    handle(req, res)
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
