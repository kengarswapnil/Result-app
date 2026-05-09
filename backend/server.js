const express = require('express');
const dotenv = require('dotenv');
const ConnectDb = require('./config/db')

dotenv.config();

ConnectDb();

const app = express();
app.listen(3000,()=>{
  console.log("Server Running at 3000")
})