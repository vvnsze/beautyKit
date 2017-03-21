import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import jsonwebtoken from 'jsonwebtoken'
import config from '../app.config'
import User from './models/userModel'

const db = mongoose.connection
const app = express()
const apiRoutes = express.Router()
const public_root = path.join(__dirname, '/../public/')
const build_dir = path.join(__dirname, '/../build/')

mongoose.connect(config.database)

app.set('superSecret', config.secret);


db.on('error',console.error.bind(console,'connection error: '))
db.once('open',function(){
  console.log('+++line 23: database is connected')
})

app.use(express.static(public_root))
app.use(express.static(build_dir))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(morgan('dev'))


app.get('/', (req,res) => {
  res.send('+++line 34: Hello! The API is at http://localhost:' + port + '/userLogin');
})

apiRoutes.get('/home', (req, res) =>{
  res.json({message: 'Welcome to the cooolest API on earth!'})
})

apiRoutes.post('/user',(req,res)=>{
  console.log('+++line 42 this is the req.body: ', req.body)
  res.send({message:'success'});
  User.createUser(req.body.userName, req.body.name, req.body.email, req.body.password)
})


apiRoutes.get('/user', (req, res) => {
  User.findUser().then((response)=>{
    res.send(response)
  });
});

apiRoutes.post('/authenticate', function(req, res) {

  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        var token = jwt.sign(user, app.get('superSecret'), {
            expiresInMinutes: 1440 // expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }

      }

    });
  });


app.use('/api', apiRoutes)

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: public_root
  })
})

const port = process.env.PORT || 1337

app.listen(port, () => {
  console.log('+++line 45: Server successfully connected at port: ', port)
})
