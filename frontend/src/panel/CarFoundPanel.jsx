import {ChevronDown} from "lucide-react"
const CarFoundPanel = ({carFoundPanel,setCarFoundPanel,setCarArrivingPanel}) => {
  return (
    <div className={`h-1/3 w-full bg-white absolute bottom-0 ease-in-out duration-500 z-7  py-2 flex flex-col justify-evenly ${carFoundPanel?"translate-y-0":"translate-y-full"}`}>
        
      {/* head */}
      <div className="">
        <div className="flex justify-center -mb-2" >
<ChevronDown size={25} className="text-gray-400" onClick={()=>{setCarFoundPanel(false)}}/>
        </div>
        
        <div className="flex items-center justify-between mb-5 border-b-1 pb-2 px-4  border-gray-400">
     
        <div className="text-xl font-medium">Car Found</div>
        <div className="text-gray-400 text-base">5mins away</div>
      </div>
      </div>
      {/* mid */}
      <div className="flex items-center justify-between px-4 mb-5">
        <div className="flex  justify-start items-center ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfR9cbcu-4PAVwQ3TiwGNid-Eh6JYr5QyDRJ2-7kzrQ&s=10"
            alt="car Image"
            className="w-15 h-15 object-contain bg-[#db7a9a]   mr-4 "
          />
          <div>
            <h1 className="text-lg font-medium">Saikat Bera</h1>
            <p className="text-gray-400">Driver</p>
          </div>
        </div>
        <div className="flex items-end flex-col">
            <h1 className="text-base font-medium">7km</h1>
            <p className="text-sm text-gray-400">WB 30A 1234</p>
        </div>
      </div>

      {/* bottom  */}
      <div className="px-4">
        <button className="w-full py-2 rounded-md text-white font-medium text-lg bg-green-600 active:scale-95 ease-in-out duration-500" onClick={()=>{
          setCarArrivingPanel(true)
          setCarFoundPanel(false)
        }}>Request Driver</button>
      </div>
    </div>
  );
};

export default CarFoundPanel;
