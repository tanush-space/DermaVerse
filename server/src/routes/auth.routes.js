const express=require('express');
const authController=require('./controllers/auth.controller');

const router=express.Router();

// POST /api/auth/register
router.post("/register",authController.register)

// POST /api/auth/login
router.post("/login",authController.login)

//POST /api/auth/logout
router.post("/logout",authController.logout)

module.exports=router