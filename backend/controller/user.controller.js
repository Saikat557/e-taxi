const {createUser,findUserByEmailAndMatchPassword} = require("../services/user.service")
const {validationResult } = require("express-validator")
const {createToken} = require("../services/jwt.service")


const userSignupController= async (req,res)=>{
const result = validationResult(req)
 
if(result["errors"].length>0){
    return res.json(result["errors"])
}



    const {fullName,email,password} = req.body

    const firstName = fullName.split(" ")[0]
    const lastName = fullName.split(" ")[1]

    const user = await createUser(firstName,lastName,email,password);
    const token = createToken({email:user.email,fullName:user.fullName})
    res.status(201).json({
        message:"user created successfully",
        token:token,
        user
    })

}


const userLoginController = async (req,res)=>{
    
const result = validationResult(req)
if(result["errors"].length>0){ return res.json(result["errors"])}
    const {email,password} = req.body

    try{

      const user = await findUserByEmailAndMatchPassword(email,password) 
      const token = createToken({email:user.email,fullName:user.fullName}) 
     
      if(!user){
        return res.status(404).json({
            message:"email or password does not match"
        })
      }
      res.json({
        message:"login successfully",
        token:token,
        user
      })


    }catch(err){
    
       
        return res.status(404).json({message:err.message})
    }

}



module.exports = {userSignupController,userLoginController}

