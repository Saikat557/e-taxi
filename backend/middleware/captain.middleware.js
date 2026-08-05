const captainModel = require("../models/captain.model")
const jwt = require("jsonwebtoken")
const profileMiddleware =async (req,res,next)=>{
    console.log(req.headers.authorization)
    const token = req.cookies?.token || req.headers?.authorization.split(" ")[1]

    if(!token){
        return res.status(404).json({message:"unauthorized person | please log in back"})
    }

    const {id} = jwt.verify(token,process.env.JWT_SECRET_KEY) 

    if(!id) return res.status(400).json({message:"token expired or invalid token"})

        const captain = await captainModel.findOne({_id:id})
        
        if(!captain)  return res.status(400).json({message:"no user found. please login back"})
            
            req.captain = captain
            next()

}

module.exports = {profileMiddleware}