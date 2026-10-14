'use client';

import { Droplets, Heart, Sparkles, BatteryCharging, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useAnimations';
import { useLanguage } from '@/context/LanguageContext';

export default function FeatureGrid() {
  const { t } = useLanguage();
  const sectionRevealRef = useScrollReveal(0.12, 120);

  const featureCards = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#EDA415]" />,
      title: t.features.f1Title,
      description: t.features.f1Desc,
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#003459]" />,
      title: t.features.f2Title,
      description: t.features.f2Desc,
    },
    {
      icon: <Heart className="w-6 h-6 text-[#FFB703]" />,
      title: t.features.f3Title,
      description: t.features.f3Desc,
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-[#003459]" />,
      title: t.features.f4Title,
      description: t.features.f4Desc,
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#FDFBF8] overflow-hidden">
      <div ref={sectionRevealRef} className="scroll-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full inline-block mb-2">
              {t.features.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#003459] tracking-tight">
              {t.features.title}
            </h2>
            <p className="mt-2 text-sm text-[#667479]">
              {t.features.subtitle}
            </p>
          </div>
          <a
            href="#buy-now"
            className="btn-spring inline-flex items-center gap-2 text-xs font-black text-[#003459] hover:text-[#002A48] border-2 border-[#003459] px-4 py-2 rounded-full transition-all self-start sm:self-auto group"
          >
            <span>{t.features.viewBundles}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Feature Cards with 3D Tilt Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((feat, index) => (
            <div
              key={index}
              className="stagger-item card-hover-tilt bg-white rounded-[24px] p-6 shadow-monito border border-gray-100 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FCEED5] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-[-3deg] transition-all duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-base font-black text-[#003459] mb-2 group-hover:text-[#EDA415] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#667479] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#003459]">
                <span>{t.features.certifiedSafe}</span>
                <span className="text-[#FFB703]">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Steps Routine Banner */}
        <div className="relative bg-[#003459] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-white overflow-hidden shadow-monito-hover">
          
          {/* Decorative floating blur circles */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#FFB703]/20 rounded-full blur-2xl pointer-events-none animate-soft-float" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#FCEED5]/10 rounded-full blur-2xl pointer-events-none animate-soft-float-delay" />

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFB703] bg-[#002A48] px-3.5 py-1 rounded-full border border-white/10">
              {t.features.routineTag}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black mt-3 text-white">
              {t.features.routineTitle}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              {t.features.routineSubtitle}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="card-hover-tilt bg-[#002A48]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FFB703] text-[#003459] font-black text-base flex items-center justify-center mx-auto shadow-md">
                1
              </div>
              <h4 className="font-black text-base text-white">{t.features.step1Title}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t.features.step1Desc}
              </p>
            </div>

            <div className="card-hover-tilt bg-[#002A48]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FFB703] text-[#003459] font-black text-base flex items-center justify-center mx-auto shadow-md">
                2
              </div>
              <h4 className="font-black text-base text-white">{t.features.step2Title}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t.features.step2Desc}
              </p>
            </div>

            <div className="card-hover-tilt bg-[#002A48]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FFB703] text-[#003459] font-black text-base flex items-center justify-center mx-auto shadow-md">
                3
              </div>
              <h4 className="font-black text-base text-white">{t.features.step3Title}</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t.features.step3Desc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
