'use client';

import { PRODUCT_DATA } from '@/data/productData';
import { Droplets, Heart, Sparkles, BatteryCharging, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-6 h-6 text-[#003459]" />,
  Heart: <Heart className="w-6 h-6 text-[#FFB703]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#EDA415]" />,
  BatteryCharging: <BatteryCharging className="w-6 h-6 text-[#003459]" />
};

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-[#FDFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full inline-block mb-2">
              Care & Comfort
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#003459] tracking-tight">
              Why Pets Love SteamPaws™
            </h2>
            <p className="mt-2 text-sm text-[#667479]">
              Engineered with veterinary insights for safe, static-free, purr-filled grooming.
            </p>
          </div>
          <a
            href="#buy-now"
            className="inline-flex items-center gap-2 text-xs font-black text-[#003459] hover:text-[#002A48] border-2 border-[#003459] px-4 py-2 rounded-full transition-all self-start sm:self-auto"
          >
            <span>View All Bundles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Feature Cards (Monito Card Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_DATA.features.map((feat, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-6 shadow-monito border border-gray-100 hover:shadow-monito-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FCEED5] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {iconMap[feat.icon]}
                </div>
                <h3 className="text-base font-black text-[#003459] mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#667479] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#003459]">
                <span>Certified Safe</span>
                <span className="text-[#FFB703]">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Steps Routine (Monito Dark Navy Banner) */}
        <div className="relative bg-[#003459] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-white overflow-hidden shadow-monito-hover">
          
          {/* Golden decorative curve from Monito template */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#FFB703]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#FCEED5]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFB703] bg-[#002A48] px-3.5 py-1 rounded-full border border-white/10">
              Simple 3-Step Routine
            </span>
            <h3 className="text-2xl sm:text-4xl font-black mt-3 text-white">
              Grooming Done in Less Than 3 Minutes
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              No baths needed. Just soothing room-temperature mist and gentle strokes.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="bg-[#002A48]/80 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FFB703] text-[#003459] font-black text-base flex items-center justify-center mx-auto">
                1
              </div>
              <h4 className="font-black text-base text-white">Fill The Reservoir</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Add tap or filtered water to the back silicone tank. Optional: add 1 drop of pet coat oil.
              </p>
            </div>

            <div className="bg-[#002A48]/80 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FFB703] text-[#003459] font-black text-base flex items-center justify-center mx-auto">
                2
              </div>
              <h4 className="font-black text-base text-white">One-Click Mist</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Click the silent power button to release the micro-mist. Brush gently in the direction of fur.
              </p>
            </div>

            <div className="bg-[#002A48]/80 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FFB703] text-[#003459] font-black text-base flex items-center justify-center mx-auto">
                3
              </div>
              <h4 className="font-black text-base text-white">Peel & Trash</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                The mist locks the fur into a neat cohesive layer. Peel off the whole fur cake with one finger!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
