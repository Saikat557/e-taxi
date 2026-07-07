import {useEffect} from "react"
const RiderSearchingPanel=({riderSearchingPanel,setRiderSearchingPanel,setCarFoundPanel})=>{


    useEffect(()=>{
        let timerId;
        if(riderSearchingPanel){


       timerId=setTimeout(()=>{
       setRiderSearchingPanel(false)
       setCarFoundPanel(true)
      },2000)
        }
      
        return() => clearTimeout(timerId)
    },[riderSearchingPanel])

    return(
        <div className={`w-full h-auto absolute bottom-0 bg-white px-4 py-5 ease-in-out duration-500 text-center  z-6  ${riderSearchingPanel?"translate-y-0":"translate-y-full"} `}>
           <div className="text-xl font-medium">
           
            Searching for Driver  
             <span className="mx-4">
<span className="dot-animate mx-1 text-2xl font-bold " >.</span>
            <span className="dot-animate mx-1 text-2xl font-bold" >.</span>
            <span className="dot-animate mx-1 text-2xl font-bold" >.</span>
            </span>
           </div>
        </div>
    )
}

export default RiderSearchingPanel