const axios = require("axios")

const getCordinatesByPlaceName= async (placeName) =>{

     const res= await axios.get("https://nominatim.openstreetmap.org/search",
            {
                params:{
                   q:placeName,
                   format:"json",
                   limit:1
            },
            headers:{
                "User-Agent" : "uber-clone/1.0"
            }
        }
        )
        if(res.data.length<=0){
             throw new Error("get cordinates by placeName is not working")
        }
     
        return {lat:res.data[0].lat,lon:res.data[0].lon}
}
const getDistanceAndTimeUtl = async (origin,destination) =>{
     const result = await axios.get(`https://router.project-osrm.org/route/v1/driving/${origin.lat},${origin.lon};${destination.lat},${destination.lon}`)
     console.log(Math.round(result.data.routes[0].distance/1000))
     
     return{time:Math.round(result.data.routes[0].duration/3600)+" hr",distance:Math.round(result.data.routes[0].distance/1000)+" km"}
}

module.exports = {getCordinatesByPlaceName,getDistanceAndTimeUtl}