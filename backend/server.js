const app = require("./app.js")
const http = require("http")
const connectToDB = require("./db.js")


const server = http.createServer(app)
connectToDB("mongodb://localhost:27017/uber_clone_2")

server.listen("3000",()=>{
    console.log("server started at port 3000")
})