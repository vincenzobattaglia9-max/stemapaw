'use client';

import Link from 'next/link';
import { ShoppingBag, Truck } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useAnimations';
import { useLanguage } from '@/context/LanguageContext';

interface NavbarProps {
  onOpenCheckout: () => void;
  cartCount: number;
}

export default function Navbar({ onOpenCheckout, cartCount }: NavbarProps) {
  const { visible, scrolled } = useNavbarScroll();
  const { language, setLanguage, t } = useLanguage();

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
            <a href="#buy-now" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">
              {language === 'de' ? 'Pakete & Rabatt' : language === 'nl' ? 'Pakketten & Deals' : 'Product & Bundles'}
            </a>
            <a href="#features" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">
              {language === 'de' ? 'Vorteile' : language === 'nl' ? 'Kenmerken' : 'Features'}
            </a>
            <a href="#comparison" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">
              {language === 'de' ? 'Warum Pettoh™?' : language === 'nl' ? 'Waarom Pettoh™?' : 'Why Pettoh™?'}
            </a>
            <a href="#reviews" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">
              {language === 'de' ? 'Bewertungen (2.4k+)' : language === 'nl' ? 'Reviews (2.4k+)' : 'Reviews (2.4k+)'}
            </a>
            <a href="#faq" className="hover:text-[#EDA415] transition-colors whitespace-nowrap">
              FAQ
            </a>
            <Link href="/track" className="flex items-center gap-1.5 text-[#003459]/80 hover:text-[#003459] transition-colors whitespace-nowrap">
              <Truck className="w-4 h-4 text-[#FFB703]" />
              <span>{language === 'de' ? 'Paket verfolgen' : language === 'nl' ? 'Bestelling volgen' : 'Track Order'}</span>
            </Link>
          </nav>

          {/* Right Actions: Language Selector, Currency & CTA */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Real SVG Country Flag Language Selector */}
            <div className="flex items-center bg-white/95 border border-gray-200 rounded-full p-1 text-xs font-black text-[#003459] shadow-2xs gap-0.5">
              <button
                onClick={() => setLanguage('de')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all ${
                  language === 'de'
                    ? 'bg-[#003459] text-white shadow-xs'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="Deutschland (Deutsch)"
              >
                {/* Germany SVG Flag */}
                <svg className="w-4 h-3 rounded-[2px] shadow-2xs overflow-hidden flex-shrink-0" viewBox="0 0 640 480">
                  <path fill="#000" d="M0 0h640v160H0z"/>
                  <path fill="#D00" d="M0 160h640v160H0z"/>
                  <path fill="#FFCE00" d="M0 320h640v160H0z"/>
                </svg>
                <span>DE</span>
              </button>

              <button
                onClick={() => setLanguage('nl')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all ${
                  language === 'nl'
                    ? 'bg-[#003459] text-white shadow-xs'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="Nederland (Nederlands)"
              >
                {/* Netherlands SVG Flag */}
                <svg className="w-4 h-3 rounded-[2px] shadow-2xs overflow-hidden flex-shrink-0" viewBox="0 0 640 480">
                  <path fill="#AE1C28" d="M0 0h640v160H0z"/>
                  <path fill="#FFFFFF" d="M0 160h640v160H0z"/>
                  <path fill="#21468B" d="M0 320h640v160H0z"/>
                </svg>
                <span>NL</span>
              </button>

              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-[#003459] text-white shadow-xs'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                title="English (Europe)"
              >
                {/* UK SVG Flag */}
                <svg className="w-4 h-3 rounded-[2px] shadow-2xs overflow-hidden flex-shrink-0" viewBox="0 0 640 480">
                  <path fill="#012169" d="M0 0h640v480H0z"/>
                  <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 64V0h75z"/>
                  <path fill="#C8102E" d="m424 288 216 159v33h-44L380 318l44-30zM640 0v10L456 148l40 28L640 70V0zM0 480v-11l183-137-39-30L0 411v69zM0 0l215 160-40 30L0 60V0z"/>
                  <path fill="#FFF" d="M240 0v480h160V0H240zM0 160v160h640V160H0z"/>
                  <path fill="#C8102E" d="M267 0v480h106V0H267zM0 187v106h640V187H0z"/>
                </svg>
                <span>EN</span>
              </button>
            </div>

            {/* Currency Pill */}
            <div className="hidden md:flex items-center gap-1.5 bg-white/90 border border-gray-200/80 px-2.5 py-1.5 rounded-full text-xs font-bold text-[#003459] shadow-xs">
              <span>EUR (€)</span>
            </div>

            {/* CTA Pettoh Pill Button */}
            <button
              onClick={() => {
                if (cartCount === 0) {
                  const el = document.getElementById('buy-now');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    return;
                  }
                }
                onOpenCheckout();
              }}
              className="btn-spring flex items-center gap-2 bg-[#003459] hover:bg-[#002A48] text-white font-black text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-[#003459]/25 whitespace-nowrap animate-glow-pulse"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFB703]" />
              <span>{language === 'de' ? 'Bestellen' : language === 'nl' ? 'Bestellen' : 'Order Now'}</span>
              <span className="bg-[#FFB703] text-[#003459] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center -mr-1 animate-scale">
                {cartCount}
              </span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
