'use client';

import { Truck, Clock, ShieldCheck, RefreshCw } from 'lucide-react';

const SHIPPING_ITEMS = [
  { icon: <Truck className="w-4 h-4 text-[#FFB703]" />, text: 'Free Tracked EU Delivery in 6-9 Days' },
  { icon: <ShieldCheck className="w-4 h-4 text-[#FFB703]" />, text: '30-Day Full Money-Back Guarantee' },
  { icon: <RefreshCw className="w-4 h-4 text-[#FFB703]" />, text: 'Free Returns & Easy Exchanges' },
  { icon: <Clock className="w-4 h-4 text-[#FFB703]" />, text: 'Orders Fulfilled Within 24h' },
  { icon: <Truck className="w-4 h-4 text-[#FFB703]" />, text: 'DHL · PostNL · Colissimo · Correos' },
  { icon: <ShieldCheck className="w-4 h-4 text-[#FFB703]" />, text: 'Stripe 256-Bit SSL Secure Checkout' },
];

export default function ShippingTrustBar() {
  return (
    <div className="bg-[#003459] py-3 overflow-hidden border-y border-[#002A48]">
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee items-center gap-12 whitespace-nowrap">
          {SHIPPING_ITEMS.concat(SHIPPING_ITEMS).map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2 px-4">
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
