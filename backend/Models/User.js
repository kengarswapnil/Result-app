const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
  email:{
    type:String,
    requird:[true ,"Email is requird "],
    minlength:6
  },
  password:{
   type: String,
    requird:[true ,"Password is requird "],
    minlength:8
  }
})


const signupSchema = mongoose.Schema({
  name:{
    type:String,
    requird:[true,"Name is requird"],
    minlength:6
  },
  email:{
    type:String,
    requird:[true,"Email is requird"],
  },
  password:{
    type:String,
    requird:[true,"Enter the password"],
    minlength:8
  },
  repassword:{
    type:String,
    requird:[true,"Enter the password"],
    minlength:8
  } 
})
const Signup = mongoose.model('Signup',signupSchema)
const Login = mongoose.model('Login',loginSchema)

module.exports = {Login,Signup}