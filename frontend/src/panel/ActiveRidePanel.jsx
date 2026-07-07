import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

const ActiveRidePanel = ({
  activeRidePanel,
  setActiveRidePanel,
  setRideCompletePanel,
}) => {
 
  useEffect(() => {
  
    let timerId;
    if (activeRidePanel) {
          
      timerId = setTimeout(() => {
        setRideCompletePanel(true);
        setActiveRidePanel(false);
      }, 5000);
    }
    return () => clearTimeout(timerId);
  }, [activeRidePanel]);

  return (
    <div
      className={`w-full h-2/5 absolute bottom-0 bg-white gap-5 flex flex-col z-9 duration-500 ease-in-out px-4 py-4 overflow-y-auto ${activeRidePanel ? "translate-y-0" : "translate-y-full"}`}
    >
      <div>
        <div className="flex flex-col items-center -mb-2">
          <ChevronDown
            className="text-gray-400"
            onClick={() => setActiveRidePanel(false)}
          />
        </div>
        <div className="flex items-center justify-between border-b-2 pb-2 border-gray-400">
          <h1 className="text-sm font-medium">Active Ride</h1>
          <p className="text-gray-400">ETA</p>
        </div>
      </div>

      <div className="flex items-center gap-3 px-2">
        <img
          src="https://img.magnific.com/free-photo/man-car-driving_23-2148889981.jpg?semt=ais_hybrid&w=740&q=80"
          alt="driver logo"
          className="w-16 h-16 rounded-full object-cover border border-gray-200"
        />
        <div className="leading-5">
          <h2 className="text-lg font-bold">saikat bera</h2>
          <p className="text-gray-500">Driver on the way</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-4">
        <div>
          <p className="text-sm text-gray-500">Arrival at destination</p>
          <h1 className="text-2xl font-semibold">4mins</h1>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Status</p>
          <span className="inline-flex rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-semibold">
            On route
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          className="w-full bg-amber-600 rounded text-lg font-medium ease-in-out duration-500 active:scale-95 py-2 text-white"
          onClick={() => setActiveRidePanel(false)}
        >
          Close
        </button>
        
      </div>
    </div>
  );
};

export default ActiveRidePanel;
