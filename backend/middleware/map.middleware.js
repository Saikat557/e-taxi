const {validateToken} = require("../services/jwt.service")
const authorizeUser = (req,res,next)=>{
    const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1]

    if(!token) return res.status(401).json({message:"unauthorized access"})

        const user = validateToken(token)

        if(!user) return res.status(401).json({message:"unauthorized access"})

            req.user = user
            next()
}

module.exports={authorizeUser}