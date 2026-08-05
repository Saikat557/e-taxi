import React from "react";
import { MapPin, Navigation, Clock, Ruler, IndianRupee, X, Check } from "lucide-react";

// ---- Sample data — swap with the real ride request payload from your socket/API ----
const defaultRide = {
  distance: "6.4 km",
  fare: 185,
  time: "18 min",
  pickup: "Sonachura, Digha Road",
  destination: "Haldia Dock Complex, Durgachak",
};

export default function RideRequestPanel({
  ride = defaultRide,
acceptRidePanel,setAcceptRidePanel,setOtpPanel
}) {

  return (
    <div className={`min-h-1/2 bg-zinc-950 flex items-end justify-center py-8 px-4 absolute duration-500 ease-in-out  w-full ${acceptRidePanel?'bottom-0':'-bottom-full'}`}>
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-zinc-500 tracking-widest uppercase">
            New ride request
          </p>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Route */}
        <div className="flex gap-3 mb-5">
          <div className="flex flex-col items-center pt-1">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="w-px flex-1 bg-zinc-700 my-1" />
            <MapPin className="h-3.5 w-3.5 text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="mb-3">
              <p className="text-xs text-zinc-500">Pickup</p>
              <p className="text-sm font-medium text-zinc-100 truncate">{ride.pickup}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500">Destination</p>
              <p className="text-sm font-medium text-zinc-100 truncate">{ride.destination}</p>
            </div>
          </div>
        </div>

        {/* Trip stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-3 flex flex-col items-center gap-1">
            <Ruler className="h-4 w-4 text-sky-400" />
            <p className="text-sm font-semibold text-zinc-50">{ride.distance}</p>
            <p className="text-[11px] text-zinc-500">Distance</p>
          </div>
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-3 flex flex-col items-center gap-1">
            <Clock className="h-4 w-4 text-sky-400" />
            <p className="text-sm font-semibold text-zinc-50">{ride.time}</p>
            <p className="text-[11px] text-zinc-500">Time</p>
          </div>
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-3 flex flex-col items-center gap-1">
            <IndianRupee className="h-4 w-4 text-amber-400" />
            <p className="text-sm font-semibold text-zinc-50">₹{ride.fare}</p>
            <p className="text-[11px] text-zinc-500">Fare</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
          onClick={()=>{
            setAcceptRidePanel(false)
          }}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 text-red-400 font-semibold py-3 hover:bg-red-500/20 transition-colors"
          >
            <X className="h-4 w-4" />
            Reject
          </button>
          <button
          onClick={()=>{
            setOtpPanel(true)
            setAcceptRidePanel(false)
          }}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-400 text-zinc-950 font-semibold py-3 hover:bg-amber-300 transition-colors"
          >
            <Check className="h-4 w-4" />
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}