const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minLength:3
        },
        lastName:{
            type:String,

        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
})
const USER = model("user",userSchema)

module.exports = USER