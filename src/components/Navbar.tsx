'use client';

import Link from 'next/link';
import { Search, ShoppingBag, Truck, Settings, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
  cartCount: number;
}

export default function Navbar({ onOpenCheckout, cartCount }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FCEED5]/90 backdrop-blur-md border-b border-[#F7DBA7]/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Monito Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-[#003459] flex items-center justify-center text-[#FCEED5] shadow-md group-hover:scale-105 transition-transform">
              <span className="text-xl">🐾</span>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-[#003459] font-sans">
                Monito<span className="text-[#FFB703]">.</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-[#003459]/70 -mt-1">
                Pets for Best
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#003459]">
            <a href="#features" className="hover:text-[#FFB703] transition-colors">Products & Features</a>
            <a href="#comparison" className="hover:text-[#FFB703] transition-colors">Why Monito?</a>
            <a href="#reviews" className="hover:text-[#FFB703] transition-colors">Pet Parents (2.4k+)</a>
            <a href="#faq" className="hover:text-[#FFB703] transition-colors">FAQ</a>
            <Link href="/track" className="flex items-center gap-1.5 text-[#003459]/80 hover:text-[#003459] transition-colors">
              <Truck className="w-4 h-4 text-[#FFB703]" />
              <span>Track Order</span>
            </Link>
          </nav>

          {/* Search Bar (Monito Signature) */}
          <div className="hidden md:flex items-center relative w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search steamy pet brush..."
              className="w-full bg-white/90 border border-gray-200 text-xs text-[#003459] pl-10 pr-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#003459] placeholder:text-gray-400"
            />
          </div>

          {/* Actions: Currency & Primary Button */}
          <div className="flex items-center gap-3">
            
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

            {/* CTA Monito Button */}
            <button
              onClick={onOpenCheckout}
              className="flex items-center gap-2 bg-[#003459] hover:bg-[#002A48] active:scale-95 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-full shadow-md shadow-[#003459]/20 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFB703]" />
              <span>Get Yours</span>
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
