'use client';

import Link from 'next/link';
import { Truck, ShieldCheck, RotateCcw, Heart, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FCEED5] rounded-t-[40px] sm:rounded-t-[60px] pt-14 pb-10 border-t border-[#F7DBA7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Pettoh Signature Newsletter Box */}
        <div className="bg-[#003459] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 text-white shadow-monito-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <span className="text-xs uppercase font-black tracking-widest text-[#FFB703]">
                Pettoh Community
              </span>
              <h3 className="text-xl sm:text-3xl font-black">
                Join 10,000+ Happy European Pet Parents
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Receive weekly pet wellness tips, grooming secrets, and exclusive member discounts.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-2 rounded-full flex flex-col sm:flex-row gap-2 shadow-md">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-full text-[#003459] focus:outline-none placeholder:text-gray-400"
                />
                <button className="bg-[#003459] hover:bg-[#002A48] text-white font-black text-xs sm:text-sm px-6 py-3 rounded-full transition-all flex items-center justify-center gap-1.5 flex-shrink-0">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation & Trust Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#003459] flex items-center justify-center text-white">
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-[#FFB703]">
                  <ellipse cx="16" cy="20" rx="6.5" ry="5" />
                  <circle cx="9.5" cy="12.5" r="2.5" />
                  <circle cx="14" cy="9" r="2.8" />
                  <circle cx="18" cy="9" r="2.8" />
                  <circle cx="22.5" cy="12.5" r="2.5" />
                </svg>
              </div>
              <span className="text-2xl font-black text-[#003459] tracking-tight">
                Pettoh<span className="text-[#FFB703]">.</span>
              </span>
            </div>
            <p className="text-xs text-[#667479] max-w-sm leading-relaxed">
              Pettoh™ Europe is dedicated to providing high quality, gentle grooming gadgets for dogs and cats.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#003459] font-bold">
              <span>Shipped across:</span>
              <span>🇩🇪 🇫🇷 🇳🇱 🇮🇹 🇪🇸 🇦🇹 🇸🇪 🇧🇪 🇬🇧 🇪🇺</span>
            </div>
          </div>

          <div>
            <h5 className="font-black text-[#003459] text-xs uppercase tracking-wider mb-3">Explore</h5>
            <ul className="space-y-2 text-xs font-bold text-[#667479]">
              <li><a href="#buy-now" className="hover:text-[#003459]">Pettoh™ Pro Brush</a></li>
              <li><Link href="/track" className="hover:text-[#003459]">Track European Order</Link></li>
              <li><a href="#reviews" className="hover:text-[#003459]">Verified Reviews</a></li>
              <li><Link href="/admin" className="hover:text-[#003459]">Merchant Portal</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-[#003459] text-xs uppercase tracking-wider mb-3">Consumer Rights</h5>
            <ul className="space-y-2 text-xs font-bold text-[#667479]">
              <li><span className="hover:text-[#003459] cursor-pointer">EU 30-Day Money-Back Guarantee</span></li>
              <li><span className="hover:text-[#003459] cursor-pointer">GDPR Privacy Policy</span></li>
              <li><span className="hover:text-[#003459] cursor-pointer">Shipping & Customs Policy</span></li>
              <li><span className="hover:text-[#003459] cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#F7DBA7] text-xs font-semibold text-[#667479] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Pettoh™ Europe. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-[#FFB703] fill-[#FFB703]" /> for pets across Europe.
          </p>
        </div>

      </div>
    </footer>
  );
}
