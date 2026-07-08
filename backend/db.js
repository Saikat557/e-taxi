const mongoose = require("mongoose")
const connectToDB =(url)=>{
mongoose.connect(url)
.then(()=>{
    console.log("db is connected successfully")
})
.catch((err)=>{
    console.log("error is: ",err)
})
}

module.exports= connectToDB