const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const emailService = require("../services/email.service");
const tokenBlackListModel = require("../models/blackList.model");

async function register(req, res) {
  const {name,email,password}=req.body;

  const isUserAlreadyExsists=await userModel.findOne({
    email
  })
  if(isUserAlreadyExsists){
    return res.status(400).json({
      message:"User Already Exsists"
    })
  }

  const user = await userModel.create({
    email,
    password,
    name,
  });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

   res.cookie("token", token);

  res.status(201).json({
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    token: token,
  });
}

async function login(req, res) {
  const {email,password}=req.body;

  const user=await userModel.findOne({
    email:email
  }).select("+password")

  if(!user){
    return res.status(401).json({
      message: "Invalid email or password",
      status: "failed",
    })
  }
  const isValidPassword = await user.comparedPassword(password);
  if(!isValidPassword){
    return res.status(401).json({
      message: "Invalid email or password",
      status: "failed",
    })
  }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token);

  res.status(200).json({
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    token: token,
  });
}

async function logout(req, res) {}

module.exports = {
  register,
  login,
  logout,
};
