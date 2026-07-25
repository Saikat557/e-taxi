const axios = require("axios")
const {getCordinatesByPlaceName,getDistanceAndTimeUtl} = require("../util/osrm.util")


const getDistanceAndTime =async (p1,p2)=>{
    const origin = await getCordinatesByPlaceName(" B.B.D. Bagh,kolkata")
    const destination= await getCordinatesByPlaceName("delhi")
    const result = await getDistanceAndTimeUtl(origin,destination)
   
    return result
}
module.exports ={getDistanceAndTime}