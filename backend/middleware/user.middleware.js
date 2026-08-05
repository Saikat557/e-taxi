const {validateToken} = require("../services/jwt.service")

const authUser = (req,res,next)=>{
  console.log(req.headers)
const token = req.cookies?.token || req.headers?.authorization.split(" ")[1]



if(!token){
  return  res.status(404).json({message:"please login back"})
}
const user = validateToken(token)

if(!user){
    return res.status(404).json({message:"please log in back"})
}

req.user = user
next()

}

module.exports ={authUser} 