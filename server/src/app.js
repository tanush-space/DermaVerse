//create instance of server and config the server
const express=require('express');
const cookieParser=require("cookie-parser")



const app=express();

app.use(express.json())

app.use(cookieParser()) //this will parse the cookies from the incoming request and make them available in req.cookies

//importing routes
const authRoutes=require('./routes/auth.routes');

//using routes
app.use("/api/auth",authRoutes)

module.exports=app
