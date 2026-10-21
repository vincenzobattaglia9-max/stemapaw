'use client';

import { useState } from 'react';
import { PRODUCT_DATA, BundleTier, ProductVariant } from '@/data/productData';
import BundleSelector from './BundleSelector';
import { Star, Play, Sparkles } from 'lucide-react';
import { useScrollReveal, useCountUp, useParallax } from '@/hooks/useAnimations';
import { useLanguage } from '@/context/LanguageContext';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  selectedBundle: BundleTier | null;
  onSelectBundle: (bundle: BundleTier) => void;
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
}

export default function HeroSection({
  onOpenCheckout,
  selectedBundle,
  onSelectBundle,
  selectedVariant,
  onSelectVariant,
}: HeroSectionProps) {
  const { t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const heroRevealRef = useScrollReveal(0.1, 100);
  const buyBoxRevealRef = useScrollReveal(0.1, 80);
  const parallaxRef = useParallax(0.06);

  // Animated counters
  const trappedRef = useCountUp(99, '%');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="space-y-12">
      
      {/* 1. Organic Signature Top Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#FCEED5] via-[#FFE7BA] to-[#FDFBF8] rounded-b-[40px] sm:rounded-b-[60px] pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#F7DBA7]/80">
        
        {/* Animated Organic Decorative Background Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F7DBA7]/40 rounded-full blur-3xl pointer-events-none animate-soft-float" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#FFB703]/25 rounded-full blur-3xl pointer-events-none animate-soft-float-delay" />

        <div ref={heroRevealRef} className="scroll-reveal max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Playful Monito CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="stagger-item inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#F7DBA7] px-4 py-1.5 rounded-full shadow-2xs hover:scale-105 transition-transform duration-300">
                <span className="text-base">🐾</span>
                <span className="text-xs font-black uppercase tracking-wider text-[#003459]">
                  {t.hero.badge}
                </span>
              </div>

              <h1 className="stagger-item text-3xl sm:text-5xl lg:text-6xl font-black text-[#003459] tracking-tight leading-[1.12]">
                {t.hero.titlePart1} <br />
                <span className="shimmer-text">{t.hero.titlePart2}</span>
              </h1>

              <p className="stagger-item text-base sm:text-lg text-[#242B33] font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="stagger-item flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#buy-now"
                  className="btn-spring bg-[#003459] hover:bg-[#002A48] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#003459]/25 flex items-center gap-2 group"
                >
                  <span>{t.hero.exploreCta}</span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
                </a>

                <a
                  href="#features"
                  className="btn-spring bg-white/70 hover:bg-white text-[#003459] border-2 border-[#003459] font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#003459] text-white flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  </div>
                  <span>{t.hero.howItWorks}</span>
                </a>
              </div>

              {/* Verified Ratings proof compliant with Omnibus */}
              <div className="stagger-item flex items-center justify-center lg:justify-start gap-3 pt-3">
                <div className="flex text-[#FFB703]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#003459]">
                  {t.hero.statsRating} • {t.hero.statsReviews}
                </span>
              </div>

            </div>

            {/* Right Column: Hero Visual with Parallax & Soft Floating Badges */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              <div ref={parallaxRef} className="relative w-72 sm:w-96 aspect-square rounded-[36px] bg-white p-3 shadow-monito-hover border-4 border-white transition-transform ease-out duration-150">
                <img
                  src="/images/product/real_product_1.jpg"
                  alt="Pettoh Pro ultrasonic brush with pet"
                  className="w-full h-full object-cover rounded-[28px]"
                />

                {/* Floating Top Badge */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#F7DBA7] rounded-2xl p-3 shadow-lg flex items-center gap-2.5 animate-soft-float">
                  <div className="w-8 h-8 rounded-full bg-[#FCEED5] text-[#003459] flex items-center justify-center text-sm font-black">
                    ⭐️
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#003459]">{t.hero.statsSales}</div>
                    <div className="text-[10px] text-[#667479]">Hunde &amp; Katzen Zulassung</div>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#003459] text-white rounded-2xl p-3 shadow-lg flex items-center gap-2.5 animate-soft-float-delay">
                  <div className="w-8 h-8 rounded-full bg-[#FFB703] text-[#003459] flex items-center justify-center font-black">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">{t.hero.lessFur}</div>
                    <div className="text-[10px] text-[#FCEED5]">{t.hero.nanoMist}</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Product Buy Box & Interactive Gallery Section */}
      <section id="buy-now" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#667479] mb-6">
          <span>Home</span>
          <span>/</span>
          <span>Pet Care</span>
          <span>/</span>
          <span className="text-[#003459]">Pettoh™ Pro</span>
        </div>

        <div ref={buyBoxRevealRef} className="scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Gallery Left with Smooth Zoom & Transition */}
          <div className="lg:col-span-6 space-y-4">
            
            <div 
              className="relative aspect-square w-full rounded-[28px] overflow-hidden bg-white shadow-monito border border-gray-100 p-2 cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                <img
                  src={PRODUCT_DATA.images[activeImageIndex].url}
                  alt={PRODUCT_DATA.images[activeImageIndex].caption}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out"
                  style={{
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    transform: isZoomed ? 'scale(1.85)' : 'scale(1)',
                  }}
                />
              </div>
              
              <div className="absolute top-5 left-5 bg-[#003459]/90 backdrop-blur-sm text-white text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-ping" />
                <span>{PRODUCT_DATA.images[activeImageIndex].tag}</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Hover to zoom 🔍
              </div>
            </div>

            {/* Thumbnails with Active Glow */}
            <div className="grid grid-cols-6 gap-2 sm:gap-3">
              {PRODUCT_DATA.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`btn-spring relative aspect-square rounded-2xl overflow-hidden p-1 bg-white border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#003459] shadow-md ring-2 ring-[#FFB703]/50 scale-95'
                      : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.tag}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </button>
              ))}
            </div>

            {/* Feature Highlights beneath with Animated Counters */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="card-hover-tilt bg-white p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
                <div className="text-[#003459] font-black text-xl">
                  <span ref={trappedRef}>99%</span>
                </div>
                <div className="text-[11px] text-[#667479] font-bold">{t.hero.statsTrapped}</div>
              </div>
              <div className="card-hover-tilt bg-white p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
                <div className="text-[#003459] font-black text-xl">0 Scratch</div>
                <div className="text-[11px] text-[#667479] font-bold">{t.hero.statsScratch}</div>
              </div>
              <div className="card-hover-tilt bg-white p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
                <div className="text-[#003459] font-black text-xl">1 Click</div>
                <div className="text-[11px] text-[#667479] font-bold">{t.hero.statsCleaning}</div>
              </div>
            </div>

          </div>

          {/* Buy Box Right */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#FCEED5] text-[#003459] text-xs font-black px-3.5 py-1 rounded-full mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.hero.buyBoxBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#003459] tracking-tight">
                {t.hero.productTitle}
              </h2>
              <p className="mt-3 text-sm text-[#242B33] leading-relaxed font-medium">
                {t.hero.productDesc}
              </p>
            </div>

            {/* Bundle Selector Component */}
            <div className="bg-white rounded-[28px] p-5 sm:p-7 shadow-monito border border-gray-100">
              <BundleSelector
                selectedBundle={selectedBundle}
                onSelectBundle={onSelectBundle}
                selectedVariant={selectedVariant}
                onSelectVariant={onSelectVariant}
                onProceedToCheckout={onOpenCheckout}
              />
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
