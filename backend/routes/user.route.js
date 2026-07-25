const express = require("express")
const {body} = require("express-validator")
const user = require("../controller/user.controller")
const {authUser} = require("../middleware/user.middleware")

const route = express.Router()

route.post("/signup",body("fullName").isString().isLength({min:3}).withMessage("fullName should be a string and minimum length should be 3"),
body("email").isEmail().withMessage("put a valid email"),body("password").isLength({min:6}).withMessage("password length should be greater than 6"),
user.userSignupController
)

route.post("/login",body("email").isEmail().withMessage("enter a valid email"),body("password").isLength({min:6}).withMessage("password length should be greater than 6"),
user.userLoginController
)

route.get("/me",authUser,(req,res)=>{
    const user = req.user
    res.status(200).json({user:user})
})

module.exports = route