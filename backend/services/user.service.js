const USER = require("../models/user.model")
const bcrypt = require("bcrypt")

const createUser =  async (firstName,lastName,email,password)=>{
    const hashedPassword = await bcrypt.hash(password,10)

    try{
 const user = await USER.create({
        fullName:{firstName,lastName},
        email,password:hashedPassword
    }) 
    return user
    } catch(err){
        return err
    }
   
    
}

const findUserByEmailAndMatchPassword = async(email,password)=>{
    const user = await USER.findOne({email})

    if(!user){
        throw new Error("email or password does not match")
    }

    const isMatch = await bcrypt.compare(password,user.password)
   
    if(!isMatch){
       
        throw new Error("email or password does not match")
    }

    return user
}

module.exports = {createUser,findUserByEmailAndMatchPassword}