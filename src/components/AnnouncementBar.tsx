'use client';

import { useState, useEffect } from 'react';
import { Truck, Sparkles, Flame } from 'lucide-react';

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSec = timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds;

  return (
    <div className="bg-[#003459] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 border-b border-[#002A48]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
        
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="bg-[#FCEED5] text-[#003459] text-[10px] uppercase font-black px-2 py-0.5 rounded-full">
            Spring Offer
          </span>
          <span className="text-[#FCEED5] font-bold">
            50% OFF + FREE Tracked Delivery Across Europe (6-9 Days)
          </span>
        </div>

        <div className="flex items-center gap-3 mx-auto sm:mx-0 text-xs">
          <span className="text-gray-300 hidden md:inline">Special Price expires in:</span>
          <div className="bg-[#002A48] text-[#FFB703] font-mono font-bold px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#FFB703]" />
            <span>{timeLeft.minutes}:{formatSec}</span>
          </div>
          <span className="text-gray-400">🇪🇺 All EU Countries</span>
        </div>

      </div>
    </div>
  );
}
