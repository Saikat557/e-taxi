const {getDistanceAndTimeController,getSuggestionController} = require("../controller/map.controller")
const {authorizeUser} = require("../middleware/map.middleware")
const express = require("express")

const route = express.Router()

route.get("/get-distance-time",authorizeUser, getDistanceAndTimeController)
route.get("/suggestion",authorizeUser,getSuggestionController)

module.exports = route