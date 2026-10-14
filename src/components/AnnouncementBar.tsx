'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AnnouncementBar() {
  const { language, t } = useLanguage();

  const tickerItems = [
    { icon: '🐾', text: t.announcement },
    { 
      icon: '⭐️', 
      text: language === 'de' 
        ? 'Von über 2.480 Haustierbesitzern mit 4.8/5 bewertet' 
        : language === 'nl' 
          ? 'Beoordeeld met 4.8/5 door meer dan 2.480 baasjes' 
          : 'Rated 4.8/5 by 2,480+ European Pet Parents' 
    },
    { 
      icon: '🛡️', 
      text: language === 'de' 
        ? '30 Tage risikofreie Geld-zurück-Garantie' 
        : language === 'nl' 
          ? '30 Dagen niet-goed-geld-terug garantie' 
          : 'Official 30-Day Money-Back Guarantee' 
    },
    { 
      icon: '🚚', 
      text: language === 'de' 
        ? 'Schneller DHL-Paketversand direkt nach Deutschland' 
        : language === 'nl' 
          ? 'Snelle PostNL bezorging in heel Nederland & België' 
          : 'Fast Tracked Delivery with National EU Carriers' 
    },
    { 
      icon: '🛍️', 
      text: language === 'de' 
        ? 'Klarna Rechnungskauf: Erst erhalten, in 30 Tagen zahlen' 
        : language === 'nl' 
          ? 'iDEAL & Klarna achteraf betalen beschikbaar' 
          : 'Klarna Pay Later & Secure European Checkout' 
    },
    { 
      icon: '✨', 
      text: language === 'de' 
        ? 'Flüsterleise Ultraschall-Technologie (<30dB) — Für sensible Hunde & Katzen' 
        : language === 'nl' 
          ? 'Fluisterstille nanonevel (<30dB) — Ideaal voor angstige dieren' 
          : 'Whisper Quiet <30dB Ultrasonic Nano-Mist — Stress-free grooming' 
    },
  ];

  return (
    <div className="bg-[#003459] text-white text-xs sm:text-sm font-semibold py-2.5 overflow-hidden border-b border-[#002A48] select-none">
      <div className="relative w-full overflow-hidden flex">
        {/* Infinite Running Marquee Track */}
        <div className="animate-marquee items-center gap-10 whitespace-nowrap flex">
          {tickerItems.concat(tickerItems).map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2.5 px-3 flex-shrink-0">
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
