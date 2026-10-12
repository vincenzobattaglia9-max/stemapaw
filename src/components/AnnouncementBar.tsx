'use client';

import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

const TICKER_ITEMS = [
  { icon: '🐾', text: 'Spring Offer: Up to 50% OFF + FREE Tracked Delivery across Europe (6-9 Days)' },
  { icon: '⭐️', text: 'Rated 4.9/5 by 2,480+ European Pet Parents' },
  { icon: '🛡️', text: 'Official 30-Day Money-Back Guarantee' },
  { icon: '🇩🇪', text: 'Lieferung nach Deutschland: 6-8 Werktage' },
  { icon: '🇫🇷', text: 'Livraison express suivie vers la France' },
  { icon: '✨', text: 'Pettoh™ Ultrasonic Nano-Mist Technology — Whisper Quiet <30dB' },
];

export default function AnnouncementBar() {
  return (
    <div className="bg-[#003459] text-white text-xs sm:text-sm font-semibold py-2.5 overflow-hidden border-b border-[#002A48] select-none">
      <div className="relative w-full overflow-hidden flex">
        {/* Infinite Running Marquee Track */}
        <div className="animate-marquee items-center gap-10 whitespace-nowrap">
          {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2.5 px-3">
              <span className="text-sm">{item.icon}</span>
              <span className="text-[#FCEED5] font-bold tracking-wide text-xs sm:text-[13px]">
                {item.text}
              </span>
              <span className="text-[#FFB703] opacity-60 text-xs ml-4">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
