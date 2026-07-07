import { ChevronDown } from "lucide-react"

const RideCompletePanel = ({ rideCompletePanel, setRideCompletePanel }) => {
  return (
    <div className={`w-full h-2/5 absolute bottom-0 bg-white gap-5 flex flex-col z-10 duration-500 ease-in-out px-4 py-4 overflow-y-auto ${rideCompletePanel ? "translate-y-0" : "translate-y-full"}`}>
      <div>
        <div className="flex flex-col items-center -mb-2">
          <ChevronDown className="text-gray-400" onClick={() => setRideCompletePanel(false)} />
        </div>
        <div className="flex items-center justify-between border-b-2 pb-2 border-gray-400">
          <h1 className="text-sm font-medium">Ride Complete</h1>
          <p className="text-gray-400">Thank you!</p>
        </div>
      </div>

      <div className="space-y-3 px-2">
        <p className="text-lg font-semibold">Your ride is complete.</p>
        <div className="rounded-xl bg-gray-50 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Trip time</span>
            <span className="font-semibold">18 mins</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Distance</span>
            <span className="font-semibold">7.4 km</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Driver</span>
            <span className="font-semibold">Saikat Bera</span>
          </div>
        </div>
      </div>

      <div>
        <button
          className="w-full bg-green-600 rounded text-lg font-medium ease-in-out duration-500 active:scale-95 py-2 text-white"
          onClick={() => setRideCompletePanel(false)}
        >
          Pay 200 cash
        </button>
      </div>
    </div>
  )
}

export default RideCompletePanel
