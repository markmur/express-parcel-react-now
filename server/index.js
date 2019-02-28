const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()
const entry = fs.readFileSync(
  path.resolve(__dirname, '..', 'dist/index.html'),
  'utf8',
)

app.get('/api/healthcheck', (req, res) => {
  return res.send('Healthy!')
})

app.use('/', (req, res) => res.send(entry))

module.exports = app
