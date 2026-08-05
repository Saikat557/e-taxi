import React, { useRef, useState } from "react";
import { User, MapPin, Navigation, ShieldCheck } from "lucide-react";

// ---- Sample data — swap with the real confirmed-ride payload from your socket/API ----
const defaultRide = {
  passengerName: "Priya Sharma",
  passengerPhoto: "PS",
  pickup: "Sonachura, Digha Road",
  destination: "Haldia Dock Complex, Durgachak",
};

export default function StartRideOtp({
  ride = defaultRide,
  otpLength = 4,
  onStartRide = () => {},

  otpPanel,setOtpPanel,setRideContinuePanel
}) {
  const [digits, setDigits] = useState(Array(otpLength).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const otp = digits.join("");
  const isComplete = otp.length === otpLength;

  const handleChange = (index, value) => {
    const clean = value.replace(/[^0-9]/g, "").slice(-1);
    const next = [...digits];
    next[index] = clean;
    setDigits(next);
    setError("");

    if (clean && index < otpLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, otpLength);
    if (!pasted) return;
    e.preventDefault();
    setDigits(pasted.split("").concat(Array(otpLength - pasted.length).fill("")));
    inputsRef.current[Math.min(pasted.length, otpLength - 1)]?.focus();
  };

  const handleStart = () => {
    if (!isComplete) {
      setError("Enter the full OTP to start the ride.");
      return;
    }
    onStartRide(otp);
  };

  return (
    <div className={`min-h-screen h-1/2 w-full bg-zinc-950 flex items-end justify-center py-8 px-4 absolute duration-500 ease-in-out ${otpPanel?'bottom-0':'-bottom-full'}`}>
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-5">
        <p className="text-xs text-zinc-500 tracking-widest uppercase mb-4">
          Confirm pickup
        </p>

        {/* Passenger */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-11 w-11 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center text-sm font-bold shrink-0">
            {ride.passengerPhoto}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-zinc-50 truncate">{ride.passengerName}</p>
            <p className="text-xs text-zinc-500">Passenger</p>
          </div>
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

        {/* OTP entry */}
        <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <p className="text-sm font-medium text-zinc-200">Ask the passenger for the ride OTP</p>
          </div>

          <div className="flex justify-center gap-3" onPaste={handlePaste}>
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                inputMode="numeric"
                maxLength={1}
                className="h-12 w-11 text-center text-lg font-semibold rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-50 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              />
            ))}
          </div>

          {error && <p className="text-xs text-red-400 text-center mt-3">{error}</p>}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
           
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-950 text-zinc-300 font-semibold py-3 hover:bg-zinc-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={()=>{
               setOtpPanel(false) 
               setRideContinuePanel(true)
            }}
            disabled={!isComplete}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-amber-400 text-zinc-950 font-semibold py-3 hover:bg-amber-300 disabled:opacity-40 disabled:hover:bg-amber-400 transition-colors"
          >
            <Navigation className="h-4 w-4" />
            Start ride
          </button>
        </div>
      </div>
    </div>
  );
}