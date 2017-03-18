import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import jsonwebtoken from 'jsonwebtoken'
import config from '../app.config'
import UserModel from './models/user.js'
import User from './models/userModel.js'

const db = mongoose.connection
const app = express()
const apiRoutes = express.Router()
const public_root = path.join(__dirname, '/../public/')
const build_dir = path.join(__dirname, '/../build/')

mongoose.connect(config.database)

app.set('superSecret', config.secret);


db.on('error',console.error.bind(console,'connection error: '))
db.once('open',function(){
  console.log('+++line 22: database is connected')
})

app.use(express.static(public_root))
app.use(express.static(build_dir))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(morgan('dev'))


app.get('/', (req,res) => {
  res.send('+++line 33: Hello! The API is at http://localhost:' + port + '/userLogin');
})

apiRoutes.get('/', (req,res) =>{
  res.json({message: 'Welcome to the cooolest API on earth!'})
})

apiRoutes.get('/users', (req, res) => {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

apiRoutes.get('/users', (req, res) => {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

app.use('/userAuth',apiRoutes)

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: public_root
  })
})

const port = process.env.PORT || 1337

app.listen(port, () => {
  console.log('+++line 45: Server successfully connected at port: ', port)
})
