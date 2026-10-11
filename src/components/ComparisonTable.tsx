'use client';

import { PRODUCT_DATA } from '@/data/productData';
import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-16 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#003459] bg-[#FCEED5] px-3.5 py-1 rounded-full">
            The Monito Difference
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black text-[#003459] tracking-tight">
            SteamPaws™ vs Ordinary Wire Brushes
          </h2>
          <p className="mt-2 text-sm text-[#667479]">
            Why thousands of European owners are leaving sharp metal bristles behind.
          </p>
        </div>

        <div className="bg-[#FDFBF8] rounded-[28px] shadow-monito border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12 bg-[#FCEED5] p-4 sm:p-5 border-b border-[#F7DBA7] text-xs sm:text-sm font-black text-[#003459] uppercase tracking-wider">
            <div className="col-span-5 sm:col-span-6">Feature & Safety</div>
            <div className="col-span-4 sm:col-span-3 text-[#003459] flex items-center gap-1.5 font-black">
              <span>🐾 SteamPaws™</span>
            </div>
            <div className="col-span-3 text-[#667479]">Wire Brushes</div>
          </div>

          <div className="divide-y divide-gray-100 text-xs sm:text-sm bg-white">
            {PRODUCT_DATA.comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#FCEED5]/20 transition-colors">
                
                {/* Feature Name */}
                <div className="col-span-5 sm:col-span-6 font-extrabold text-[#003459] pr-2">
                  {item.feature}
                </div>

                {/* Our Product */}
                <div className="col-span-4 sm:col-span-3 text-[#003459] font-bold flex items-start gap-2 pr-2">
                  <div className="w-5 h-5 rounded-full bg-[#003459] text-[#FCEED5] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item.ourProduct}</span>
                </div>

                {/* Competitor */}
                <div className="col-span-3 text-[#667479] flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-gray-100 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span>{item.competitor}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
