'use client';

import Link from 'next/link';
import { ShoppingBag, Truck, Settings } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useAnimations';

interface NavbarProps {
  onOpenCheckout: () => void;
  cartCount: number;
}

export default function Navbar({ onOpenCheckout, cartCount }: NavbarProps) {
  const { visible, scrolled } = useNavbarScroll();

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-[#FCEED5]/95 backdrop-blur-md shadow-md border-b border-[#F7DBA7]/80'
          : 'bg-[#FCEED5] border-b border-[#F7DBA7]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Pettoh Brand Logo with Paw Badge */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-[#003459] flex items-center justify-center text-white shadow-md shadow-[#003459]/20 group-hover:scale-105 group-hover:rotate-[-4deg] transition-all duration-300 flex-shrink-0">
              {/* Cute Vector Paw Icon */}
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-[#FFB703] transition-transform duration-300 group-hover:scale-110">
                <ellipse cx="16" cy="20" rx="6.5" ry="5" />
                <circle cx="9.5" cy="12.5" r="2.5" />
                <circle cx="14" cy="9" r="2.8" />
                <circle cx="18" cy="9" r="2.8" />
                <circle cx="22.5" cy="12.5" r="2.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#003459] leading-none">
                Pettoh<span className="text-[#FFB703]">.</span>
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#003459]/70 mt-1">
                Ultrasonic Pet Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold text-[#003459] mx-4">
            <a href="#buy-now" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">Product &amp; Bundles</a>
            <a href="#features" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">Features</a>
            <a href="#comparison" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">Why Pettoh™?</a>
            <a href="#reviews" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">Reviews (2.4k+)</a>
            <a href="#faq" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">FAQ</a>
            <Link href="/track" className="flex items-center gap-1.5 text-[#003459]/80 hover:text-[#003459] transition-colors whitespace-nowrap">
              <Truck className="w-4 h-4 text-[#FFB703]" />
              <span>Track Order</span>
            </Link>
          </nav>

          {/* Right Actions: Currency, Admin & CTA */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Currency Pill */}
            <div className="hidden sm:flex items-center gap-1.5 bg-white/90 border border-gray-200/80 px-3 py-1.5 rounded-full text-xs font-bold text-[#003459] shadow-xs">
              <span>🇪🇺</span>
              <span>EUR (€)</span>
            </div>

            {/* CTA Pettoh Pill Button */}
            <button
              onClick={onOpenCheckout}
              className="btn-spring flex items-center gap-2 bg-[#003459] hover:bg-[#002A48] text-white font-black text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-[#003459]/25 whitespace-nowrap animate-glow-pulse"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFB703]" />
              <span>Order Now</span>
              {cartCount > 0 && (
                <span className="bg-[#FFB703] text-[#003459] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center -mr-1 animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
