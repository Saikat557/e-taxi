const express= require("express")
const userRouter = require("./routes/user.route")

const app = express()

app.use(express.json())
app.use(express.urlencoded({entended:true}))

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/user",userRouter)

module.exports= app