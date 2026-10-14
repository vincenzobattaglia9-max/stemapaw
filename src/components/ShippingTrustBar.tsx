'use client';

import { Truck, Clock, ShieldCheck, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ShippingTrustBar() {
  const { t } = useLanguage();

  const items = [
    { icon: <Truck className="w-4 h-4 text-[#FFB703]" />, text: t.shippingTrust.item1 },
    { icon: <ShieldCheck className="w-4 h-4 text-[#FFB703]" />, text: t.shippingTrust.item2 },
    { icon: <RefreshCw className="w-4 h-4 text-[#FFB703]" />, text: t.shippingTrust.item3 },
    { icon: <Clock className="w-4 h-4 text-[#FFB703]" />, text: t.shippingTrust.item4 },
    { icon: <Truck className="w-4 h-4 text-[#FFB703]" />, text: t.shippingTrust.item5 },
    { icon: <ShieldCheck className="w-4 h-4 text-[#FFB703]" />, text: t.shippingTrust.item6 },
  ];

  return (
    <div className="bg-[#003459] py-3 overflow-hidden border-y border-[#002A48]">
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee items-center gap-12 whitespace-nowrap flex">
          {items.concat(items).map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2 px-4 flex-shrink-0">
              {item.icon}
              <span className="text-[#FCEED5] font-bold text-xs tracking-wide">{item.text}</span>
              <span className="text-[#FFB703]/40 text-xs ml-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
