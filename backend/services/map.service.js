const axios = require("axios")
const {getCordinatesByPlaceName,getDistanceAndTimeUtl} = require("../util/osrm.util")


const getDistanceAndTime =async (p1,p2)=>{
    const origin = await getCordinatesByPlaceName(" B.B.D. Bagh,kolkata")
    const destination= await getCordinatesByPlaceName("delhi")
    const result = await getDistanceAndTimeUtl(origin,destination)
   
    return result
}

const getSuggestion =async (placeName)=>{
const res = await axios.get("https://nominatim.openstreetmap.org/search",
    {
        params:{
            q:placeName,
            format:"json",
            limit:5
        },
        headers:{
            "user-agent":"new-app"
        }
    },
)
return res.data
}
module.exports ={getDistanceAndTime,getSuggestion}


