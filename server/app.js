import express from 'express'
import path from 'path'
import mongoose from 'mongoose'


const app = express()
const public_root = path.join(__dirname, '/../public/')
const build_dir = path.join(__dirname, '/../build/')

mongoose.connect('mongodb://localhost:27017')

const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error: '))
db.once('open',function(){
  console.log('database is connected')
})

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
