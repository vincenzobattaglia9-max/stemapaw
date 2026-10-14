'use client';

import { Star, ShieldCheck, Info } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';
import { useLanguage } from '@/context/LanguageContext';

export default function ReviewsSection() {
  const { t } = useLanguage();
  const reviewsRevealRef = useScrollReveal(0.1, 100);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FDFBF8] overflow-hidden">
      <div ref={reviewsRevealRef} className="scroll-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#003459] bg-[#FCEED5] px-3.5 py-1 rounded-full">
            {t.reviews.tag}
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black text-[#003459] tracking-tight">
            {t.reviews.title}
          </h2>

          <div className="mt-5 inline-flex items-center gap-3 bg-white border border-[#F7DBA7] px-6 py-3 rounded-full shadow-2xs hover:scale-105 transition-transform duration-300">
            <div className="flex text-[#FFB703]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFB703] text-[#FFB703]" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-[#003459]">
              {t.reviews.starsText}
            </div>
          </div>

          {/* EU Directive Omnibus Transparency Notice */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#667479] bg-white/80 border border-gray-200/80 rounded-full px-4 py-1.5 max-w-2xl mx-auto">
            <Info className="w-3.5 h-3.5 text-[#003459] flex-shrink-0" />
            <span>{t.reviews.omnibusNotice}</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {t.reviews.items.map((rev) => (
            <div
              key={rev.id}
              className="stagger-item card-hover-tilt bg-white rounded-[24px] p-6 sm:p-8 shadow-monito border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FCEED5] text-[#003459] font-black text-sm flex items-center justify-center shadow-xs">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 font-black text-[#003459] text-sm">
                        <span>{rev.author}</span>
                        <span>{rev.flag}</span>
                      </div>
                      <div className="text-xs text-[#667479]">
                        {rev.country} • {rev.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-bold text-[#003459] bg-[#FCEED5] px-2.5 py-1 rounded-full border border-[#F7DBA7]/60">
                    <ShieldCheck className="w-3 h-3 text-[#003459]" />
                    <span>{t.reviews.verifiedBuyer}</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFB703]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFB703] text-[#FFB703]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#003459]/70">5.0 / 5.0</span>
                </div>

                {/* Title & Content */}
                <h4 className="font-extrabold text-[#003459] text-sm sm:text-base mb-2">
                  &ldquo;{rev.title}&rdquo;
                </h4>
                <p className="text-xs sm:text-sm text-[#242B33] leading-relaxed">
                  {rev.content}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#667479]">
                <span className="font-bold text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full text-[11px]">
                  🐾 Pettoh™ Pro
                </span>
                <span className="text-[11px] text-[#667479] font-medium">
                  {rev.helpfulCount} {t.reviews.helpful}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
