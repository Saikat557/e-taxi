import React, { useState } from "react";
import AcceptRideFromCaptainSide from "../panel/acceptRideFromCaptainSide"
import EnterOtpToStartRide from "../panel/enterOtpToStartRide"
import RideContinuePanel from "../panel/rideContinuePanel"
import RideCompletedPanel from "../panel/rideCompletedPanel"

import {
  Star,
  Wallet,
  Route,
  ShieldCheck,
  Phone,
  Users,
  Palette,
  Car,
  Power,
} from "lucide-react";

// ---- Sample data — swap with real captain/vehicle/stats data from your API ----
const defaultCaptain = {
  name: "Arindam Chatterjee",
  age: 34,
  licenseNumber: "WB-42 2018 0071234",
  phone: "+91 98765 43210",
  photoInitials: "AC",
  verified: true,
};

const defaultVehicle = {
  plateNumber: "WB 22 A 4521",
  type: "Sedan",
  model: "Maruti Suzuki Dzire",
  color: "White",
  seatCapacity: 4,
};

const defaultStats = {
  todaysEarning: 1840,
  todaysRides: 12,
  rating: 4.8,
};

function StatCard({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex-1 rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-4 flex flex-col items-start gap-2">
      <div className={`h-9 w-9 rounded-full flex items-center justify-center ${accent}`}>
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-lg font-semibold text-zinc-50 leading-none">{value}</p>
      <p className="text-xs text-zinc-500 tracking-wide">{label}</p>
    </div>
  );
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-zinc-800 last:border-b-0">
      <div className="flex items-center gap-2 text-zinc-400 text-sm">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>
      <span className="text-sm font-medium text-zinc-100">{value}</span>
    </div>
  );
}

export default function CaptainHome({
  captain = defaultCaptain,
  vehicle = defaultVehicle,
  stats = defaultStats,
}) {
  const [online, setOnline] = useState(true);

  //use state
  const [acceptRidePanel,setAcceptRidePanel] = useState(false)
  const [otpPanel,setOtpPanel] = useState(false)
  const [rideContinuePanel,setRideContinuePanel] = useState(false)
  const [rideCompletedPanel,setRideCompletedPanel] = useState(false)

 


  return (
    <div className="overflow-hidden relative">
        <div className="min-h-screen bg-zinc-950 flex justify-center py-8 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-zinc-500 tracking-widest uppercase">Captain</p>
            <h1 className="text-xl font-bold text-zinc-50">Dashboard</h1>
          </div>
          <button
            onClick={() => setOnline((v) => !v)}
            className={`flex items-center gap-2 rounded-full pl-3 pr-1.5 py-1.5 border transition-colors ${
              online
                ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                : "bg-zinc-900 border-zinc-800 text-zinc-500"
            }`}
          >
            <span className="text-xs font-semibold">
              {online ? "Online" : "Offline"}
            </span>
            <span
              className={`h-6 w-6 rounded-full flex items-center justify-center ${
                online ? "bg-emerald-500 text-zinc-950" : "bg-zinc-700 text-zinc-300"
              }`}
            >
              <Power className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>

        {/* Captain profile card */}
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 mb-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center text-lg font-bold shrink-0">
              {captain.photoInitials}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="text-lg font-semibold text-zinc-50 truncate">
                  {captain.name}
                </h2>
                {captain.verified && (
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                )}
              </div>
              <p className="text-sm text-zinc-500">{captain.age} years old</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800">
            <DetailRow icon={ShieldCheck} label="License number" value={captain.licenseNumber} />
            <DetailRow icon={Phone} label="Phone" value={captain.phone} />
          </div>
        </div>

        {/* Vehicle card */}
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 mb-4">
          <p className="text-xs text-zinc-500 tracking-widest uppercase mb-3">Vehicle</p>

          {/* Number plate */}
          <div className="mb-4 flex justify-center">
            <div className="bg-amber-400 border-4 border-zinc-950 rounded-md px-5 py-2">
              <span className="font-mono text-xl font-bold tracking-widest text-zinc-950">
                {vehicle.plateNumber}
              </span>
            </div>
          </div>

          <DetailRow icon={Car} label="Type" value={vehicle.type} />
          <DetailRow icon={Route} label="Model" value={vehicle.model} />
          <DetailRow icon={Palette} label="Color" value={vehicle.color} />
          <DetailRow icon={Users} label="Seat capacity" value={vehicle.seatCapacity} />
        </div>

        {/* Stats */}
        <div className="flex gap-3">
          <StatCard
            icon={Wallet}
            label="Today's earning"
            value={`₹${stats.todaysEarning.toLocaleString("en-IN")}`}
            accent="bg-amber-400/15 text-amber-400"
          />
          <StatCard
            icon={Route}
            label="Today's rides"
            value={stats.todaysRides}
            accent="bg-sky-400/15 text-sky-400"
          />
          <StatCard
            icon={Star}
            label="Rating"
            value={stats.rating.toFixed(1)}
            accent="bg-emerald-400/15 text-emerald-400"
          />
        </div>
      </div>
    </div>
    <AcceptRideFromCaptainSide acceptRidePanel={acceptRidePanel} setAcceptRidePanel={setAcceptRidePanel} setOtpPanel={setOtpPanel} />
    <EnterOtpToStartRide otpPanel={otpPanel} setRideContinuePanel={setRideContinuePanel} setOtpPanel={setOtpPanel}/>
    <RideContinuePanel rideContinuePanel={rideContinuePanel} setRideContinuePanel={setRideContinuePanel} setRideCompletedPanel={setRideCompletedPanel}/>
    <RideCompletedPanel rideCompletedPanel={rideCompletedPanel}  setRideCompletedPanel={setRideCompletedPanel}  />
    </div>
  );
}