import { Star } from "lucide-react";
const RideDetailsPanel = ({rideDetailsPanel,setRideDetailsPanel , setPaymentMethodPanel}) => {
    console.log(rideDetailsPanel)
  return (
    <div
     className={`w-full h-1/3 absolute  max-w-[400px] bg-white overflow-y-auto py-2 px-4 ease-in-out duration-500 bottom-0 z-3 transition-all ${rideDetailsPanel?"translate-y-0":"translate-y-full"}`}>
      <section className="flex  gap-2 overflow-x-auto">
        <div className="w-[90%] h-auto bg-gray-200/80 rounded-xl px-4 py-6 mb-3  shrink-0 active:bg-gray-300">
          <div className="flex gap-2 justify-start items-center mb-5">
            <img
              src="image/car-image.png"
              alt="car Image"
              className="w-25 h-15 object-cover bg-[#db7a9a] aspect-[7/3] rounded-xl mr-4"
            />
            <div>
              <h1 className="text-xl font-semibold">Honda City</h1>
              <p className="text-gray-400 test-xs">
                price: <span>57$/km</span>
              </p>
              <div className="flex ">
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="bg-white px-3 py-1 rounded-xl">7 min</div>
            <div className="bg-white px-3 py-1 rounded-xl">4 seats</div>
            <div className="bg-white px-3 py-1 rounded-xl">3 gears</div>
          </div>
        </div>
        <div className="w-[90%] h-auto bg-gray-200/80 rounded-xl px-4 py-6 mb-3 shrink-0 active:bg-gray-300">
          <div className="flex gap-2 justify-start items-center mb-5">
            <img
              src="image/car-image.png"
              alt="car Image"
              className="w-25 h-15 object-cover bg-[#db7a9a] aspect-[7/3] rounded-xl mr-4"
            />
            <div>
              <h1 className="text-xl font-semibold">Honda City</h1>
              <p className="text-gray-400 test-xs">
                price: <span>57$/km</span>
              </p>
              <div className="flex ">
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="bg-white px-3 py-1 rounded-xl">7 min</div>
            <div className="bg-white px-3 py-1 rounded-xl">4 seats</div>
            <div className="bg-white px-3 py-1 rounded-xl">3 gears</div>
          </div>
        </div>
        <div className="w-[90%] h-auto bg-gray-200/80 rounded-xl px-4 py-6 mb-3 shrink-0 active:bg-gray-300">
          <div className="flex gap-2 justify-start items-center mb-5">
            <img
              src="image/car-image.png"
              alt="car Image"
              className="w-25 h-15 object-cover bg-[#db7a9a] aspect-[7/3] rounded-xl mr-4"
            />
            <div>
              <h1 className="text-xl font-semibold">Honda City</h1>
              <p className="text-gray-400 test-xs">
                price: <span>57$/km</span>
              </p>
              <div className="flex ">
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} className="fill-green-600 text-green-600 "/>{" "}
                <Star size={15} strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="bg-white px-3 py-1 rounded-xl">7 min</div>
            <div className="bg-white px-3 py-1 rounded-xl">4 seats</div>
            <div className="bg-white px-3 py-1 rounded-xl">3 gears</div>
          </div>
        </div>
      </section>
      <div className="flex gap-5">
   <button className="w-full bg-amber-600 py-2 rounded-md text-lg font-semibold" onClick={()=>{setRideDetailsPanel(false)}}>cancel</button>
   <button className="w-full bg-green-600 py-2 rounded-md text-lg font-semibold" 
   onClick={()=>{setPaymentMethodPanel(true) 
    setRideDetailsPanel(false)}}>
        confirm
        </button>
      </div>
      
    </div>
  );
};

export default RideDetailsPanel;
