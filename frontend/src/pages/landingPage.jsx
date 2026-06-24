
import {useState} from "react"
import SelectLocationPanel from "../panel/SelectLocationPanel.jsx"
import ConfirmLocationPanel from "../panel/ConfirmLocationPanel"
const LandingPage = () => {
    const [locationPanel,setLocationPanel] = useState(false)
    const [confirmLocationPanel,setconfirmLocationPanel] = useState(false)


    const handlePanelOpen=()=>{
        setLocationPanel(true)
    }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
<div className="w-full h-screen max-w-[400px] ">
      <img
        src="/image/map.gif"
        alt="map image"
        className="w-full h-2/3 object-cover"
      />
      <SelectLocationPanel handlePanelOpen={handlePanelOpen} locationPanel={locationPanel} setLocationPanel={setLocationPanel} setconfirmLocationPanel={setconfirmLocationPanel}/>
      <ConfirmLocationPanel confirmLocationPanel={confirmLocationPanel} setconfirmLocationPanel={setconfirmLocationPanel}/>
    </div>
    </div>
    
  );
};
export default LandingPage;
