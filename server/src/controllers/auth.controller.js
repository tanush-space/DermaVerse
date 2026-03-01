const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const emailService = require("../services/email.service");
const tokenBlackListModel = require("../models/blackList.model");

async function register(req, res) {
  const {name,email,password}=req.body;

  const isUserAlreadyExsists=userModel.findOne({
    email
  })
  if(isUserAlreadyExsists){
    return res.status(400).json({
      message:"User Already Exsists"
    })
  }
}

async function login(req, res) {}

async function logout(req, res) {}

module.exports = {
  register,
  login,
  logout,
};
