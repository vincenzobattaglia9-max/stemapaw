'use client';

import { useState } from 'react';
import { PRODUCT_DATA, BundleTier, ProductVariant } from '@/data/productData';
import BundleSelector from './BundleSelector';
import { Star, Play, CheckCircle, Sparkles, Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  selectedBundle: BundleTier;
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-12">
      
      {/* 1. Monito Signature Top Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#FCEED5] to-[#FFE7BA] rounded-b-[40px] sm:rounded-b-[60px] pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#F7DBA7]/80">
        
        {/* Organic Decorative Background Blobs from Monito Figma */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F7DBA7]/40 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#FFB703]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Playful Monito CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-white/80 border border-[#F7DBA7] px-4 py-1.5 rounded-full shadow-2xs">
                <span className="text-base">🐾</span>
                <span className="text-xs font-black uppercase tracking-wider text-[#003459]">
                  Monito Pets • Europe's #1 Grooming Innovation
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#003459] tracking-tight leading-[1.15]">
                One More Friend, <br />
                <span className="text-[#FFB703] underline decoration-[#003459]/20">Thousands More Fun!</span>
              </h1>

              <p className="text-base sm:text-lg text-[#242B33] font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Having a pet brings pure happiness, but flying fur on your clothes and furniture doesn't have to. 
                Meet <strong className="text-[#003459]">SteamPaws™</strong>: the ultrasonic cold-mist grooming brush pets adore.
              </p>

              {/* Monito Dual Pill Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#buy-now"
                  className="bg-[#003459] hover:bg-[#002A48] active:scale-95 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#003459]/25 transition-all flex items-center gap-2"
                >
                  <span>Explore Product (50% Off)</span>
                  <span className="text-lg">➔</span>
                </a>

                <a
                  href="#features"
                  className="bg-transparent hover:bg-white/60 active:scale-95 text-[#003459] border-2 border-[#003459] font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-[#003459] text-white flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  </div>
                  <span>View How It Works</span>
                </a>
              </div>

              {/* Ratings proof */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
                <div className="flex text-[#FFB703]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#003459]">
                  4.9 / 5.0 (2,480+ European Pet Parents)
                </span>
              </div>

            </div>

            {/* Right Column: Monito Signature Pet Visual with Floating Badges */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Organic circular container */}
              <div className="relative w-72 sm:w-96 aspect-square rounded-[36px] bg-white p-3 shadow-monito-hover border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
                  alt="Happy dog enjoying grooming"
                  className="w-full h-full object-cover rounded-[28px]"
                />

                {/* Floating Top Badge */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white border border-[#F7DBA7] rounded-2xl p-3 shadow-lg flex items-center gap-2.5 animate-bounce duration-1000">
                  <div className="w-8 h-8 rounded-full bg-[#FCEED5] text-[#003459] flex items-center justify-center text-sm font-black">
                    ⭐️
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#003459]">Voted #1 in Europe</div>
                    <div className="text-[10px] text-[#667479]">Cat & Dog Approved</div>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#003459] text-white rounded-2xl p-3 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFB703] text-[#003459] flex items-center justify-center font-black">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">99% Less Flying Fur</div>
                    <div className="text-[10px] text-[#FCEED5]">Ultrasonic Nano-Mist</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Monito Product Buy Box & Gallery Section */}
      <section id="buy-now" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        
        {/* Breadcrumb Monito Style */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#667479] mb-6">
          <span>Home</span>
          <span>/</span>
          <span>Dog & Cat Care</span>
          <span>/</span>
          <span className="text-[#003459]">SteamPaws™ 3-in-1 Brush</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Gallery Left */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="relative aspect-square w-full rounded-[28px] overflow-hidden bg-white shadow-monito border border-gray-100 p-2">
              <img
                src={PRODUCT_DATA.images[activeImageIndex].url}
                alt={PRODUCT_DATA.images[activeImageIndex].caption}
                className="w-full h-full object-cover rounded-[22px]"
              />
              
              <div className="absolute top-5 left-5 bg-[#003459]/90 text-white text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-ping" />
                <span>{PRODUCT_DATA.images[activeImageIndex].tag}</span>
              </div>
            </div>

            {/* Thumbnails Monito style */}
            <div className="grid grid-cols-4 gap-3">
              {PRODUCT_DATA.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-2xl overflow-hidden p-1 bg-white border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#003459] shadow-md scale-95'
                      : 'border-gray-200 opacity-70 hover:opacity-100'
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

            {/* Feature Highlights beneath */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
                <div className="text-[#003459] font-black text-lg">99%</div>
                <div className="text-[11px] text-[#667479] font-bold">Fur Trapped</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
                <div className="text-[#003459] font-black text-lg">0 Hurt</div>
                <div className="text-[11px] text-[#667479] font-bold">Soft Silicone</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-2xs">
                <div className="text-[#003459] font-black text-lg">1 Sec</div>
                <div className="text-[11px] text-[#667479] font-bold">Peel & Clean</div>
              </div>
            </div>

          </div>

          {/* Buy Box Right */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="inline-block bg-[#FCEED5] text-[#003459] text-xs font-black px-3 py-1 rounded-full mb-2">
                SKU: MP-STEAM-2026 • IN STOCK (EU)
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#003459] tracking-tight">
                {PRODUCT_DATA.productName}
              </h2>
              <p className="mt-3 text-sm text-[#242B33] leading-relaxed font-medium">
                Ordinary wire slickers scratch pet skin and create flying static fur. 
                <strong className="text-[#003459]"> SteamPaws™ by Monito</strong> combines soothing room-temperature ultrasonic nano-mist and soft silicone grooming pins for effortless hair removal and shiny coats.
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
