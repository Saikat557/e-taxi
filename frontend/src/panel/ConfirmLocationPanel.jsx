import {ChevronDown} from "lucide-react"
const ConfirmLocationPanel = ({confirmLocationPanel,setconfirmLocationPanel})=>{
    return (
<div className={`h-1/3 w-full bg-white  flex flex-col max-w-[400px] gap-4 px-4  py-5 absolute ease-in-out transition-all duration-500  z-2 ${confirmLocationPanel?"bottom-0":"-bottom-full"}`}>
   <div className="flex flex-col items-center w-full">
    <ChevronDown className="text-gray-400" onClick={()=>{setconfirmLocationPanel(false)}} />
       <div className="w-full">
        <h2 className="text-base ">Pick Up Location</h2>
        <h4 className="text-gray-400 text-xl font-md border-b-2   py-2 border-yellow-600">Location 1</h4>
    </div>
   </div>
 
   <div className="">
        <h2 className="text-base ">Drop Location</h2>
        <h4 className="text-gray-400 text-xl font-md border-b-2 py-2 border-yellow-600">Location 2</h4>
    </div>
    <button className="bg-[#f9af1a] w-full py-2 text-lg font-semibold shadow-lg shadow-yellow-400/50 rounded-md">Confirm Location</button>
</div>
    )
}

export default ConfirmLocationPanel