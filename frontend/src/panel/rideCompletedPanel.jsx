import { useEffect, useState } from "react";
import { Check, IndianRupee } from "lucide-react";

// Simple deterministic confetti layout so it doesn't reshuffle on every render
const CONFETTI = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 53) % 100,
  delay: (i % 6) * 0.15,
  duration: 2.2 + (i % 5) * 0.3,
  size: 5 + (i % 3) * 2,
  color: ["bg-amber-400", "bg-emerald-400", "bg-sky-400", "bg-zinc-100"][i % 4],
}));

export default function RideCompletedPanel({
  rideCompletedPanel,
  setRideCompletedPanel,
  amount = 246,
  distanceKm = 4.8,
  onDone = () => console.log("Done clicked — navigate back to captain home / next ride"),
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!rideCompletedPanel) {
      setCount(0);
      return;
    }
    let frame;
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * amount));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [rideCompletedPanel, amount]);

  const handleDone = () => {
    onDone();
    setRideCompletedPanel(false);
  };

  
  return (
    <div
      className={`absolute  z-50 flex items-end justify-center transition-opacity duration-300 w-full  ${rideCompletedPanel?'bottom-0':'-bottom-full'} `}
    >
      <style>{`
        @keyframes rc-confetti-fall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          100% { transform: translateY(340px) rotate(360deg); opacity: 0; }
        }
        @keyframes rc-check-pop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes rc-ring-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.45); }
          100% { box-shadow: 0 0 0 16px rgba(52, 211, 153, 0); }
        }
        .rc-confetti { animation: rc-confetti-fall linear infinite; }
        .rc-check { animation: rc-check-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
        .rc-ring { animation: rc-ring-pulse 1.6s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .rc-confetti, .rc-check, .rc-ring { animation: none; }
        }
      `}</style>

      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={handleDone}
      />

      {/* sheet */}
      <div
        className={`relative w-full max-w-md rounded-t-3xl border border-zinc-800 bg-zinc-950 px-6 pb-8 pt-6 overflow-hidden transition-transform duration-500 ease-out `}
      >
        {/* confetti field */}
        {rideCompletedPanel && (
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden">
            {CONFETTI.map((c, i) => (
              <span
                key={i}
                className={`rc-confetti absolute top-0 rounded-sm ${c.color}`}
                style={{
                  left: `${c.left}%`,
                  width: c.size,
                  height: c.size,
                  animationDelay: `${c.delay}s`,
                  animationDuration: `${c.duration}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-zinc-800" />

        {/* success check */}
        <div className="flex flex-col items-center text-center">
          <div className="rc-ring rc-check mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500">
            <Check className="h-8 w-8 text-zinc-950" strokeWidth={3} />
          </div>

          <h2 className="text-lg font-bold text-zinc-50">Ride completed</h2>
          <p className="mt-1 text-sm text-zinc-500">
            {distanceKm.toFixed(1)} km trip · payment received
          </p>

          {/* amount */}
          <div className="mt-6 flex items-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4">
            <IndianRupee className="h-6 w-6 text-amber-400" strokeWidth={2.5} />
            <span className="font-mono text-4xl font-bold tabular-nums text-amber-400">
              {count}
            </span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-wide text-zinc-600">
            Added to your earnings
          </p>
        </div>

        <button
          onClick={handleDone}
          className="mt-7 w-full rounded-2xl bg-zinc-100 py-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white active:scale-[0.98]"
        >
          Done
        </button>
      </div>
    </div>
  );
}