import mongoose from 'mongoose'
import User from './user'

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
    })
  },

  findUser: function find(){
    return User.find({}, (err,users)=>{
      return(users);
    })
  }
}
