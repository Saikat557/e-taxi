import {MessagesSquare,Phone,ChevronDown} from "lucide-react"
const CarArrivingPanel=({carArrivingPanel,setCarArrivingPanel,setActiveRidePanel})=>{
    return (
        <div className={`w-full h-2/5 absolute bottom-0 bg-white gap-5 flex flex-col  z-8 duration-500 ease-in-out px-4 py-4 overflow-y-auto ${carArrivingPanel?"translate-y-0":"translate-y-full"}`}>
            {/* head */}
           <div >
            <div className="flex flex-col items-center -mb-2" >
 <ChevronDown className="text-gray-400" onClick={()=>{setCarArrivingPanel(false)}} />
            </div>
           
            <div className="flex items-center justify-between border-b-2 pb-2 border-gray-400">
<h1 className="text-sm font-medium ">Car Arriving</h1>
<p className="text-gray-400">5mins away</p>
           </div>
           </div>
           {/* mid */}
           <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-2">
<div className="flex items-center justify-center gap-2">
    <img src="https://img.magnific.com/free-photo/man-car-driving_23-2148889981.jpg?semt=ais_hybrid&w=740&q=80" alt="driver image" className="w-15 h-15 object-cover rounded-full" />
<div className="leading-5">
    <h2 className="text-md font-bold">Saikat  Bera</h2>
    <p className="text-gray-400">Driver</p>
</div>
</div>
<div className="flex gap-4">
    <div className="p-2 bg-green-600/15 rounded-full">
    <MessagesSquare className="text-green-800" />
</div>
<div className="p-2 bg-green-600/15 rounded-full">
    <Phone className="text-green-800" />
</div>
</div>
            </div>
            <div className="flex items-center justify-between">
                <div className="leading-5">
                    <h1 className="text-md font-semibold">$7/km</h1>
                    <p className="text-gray-400 text-sm">price</p>
                </div>
                <div className="leading-5">
                    <h1 className="text-md font-semibold">WB 30A 1234</h1>
                    <p className="text-gray-400 text-sm">Number</p>
                </div>
                <div className="leading-5">
                    <h1 className="text-md font-semibold">4 Persons</h1>
                    <p className="text-gray-400 text-sm">Seats</p>
                </div>
            </div>
            <div>

            </div>
           </div>
           {/* bottom */}
           <div className="flex flex-col gap-3">
<button className="w-full bg-amber-600 rounded text-lg font-medium ease-in-out duration-500 active:scale-95 py-2 text-white" onClick={()=>{setCarArrivingPanel(false)}}>Cancel Ride</button>
<button className="w-full bg-green-600 rounded text-lg font-medium ease-in-out duration-500 active:scale-95 py-2 text-white" onClick={() => setActiveRidePanel(true)}>
  Track Ride
</button>
           </div>
        </div>
    )
}

export default CarArrivingPanel