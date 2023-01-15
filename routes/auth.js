const express = require('express')
const authRouter = express.Router();
const AuthController = require("../controllers/AuthController")

authRouter.get("/getRegisteredUser",AuthController.getAllRegisterdUser)
authRouter.post("/signUp",AuthController.signUp);
authRouter.post("/login",AuthController.login);

module.exports = authRouter;




