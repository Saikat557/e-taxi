import {ChevronDown} from "lucide-react"
const ConfirmLocationPanel = ({confirmLocationPanel,setconfirmLocationPanel,setRideDetailsPanel,pickup,dest})=>{
    
 
    return (
<div className={`h-1/3 w-full bg-white  flex flex-col max-w-[400px] gap-4 px-4  py-2 absolute ease-in-out transition-all duration-500 bottom-0 overflow-y-auto ${confirmLocationPanel?"translate-y-0":"translate-y-full"} z-2 `}>
   <div className="flex flex-col items-center w-full">
    <ChevronDown className="text-gray-400" onClick={()=>{setconfirmLocationPanel(false)}} />
       <div className="w-full">
        <h2 className="text-base ">Pick Up Location</h2>
        <h4 className="text-gray-400 text-md border-b-2 font-medium  py-1 border-yellow-600">{pickup}</h4>
    </div>
   </div>
 
   <div className="">
        <h2 className="text-base ">Drop Location</h2>
        <h4 className="text-gray-400  text-md font-medium  border-b-2 py-1 border-yellow-600">{dest}</h4>
    </div>
    <button className="bg-[#f9af1a] w-full py-2 text-lg font-semibold shadow-lg shadow-yellow-400/50 rounded-md" onClick={()=>{
        setRideDetailsPanel(true)
        setconfirmLocationPanel(false)
    }}>Confirm Location</button>
</div>
    )
}

export default ConfirmLocationPanel