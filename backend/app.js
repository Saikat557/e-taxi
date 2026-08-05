const express= require("express")
const userRouter = require("./routes/user.route")
const mapRouter = require("./routes/map.route")
const captainRouter = require("./routes/captain.route")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({entended:true}))
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/user",userRouter)
app.use("/map",mapRouter)
app.use('/captain',captainRouter)

module.exports= app