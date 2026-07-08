const {createUser,findUserByEmailAndMatchPassword} = require("../services/user.service")
const {validationResult } = require("express-validator")


const userSignupController= async (req,res)=>{
const result = validationResult(req)
 
if(result["errors"].length>0){
    return res.json(result["errors"])
}



    const {fullName,email,password} = req.body

    const firstName = fullName.split(" ")[0]
    const lastName = fullName.split(" ")[1]

    const user = await createUser(firstName,lastName,email,password);
    res.status(201).json({
        message:"user created successfully",
        user
    })

}


const userLoginController = async (req,res)=>{
    
const result = validationResult(req)
if(result["errors"].length>0){ return res.json(result["errors"])}
    const {email,password} = req.body

    try{

      const user = await findUserByEmailAndMatchPassword(email,password)  
     
      if(!user){
        return res.status(404).json({
            message:"email or password does not match"
        })
      }
      res.json({
        message:"login successfully",
        user
      })


    }catch(err){
    
       
        return res.status(404).json({message:err.message})
    }

}

module.exports = {userSignupController,userLoginController}

