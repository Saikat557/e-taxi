const {getDistanceAndTimeController,getSuggestionController} = require("../controller/map.controller")
const express = require("express")

const route = express.Router()

route.get("/get-distance-time",getDistanceAndTimeController)
route.get("/suggestion",getSuggestionController)

module.exports = route