//create instance of server and config the server
const express=require('express');




const app=express();

app.use(express.json())

module.exports=app
