const express = require("express");
const authController = require("../controllers/auth.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");

const router = express.Router();

// POST /api/auth/register
router.post("/register", authController.register);

// POST /api/auth/login
router.post("/login", authController.login);

//POST /api/auth/logout [PROTECTED]
router.post(
  "/logout",
  authMiddleware.authUserMiddleware,
  authController.logout,
);

module.exports = router;
