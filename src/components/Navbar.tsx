'use client';

import Link from 'next/link';
import { Search, ShoppingBag, Truck, Settings } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
  cartCount: number;
}

export default function Navbar({ onOpenCheckout, cartCount }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FCEED5]/95 backdrop-blur-md border-b border-[#F7DBA7] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Pettoh Brand Logo with Paw Badge */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-[#003459] flex items-center justify-center text-white shadow-md shadow-[#003459]/20 group-hover:scale-105 transition-transform flex-shrink-0">
              {/* Cute Vector Paw Icon */}
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-[#FFB703]">
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

          {/* Desktop Navigation Links - with safe margins so they never overlap */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold text-[#003459] mx-4">
            <a href="#buy-now" className="hover:text-[#FFB703] transition-colors whitespace-nowrap">Product & Bundles</a>
            <a href="#features" className="hover:text-[#FFB703] transition-colors whitespace-nowrap">Features</a>
            <a href="#comparison" className="hover:text-[#FFB703] transition-colors whitespace-nowrap">Why Pettoh?</a>
            <a href="#reviews" className="hover:text-[#FFB703] transition-colors whitespace-nowrap">Reviews (2.4k+)</a>
            <a href="#faq" className="hover:text-[#FFB703] transition-colors whitespace-nowrap">FAQ</a>
            <Link href="/track" className="flex items-center gap-1.5 text-[#003459]/80 hover:text-[#003459] transition-colors whitespace-nowrap">
              <Truck className="w-4 h-4 text-[#FFB703]" />
              <span>Track Order</span>
            </Link>
          </nav>

          {/* Right Actions: Currency, Admin & CTA */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Currency Pill */}
            <div className="hidden sm:flex items-center gap-1 bg-white/80 border border-gray-200 px-3 py-1.5 rounded-full text-xs font-bold text-[#003459]">
              <span>🇪🇺</span>
              <span>EUR (€)</span>
            </div>

            {/* Merchant Admin Portal */}
            <Link 
              href="/admin" 
              title="Merchant Order Dashboard"
              className="text-[#003459]/70 hover:text-[#003459] p-2 rounded-full hover:bg-white/50 transition-colors"
            >
              <Settings className="w-5 h-5" />
            </Link>

            {/* CTA Pettoh Pill Button */}
            <button
              onClick={onOpenCheckout}
              className="flex items-center gap-2 bg-[#003459] hover:bg-[#002A48] active:scale-95 text-white font-black text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-[#003459]/20 transition-all whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFB703]" />
              <span>Order Now</span>
              {cartCount > 0 && (
                <span className="bg-[#FFB703] text-[#003459] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center -mr-1">
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
