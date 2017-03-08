import express from 'express'
import path from 'path'

const app = express()
const public_root = path.join(__dirname, '/../public/')
const build_dir = path.join(__dirname, '/../build/')

app.use(express.static(public_root))
app.use(express.static(build_dir))

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: public_root
  })
})

const server = app.listen(1337, () => {
  const port = server.address().port
  console.log('Example app listening at port %s', port)
})

module.exports = server
