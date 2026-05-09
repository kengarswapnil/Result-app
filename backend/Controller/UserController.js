const userModel = require('../Models/User')

const Login = (req , res) =>{
   try{
    const {email,password} = req.body;



    res.json({success:"Login Sucessfully"})
   }catch(err){
     res.json("Invalid User")
   }
}