import { ChevronUp, MapPin, SquareDot, ChevronDown } from "lucide-react";
import { useRef, useState,useEffect } from "react";
import axios from "axios";
const SelectLocationPanel = ({
  locationPanel,
  handlePanelOpen,
  setLocationPanel,
  setconfirmLocationPanel,
  anyActivePanel,
  setPickup,
  setDest
}) => {
  const [placeName, setPlaceName] = useState([{}]);
  const [pickupClick,setPickupClick] = useState(false)
  const [destClick,setDestClick] = useState(false)

  const [pickupInput,setPickupInput] = useState("")
  const [destInput,setDestInput] = useState("")

  

  let timerId;

  const handleInput = async (e) => {
    const value = e.target.value;
    clearTimeout(timerId);
    timerId = setTimeout(async () => {
    try{
        if (value.length > 3) {
        const res = await axios.get("http://localhost:3000/map/suggestion", {
          params: {
            p: value,
          },
        });
        setPlaceName(res.data);
      }
    }catch(err){
      console.log(err.response.message)
    }
    }, 1000);
  };

  useEffect(()=>{

  },[placeName])


  return (
    <section
      className={`w-full h-1/3 max-w-[400px] mx-auto bg-white py-2 px-4 absolute bottom-0  duration-500 ease-in-out ${locationPanel ? "h-full" : "h-1/3"} ${anyActivePanel ? "translate-y-full" : "translate-y-0"} z-1`}
    >
      <div className="flex flex-col items-center justify-center w-full gap-5  mb-10">
        {!locationPanel && <ChevronUp onClick={handlePanelOpen} />}
        {locationPanel && (
          <ChevronDown
            onClick={() => {
              setLocationPanel(false);
            }}
          />
        )}
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full relative ">
            <div className="w-full h-13 border-l-2 border-gray-600 absolute top-7 left-5"></div>
            <div
              className="w-full flex items-center justify-center bg-gray-200 border-2 border-gray-400 gap-2 px-2 rounded-sm mb-5 "
              onFocus={handlePanelOpen}
            >
              <MapPin className="text-gray-600" />
              <input
              onClick={()=>{
                setDestClick(false)
                setPickupClick(true)
              }}
                type="text"
                placeholder="Pickup Location"
                className="outline-none  w-full h-full py-2 "
                onChange={(e) => {
                  handleInput(e);
                  setPickupInput(e.target.value)
                }}
                value={pickupInput}
              />
            </div>
            <div
              className="w-full flex items-center justify-center bg-gray-200 border-2 border-gray-400 gap-2 px-2 rounded-sm "
              onFocus={handlePanelOpen}
            >
              <SquareDot className="text-gray-600" />
              <input
              onClick={()=>{
                setDestClick(true)
                setPickupClick(false)
              }}
              value={destInput}
               onChange={(e) => {
                  handleInput(e);
                  setDestInput(e.target.value)
                }}
                type="text"
                placeholder="Drop Location"
                className="outline-none  w-full h-full py-2 "
              />
            </div>
          </div>
          <button
            onClick={() => {
              setconfirmLocationPanel(true);
              setLocationPanel(false);
            }}
            className="bg-[#fccc06] py-2 rounded-sm text-lg font-semibold shadow-md active:scale-95 duration-300 ease-in-out shadow-[#fccc06]"
          >
            submit
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {placeName.map((p,idx)=>{return <div key={idx} className="text-l font-medium"
        
        onClick={()=>
          
       {
         if(pickupClick){
          setPickup(p.name)
          setPickupInput(p.name)
       
        }
        if(destClick){
          setDest(p.name)
         setDestInput(p.name)
        }
       }
        }>{p.name}</div>})}
      </div>
    </section>
  );
};
export default SelectLocationPanel;
