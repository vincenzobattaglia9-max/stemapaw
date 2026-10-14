'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';
import { useLanguage } from '@/context/LanguageContext';

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqRevealRef = useScrollReveal(0.12, 60);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div ref={faqRevealRef} className="scroll-reveal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="w-12 h-12 rounded-2xl bg-[#FCEED5] text-[#003459] flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-6 h-6 text-[#003459]" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#003459] tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-2 text-sm text-[#667479]">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {t.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="stagger-item bg-[#FDFBF8] rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#F7DBA7]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-black text-[#003459] text-sm sm:text-base hover:text-[#002A48] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[#003459] text-white rotate-180' : 'bg-gray-100 text-[#003459]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth CSS Grid Height Accordion */}
                <div className={`accordion-wrapper ${isOpen ? 'open' : ''}`}>
                  <div className="accordion-content">
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#242B33] leading-relaxed border-t border-gray-100 bg-white">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
