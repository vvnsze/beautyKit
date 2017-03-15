import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema ({
  userName: {type: String, required: true, unique: true},
  name: String,
  email: {type: String, required: true},
  password: {type: String, required: true}
}))

// const saltSeed = 10;
// 
// const UserSchema = mongoose.Schema({
//   userName: {type: String, required: true, unique: true},
//   name: String,
//   email: {type: String, required: true},
//   password: {type: String, required: true}
// })
//
// UserSchema.pre('save',(next) => {
//   var user = this
//   console.log('this is the this in userSchema function: ' , this)
// }
//
// const User = mongoose.model('User', UserSchema)
//
// UserSchema.methods.password()
