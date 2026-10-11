'use client';

import { useState } from 'react';
import { PRODUCT_DATA } from '@/data/productData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="w-12 h-12 rounded-2xl bg-[#FCEED5] text-[#003459] flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-6 h-6 text-[#003459]" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#003459] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-[#667479]">
            Everything you need to know about Monito SteamPaws™ and European shipping.
          </p>
        </div>

        <div className="space-y-3.5">
          {PRODUCT_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FDFBF8] rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-black text-[#003459] text-sm sm:text-base hover:text-[#002A48] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? 'bg-[#003459] text-white rotate-180' : 'bg-gray-100 text-[#003459]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#242B33] leading-relaxed border-t border-gray-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
