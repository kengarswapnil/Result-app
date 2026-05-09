const mongoose = require("mongoose");

const ConnectDb = (req,res) =>{
  try{
  const connect =   mongoose.connect(process.env.MONGODB_URL)
  console.log("Conneted sucessfully")
  
  }catch(err){
    console.log(err)
    process.exit(1);
  }
}


module.exports = ConnectDb;