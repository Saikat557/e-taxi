const {getDistanceAndTimeController} = require("../controller/map.controller")
const express = require("express")

const route = express.Router()

route.get("/get-distance-time",getDistanceAndTimeController)

module.exports = route