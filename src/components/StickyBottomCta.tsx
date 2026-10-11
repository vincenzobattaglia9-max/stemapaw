'use client';

import { useState, useEffect } from 'react';
import { BundleTier } from '@/data/productData';
import { ShoppingBag, Star } from 'lucide-react';

interface StickyBottomCtaProps {
  onOpenCheckout: () => void;
  selectedBundle: BundleTier;
}

export default function StickyBottomCta({
  onOpenCheckout,
  selectedBundle,
}: StickyBottomCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#FCEED5] py-3 px-4 shadow-monito-hover transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Product Info */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FCEED5] flex items-center justify-center text-[#003459] font-black text-sm">
            🐾
          </div>
          <div>
            <div className="flex items-center gap-1 text-[11px] text-[#FFB703]">
              <Star className="w-3 h-3 fill-[#FFB703] text-[#FFB703]" />
              <span className="font-bold text-[#003459]">4.9/5 Rating (2.4k+ Reviews)</span>
            </div>
            <div className="text-xs font-black text-[#003459]">
              Pettoh™ Pro • Free Tracked EU Shipping
            </div>
          </div>
        </div>

        {/* Center/Right: Pricing & CTA */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
          <div className="text-left sm:text-right">
            <span className="text-[10px] uppercase font-bold text-[#EDA415] tracking-wider block">
              Spring 50% Off
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-[#003459]">
                €{selectedBundle.price.toFixed(2)}
              </span>
              <span className="text-xs text-gray-400 line-through">
                €{selectedBundle.originalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="btn-spring bg-[#003459] hover:bg-[#002A48] text-white font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-[#003459]/25 flex items-center gap-2 animate-glow-pulse"
          >
            <ShoppingBag className="w-4 h-4 text-[#FFB703]" />
            <span>Claim 50% Off Now</span>
          </button>
        </div>

      </div>
    </div>
  );
}
