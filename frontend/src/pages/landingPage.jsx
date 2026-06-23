import { ChevronUp, MapPin,SquareDot,ChevronDown } from "lucide-react";
import {useState} from "react"
const LandingPage = () => {
    const [locationPanel,setLocationPanel] = useState(false)


    const handlePanelOpen=()=>{
        setLocationPanel(true)
    }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
<div className="w-full h-screen max-w-[400px] border-2 border-gray-400">
      <img
        src="/image/map.gif"
        alt="map image"
        className="w-full h-2/3 object-cover"
      />
      <section className={`w-full  bg-white py-2 px-4 absolute bottom-0 duration-500 ease-in-out ${locationPanel?"h-full":"h-1/3"}`}>
        <div className="flex flex-col items-center justify-center w-full gap-5 mb-10">
          {!locationPanel && <ChevronUp onClick={handlePanelOpen} />}
          {locationPanel && <ChevronDown onClick={()=>{setLocationPanel(false)}}/>}
          <div className="flex flex-col gap-2 w-full">
            <div className="w-full relative " >
           <div className="w-full h-13 border-l-2 border-gray-600 absolute top-7 left-5"></div>
                <div className="w-full flex items-center justify-center bg-gray-200 border-2 border-gray-400 gap-2 px-2 rounded-sm mb-5 " onFocus={handlePanelOpen}>
                <MapPin className="text-gray-600" />
<input type="text" placeholder="Pickup Location"  className="outline-none  w-full h-full py-2 "  />

              </div>
              <div className="w-full flex items-center justify-center bg-gray-200 border-2 border-gray-400 gap-2 px-2 rounded-sm " onFocus={handlePanelOpen}>
                <SquareDot className="text-gray-600"/>
<input type="text" placeholder="Drop Location"  className="outline-none  w-full h-full py-2 "  />

              </div>

            
              
            </div>
            <button className="bg-[#fccc06] py-2 rounded-sm text-lg font-semibold shadow-md active:scale-95 duration-300 ease-in-out shadow-[#fccc06]">submit</button>
          </div>
        </div>

<div>
    all location list here
</div>

      </section>
    </div>
    </div>
    
  );
};
export default LandingPage;
