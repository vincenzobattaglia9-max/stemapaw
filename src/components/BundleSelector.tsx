'use client';

import React, { useEffect } from 'react';
import { PRODUCT_DATA, BundleTier, ProductVariant } from '@/data/productData';
import { Check, Flame, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { trackViewContent } from '@/lib/analytics';
import { useLanguage } from '@/context/LanguageContext';

interface BundleSelectorProps {
  selectedBundle: BundleTier | null;
  onSelectBundle: (bundle: BundleTier) => void;
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onProceedToCheckout: () => void;
}

export default function BundleSelector({
  selectedBundle,
  onSelectBundle,
  selectedVariant,
  onSelectVariant,
  onProceedToCheckout,
}: BundleSelectorProps) {
  const { t } = useLanguage();

  const getBundleInfo = (bundleId: string) => {
    if (bundleId === 'single') {
      return {
        title: t.bundles.singleTitle,
        subtitle: t.bundles.singleSubtitle,
        badge: t.bundles.singleBadge,
        freebie: null,
      };
    }
    if (bundleId === 'double') {
      return {
        title: t.bundles.duoTitle,
        subtitle: t.bundles.duoSubtitle,
        badge: t.bundles.duoBadge,
        freebie: t.bundles.duoFreebie,
      };
    }
    if (bundleId === 'triple') {
      return {
        title: t.bundles.familyTitle,
        subtitle: t.bundles.familySubtitle,
        badge: t.bundles.familyBadge,
        freebie: t.bundles.familyFreebie,
      };
    }
    return null;
  };

  useEffect(() => {
    if (selectedBundle) {
      trackViewContent({
        id: selectedBundle.id,
        name: `${PRODUCT_DATA.productName} - ${selectedBundle.title}`,
        price: selectedBundle.price,
        currency: 'EUR',
      });
    }
  }, [selectedBundle?.id]);

  const selectedInfo = selectedBundle ? getBundleInfo(selectedBundle.id) : null;

  return (
    <div className="space-y-6">
      
      {/* Step 1: Choose Your Color Variant */}
      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-[#003459] mb-2.5">
          {t.bundles.chooseColor}
        </label>
        <div className="grid grid-cols-2 gap-3">
          {PRODUCT_DATA.variants.map((v) => {
            const isSelected = selectedVariant.id === v.id;
            return (
              <button
                key={v.id}
                onClick={() => onSelectVariant(v)}
                className={`btn-spring relative flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all text-left ${
                  isSelected
                    ? 'border-[#003459] bg-[#FCEED5]/50 shadow-md ring-2 ring-[#003459]/15'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                }`}
              >
                <span
                  className="w-5 h-5 rounded-full border border-gray-300 shadow-inner flex-shrink-0 transition-transform"
                  style={{ backgroundColor: v.colorHex }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-black text-[#003459] truncate">
                    {v.name}
                  </div>
                  {v.badge && (
                    <span className="text-[10px] font-bold text-[#003459] bg-[#FCEED5] px-2 py-0.5 rounded-full inline-block mt-0.5">
                      {v.badge}
                    </span>
                  )}
                </div>
                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-[#003459] flex items-center justify-center text-white flex-shrink-0 animate-scale">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Bundle Selection */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="block text-xs font-black uppercase tracking-wider text-[#003459]">
            {t.bundles.chooseQuantity}
          </label>
          <span className="text-xs font-bold text-[#EDA415] flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-[#EDA415]" />
            {t.bundles.sellingFast}
          </span>
        </div>

        <div className="space-y-3">
          {PRODUCT_DATA.bundles.map((bundle) => {
            const isSelected = selectedBundle?.id === bundle.id;
            const info = getBundleInfo(bundle.id);
            const title = info?.title || bundle.title;
            const subtitle = info?.subtitle || bundle.subtitle;
            const badge = info?.badge || bundle.discountBadge;
            const freebie = info?.freebie || bundle.freebie;

            return (
              <div
                key={bundle.id}
                onClick={() => onSelectBundle(bundle)}
                className={`card-hover-tilt relative cursor-pointer rounded-2xl p-4 sm:p-4.5 transition-all border-2 ${
                  isSelected
                    ? 'border-[#003459] bg-[#FCEED5]/30 shadow-monito ring-2 ring-[#003459]/20'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {badge && (
                  <div className="absolute -top-3 right-4">
                    <span
                      className={`text-[10px] sm:text-xs font-black uppercase px-3 py-0.5 rounded-full tracking-wider shadow-xs ${
                        bundle.isPopular
                          ? 'bg-[#003459] text-[#FCEED5]'
                          : 'bg-[#FFB703] text-[#003459]'
                      }`}
                    >
                      {badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between gap-3">
                  {/* Left radio and details */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'border-[#003459] bg-[#003459] scale-105'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>

                    <div>
                      <h4 className="font-extrabold text-[#003459] text-sm sm:text-base">
                        {title}
                      </h4>
                      <p className="text-xs text-[#667479]">
                        {subtitle}
                      </p>
                      {freebie && (
                        <p className="text-xs font-bold text-[#003459] mt-1 flex items-center gap-1 bg-[#FCEED5] px-2 py-0.5 rounded-md inline-block">
                          🎁 {freebie}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Pricing on the right */}
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg sm:text-xl font-black text-[#003459]">
                      €{bundle.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-400 line-through">
                      €{bundle.originalPrice.toFixed(2)}
                    </div>
                    <div className="text-[11px] font-black text-[#EDA415]">
                      {t.bundles.save} €{bundle.savings.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trust Bullet Points */}
      <div className="bg-[#FCEED5]/50 rounded-2xl p-3.5 border border-[#F7DBA7]/50 flex items-center justify-around text-[11px] sm:text-xs text-[#003459] font-bold text-center gap-2">
        <div className="flex items-center gap-1">
          <Truck className="w-3.5 h-3.5 text-[#003459]" />
          <span>{t.bundles.deliveryTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#003459]" />
          <span>{t.bundles.moneyBack}</span>
        </div>
        <div className="flex items-center gap-1">
          <RefreshCw className="w-3.5 h-3.5 text-[#003459]" />
          <span>{t.bundles.freeReturns}</span>
        </div>
      </div>

      {/* Main Solid Navy Button with Glow Pulse & Spring */}
      <button
        onClick={() => {
          if (!selectedBundle) {
            onSelectBundle(PRODUCT_DATA.bundles[0]); // default to 1x pack if none chosen
          }
          onProceedToCheckout();
        }}
        className="btn-spring w-full bg-[#003459] hover:bg-[#002A48] text-white font-black text-base sm:text-lg py-4 px-6 rounded-full shadow-lg shadow-[#003459]/25 flex flex-col items-center justify-center gap-0.5 animate-glow-pulse group"
      >
        <span className="flex items-center gap-2 tracking-wide uppercase">
          <span>{t.bundles.ctaButton}</span>
          <span className="transition-transform group-hover:translate-x-1">➔</span>
        </span>
        <span className="text-xs font-normal text-[#FCEED5]">
          {selectedBundle
            ? `${selectedInfo?.title || selectedBundle.title} • €${selectedBundle.price.toFixed(2)} (${t.bundles.selectedNotice})`
            : `${t.bundles.singleTitle} • €28.00 (${t.bundles.selectedNotice})`
          }
        </span>
      </button>

      {/* Carrier & Local Trust (Crucial for DE & NL Buyers) */}
      <div className="bg-white rounded-2xl p-3 border border-gray-200/80 shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-[11px] font-extrabold text-[#003459] border-b border-gray-100 pb-2">
          <span className="flex items-center gap-1.5">
            <span>🚚</span>
            <span>{t.bundles.dispatchedVia}</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-[#FFCC00]/25 text-[#990000] font-black px-2 py-0.5 rounded text-[10px] border border-[#FFCC00]/50">DHL Paket 🇩🇪</span>
            <span className="bg-[#ED5C17]/15 text-[#ED5C17] font-black px-2 py-0.5 rounded text-[10px] border border-[#ED5C17]/30">PostNL 🇳🇱</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#667479]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <strong className="text-gray-900">{t.bundles.tryAtHome}</strong>
          </span>
          <span className="text-[#003459] font-bold text-[10px] bg-[#FCEED5] px-2 py-0.5 rounded-full">
            {t.bundles.klarnaActive}
          </span>
        </div>
      </div>

      {/* Payment Security */}
      <div className="pt-0.5 text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap text-xs font-bold text-[#003459]">
          <span className="bg-white border border-gray-200 px-2.5 py-1 rounded-full shadow-2xs">💳 Visa / Mastercard</span>
          <span className="bg-white border border-gray-200 px-2.5 py-1 rounded-full shadow-2xs"> Apple Pay</span>
          <span className="bg-pink-50 text-pink-900 border border-pink-200 px-2.5 py-1 rounded-full shadow-2xs font-black">Klarna.</span>
          <span className="bg-orange-50 text-[#ED5C17] border border-orange-200 px-2.5 py-1 rounded-full shadow-2xs font-black">iDEAL 🇳🇱</span>
          <span className="bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-1 rounded-full shadow-2xs">PayPal</span>
        </div>
      </div>

    </div>
  );
}
