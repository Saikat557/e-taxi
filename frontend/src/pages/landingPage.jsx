
import {useState,useEffect,useContext} from "react"
import SelectLocationPanel from "../panel/SelectLocationPanel.jsx"
import ConfirmLocationPanel from "../panel/ConfirmLocationPanel"
import RideDetailsPanel from "../panel/RideDetailsPanel.jsx"
import PaymentMethodPanel from "../panel/PaymentMethod.jsx"
import RiderSearchingPanel from "../panel/RiderSearchingPanel.jsx"
import CarFoundPanel from "../panel/CarFoundPanel.jsx"
import CarArrivingPanel from "../panel/CarArrivingPanel.jsx"
import ActiveRidePanel from "../panel/ActiveRidePanel.jsx"
import RideCompletePanel from "../panel/RideCompletePanel.jsx"
import {userContextValue} from "../context/userContext.jsx"

const LandingPage = () => {
    const [locationPanel,setLocationPanel] = useState(false)
    const [confirmLocationPanel,setconfirmLocationPanel] = useState(false)
    const [rideDetailsPanel,setRideDetailsPanel] = useState(false)
    const [paymentMethodPanel,setPaymentMethodPanel] = useState(false)
    const [riderSearchingPanel,setRiderSearchingPanel] = useState(false)
    const [anyActivePanel,setAnyActivePanel] = useState(false)
    const [carFoundPanel, setCarFoundPanel] = useState(false)
    const [carArrivingPanel,setCarArrivingPanel] = useState(false)
    const [activeRidePanel, setActiveRidePanel] = useState(false)
    const [rideCompletePanel, setRideCompletePanel] = useState(false)

    //all fields for ride

    const [pickup,setPickup]= useState("")
    const [dest,setDest] = useState("")
    const [vehicle,setVehicle]= useState("")
    const [payment,setPayment] = useState("")
    const [driver,setDriver] = useState("")

    //context

  

    

useEffect(()=>{
 
  if(confirmLocationPanel||rideDetailsPanel||paymentMethodPanel||riderSearchingPanel||carFoundPanel||carArrivingPanel||activeRidePanel||rideCompletePanel){
    setAnyActivePanel(true)
  }else{
     setAnyActivePanel(false)
  }
},[confirmLocationPanel,rideDetailsPanel,paymentMethodPanel,riderSearchingPanel,carFoundPanel,carArrivingPanel,activeRidePanel,rideCompletePanel])


    const handlePanelOpen=()=>{
        setLocationPanel(true)
    }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden ">
<div className="w-full h-screen max-w-[400px] ">
      <img
        src="/image/map.gif"
        alt="map image"
        className="w-full h-full object-cover sticky"
      />
      <SelectLocationPanel setPickup={setPickup} setDest={setDest} handlePanelOpen={handlePanelOpen} locationPanel={locationPanel} anyActivePanel={anyActivePanel}  setLocationPanel={setLocationPanel} setconfirmLocationPanel={setconfirmLocationPanel}/>
      <ConfirmLocationPanel pickup={pickup} dest={dest} confirmLocationPanel={confirmLocationPanel} setconfirmLocationPanel={setconfirmLocationPanel} setRideDetailsPanel={setRideDetailsPanel }/>
      <RideDetailsPanel setVehicle={setVehicle} rideDetailsPanel={rideDetailsPanel} setRideDetailsPanel={setRideDetailsPanel} setPaymentMethodPanel={setPaymentMethodPanel} />
      <PaymentMethodPanel setPayment={setPayment} paymentMethodPanel={paymentMethodPanel} setPaymentMethodPanel={setPaymentMethodPanel} setRiderSearchingPanel={setRiderSearchingPanel}/>
      <RiderSearchingPanel riderSearchingPanel={riderSearchingPanel} setCarFoundPanel={setCarFoundPanel} setRiderSearchingPanel={setRiderSearchingPanel} />
      <CarFoundPanel setDriver={setDriver} carFoundPanel={carFoundPanel} setCarFoundPanel={setCarFoundPanel} setCarArrivingPanel={setCarArrivingPanel} />
      <CarArrivingPanel carArrivingPanel={carArrivingPanel} setCarArrivingPanel={setCarArrivingPanel} setActiveRidePanel={setActiveRidePanel} />
      <ActiveRidePanel
        activeRidePanel={activeRidePanel}
        setActiveRidePanel={setActiveRidePanel}
        setRideCompletePanel={setRideCompletePanel}
        
      />
      <RideCompletePanel rideCompletePanel={rideCompletePanel} setRideCompletePanel={setRideCompletePanel} />
    </div>
    </div>
    
  );
};
export default LandingPage;
