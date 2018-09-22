const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const history = require('connect-history-api-fallback')
const port = process.env.PORT || 5000

app.use(serveStatic(path.join(__dirname, 'dist')))
app.use(history())
app.listen(port)
