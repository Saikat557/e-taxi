const express = require("express")
const { signupController, loginController,profileController } = require("../controller/captain.controller")
const { body } = require("express-validator")
const {profileMiddleware} = require("../middleware/captain.middleware")

const route = express.Router()

route.post(
  '/signup',
  body("name").isString().isLength({ min: 3 }).withMessage("name should be min 3 letter"),
  body("password").isLength({ min: 5 }).withMessage("password should be min 5 characters"),
  body("dob").isDate().withMessage("date should be in yyyy-mm-dd format"),
  body("phoneNumber").isLength({ min: 10, max: 10 }).withMessage("phoneNumber should be in 10 digit"),
  signupController,
)

route.post(
  '/login',
  body("phoneNumber").isLength({ min: 10, max: 10 }).withMessage("phoneNumber should be in 10 digit"),
  body("password").isLength({ min: 5 }).withMessage("password should be min 5 characters"),
  loginController,
)

route.get('/profile',profileMiddleware,profileController)

module.exports = route