'use client';

import { Check, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';
import { useLanguage } from '@/context/LanguageContext';

export default function ComparisonTable() {
  const { t } = useLanguage();
  const tableRevealRef = useScrollReveal(0.12, 80);

  const rows = [
    {
      feature: t.comparison.row1Feature,
      ourProduct: t.comparison.row1Pettoh,
      competitor: t.comparison.row1Others,
    },
    {
      feature: t.comparison.row2Feature,
      ourProduct: t.comparison.row2Pettoh,
      competitor: t.comparison.row2Others,
    },
    {
      feature: t.comparison.row3Feature,
      ourProduct: t.comparison.row3Pettoh,
      competitor: t.comparison.row3Others,
    },
    {
      feature: t.comparison.row4Feature,
      ourProduct: t.comparison.row4Pettoh,
      competitor: t.comparison.row4Others,
    },
    {
      feature: t.comparison.row5Feature,
      ourProduct: t.comparison.row5Pettoh,
      competitor: t.comparison.row5Others,
    },
  ];

  return (
    <section id="comparison" className="py-16 sm:py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div ref={tableRevealRef} className="scroll-reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#003459] bg-[#FCEED5] px-3.5 py-1 rounded-full">
            {t.comparison.tag}
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black text-[#003459] tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="mt-2 text-sm text-[#667479]">
            {t.comparison.subtitle}
          </p>
        </div>

        <div className="bg-[#FDFBF8] rounded-[28px] shadow-monito border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12 bg-[#FCEED5] p-4 sm:p-5 border-b border-[#F7DBA7] text-xs sm:text-sm font-black text-[#003459] uppercase tracking-wider">
            <div className="col-span-5 sm:col-span-6">{t.comparison.headerFeature}</div>
            <div className="col-span-4 sm:col-span-3 text-[#003459] flex items-center gap-1.5 font-black">
              <span>{t.comparison.headerPettoh}</span>
            </div>
            <div className="col-span-3 text-[#667479]">{t.comparison.headerOthers}</div>
          </div>

          <div className="divide-y divide-gray-100 text-xs sm:text-sm bg-white">
            {rows.map((item, index) => (
              <div 
                key={index} 
                className="stagger-item grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#FCEED5]/25 transition-colors duration-200"
              >
                
                {/* Feature Name */}
                <div className="col-span-5 sm:col-span-6 font-extrabold text-[#003459] pr-2">
                  {item.feature}
                </div>

                {/* Our Product */}
                <div className="col-span-4 sm:col-span-3 text-[#003459] font-bold flex items-start gap-2 pr-2">
                  <div className="w-5 h-5 rounded-full bg-[#003459] text-[#FCEED5] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item.ourProduct}</span>
                </div>

                {/* Competitor */}
                <div className="col-span-3 text-[#667479] flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
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
