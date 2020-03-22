const path = require('path')
const Bundler = require('parcel-bundler')
const app = require('.')

const entry = path.resolve('src/index.html')
const bundle = new Bundler(entry)

app.use(bundle.middleware())

app.listen(process.env.PORT, err => {
  if (err) throw err

  console.log(`Listening at http://localhost:${process.env.PORT}`)
})
