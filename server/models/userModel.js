import mongoose from 'mongoose'
import User from 'user.js'

module.exports = {
  createUser: function create (userName, name, email, password){
    var newUser = new User({
      userName: userName,
      name: name,
      email: email,
      password: password
    })

    newUser.save(function(err){
      if (err) throw err;
      console.log('User saved successfully');
      res.json({success: true});
    })
  },

  findUser: function find(){
    User.find({}, (err,users)=>{
      res.json(users);
    })
  }
}
