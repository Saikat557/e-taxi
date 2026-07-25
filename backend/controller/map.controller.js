const {getDistanceAndTime} = require("../services/map.service")

const getDistanceAndTimeController =async (req,res)=>{
const p1 = req.query.p1
const p2 = req.query.p2
console.log(p1)
if(!p1||!p2){
    return res.status(404).json({message:"p1 and p2 are needed"})
}

const result = await getDistanceAndTime(p1,p2)
if(!result) {
    return res.status(404).json({message:"cannot calculate distance and time bt this two places"})
}

res.status(200).json({
    message:"success",result
})
}

module.exports={getDistanceAndTimeController}