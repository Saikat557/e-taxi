import { useState } from "react";
import { MapPin, Circle } from "lucide-react";

export default function RidePanel({
  distanceKm = 4.8,
  fareInr = 142,
  onEndRide = () => console.log("End ride clicked — wire this to your end-ride endpoint"),
  rideContinuePanel,setRideContinuePanel,setRideCompletedPanel
}) {
  const [ending, setEnding] = useState(false);

  const handleEndRide = () => {
    setRideContinuePanel(false);
    setRideCompletedPanel(true)
    setEnding(true);
    onEndRide();
  };

  return (
    <div className={`flex items-end justify-center bg-slate-950 p-6 h-1/2 duration-500 absolute w-full ease-in-out ${rideContinuePanel?'bottom-0':'-bottom-full'}`}>
      <style>{`
        @keyframes ride-drive {
          0%   { left: 20%; }
          100% { left: 62%; }
        }
        .ride-car {
          animation: ride-drive 3.2s ease-in-out infinite alternate;
        }
        @media (prefers-reduced-motion: reduce) {
          .ride-car { animation: none; }
        }
      `}</style>

      <div className={`w-full max-w-sm  h-full rounded-3xl border border-slate-800 bg-slate-900 px-6 pb-6 pt-4 shadow-2xl `}>
        {/* drag handle */}
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-slate-700" />

        {/* status */}
        <div className="mb-5 flex items-center gap-2">
          <Circle className="h-2 w-2 animate-pulse fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Ride in progress
          </span>
        </div>

        {/* route strip */}
        <div className="relative mb-6 flex items-center justify-between px-1">
          <div
            className="absolute left-3 right-3 top-[5px] h-px"
            style={{
              backgroundImage:
                "linear-gradient(to right, #334155 60%, transparent 0%)",
              backgroundSize: "8px 1px",
              backgroundRepeat: "repeat-x",
            }}
          />
          <span className="ride-car absolute -top-2 text-base">🚗</span>

          <div className="z-10 flex flex-col items-center gap-1.5 bg-slate-900 px-1.5">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-slate-50" />
            <span className="text-[11px] text-slate-400">Pickup</span>
          </div>
          <div className="z-10 flex flex-col items-center gap-1.5 bg-slate-900 px-1.5">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-amber-400" />
            <span className="text-[11px] text-slate-400">Drop-off</span>
          </div>
        </div>

        {/* stats */}
        <div className="mb-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 px-4 pb-3.5 pt-4">
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Distance
            </div>
            <div className="font-mono text-2xl font-bold text-slate-50">
              {distanceKm.toFixed(1)}
              <span className="ml-1 text-sm font-medium text-slate-400">km</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950 px-4 pb-3.5 pt-4">
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Fare
            </div>
            <div className="font-mono text-2xl font-bold text-amber-400">
              ₹{Math.round(fareInr)}
            </div>
          </div>
        </div>

        {/* end ride */}
        <button
          onClick={handleEndRide}
          disabled={ending}
          className="w-full rounded-2xl bg-red-500 py-4 text-sm font-semibold text-white transition-colors hover:bg-red-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-red-800"
        >
          {ending ? "Ending ride…" : "End ride"}
        </button>
      </div>
    </div>
  );
}