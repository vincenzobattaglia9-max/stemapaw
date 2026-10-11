'use client';

import React from 'react';
import { PRODUCT_DATA, BundleTier, ProductVariant } from '@/data/productData';
import { Check, Flame, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface BundleSelectorProps {
  selectedBundle: BundleTier;
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
  return (
    <div className="space-y-6">
      
      {/* Step 1: Choose Your Color Variant */}
      <div>
        <label className="block text-xs font-black uppercase tracking-wider text-[#003459] mb-2.5">
          Step 1: Choose Your Color Variant
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
            Step 2: Select Quantity (Value Bundles)
          </label>
          <span className="text-xs font-bold text-[#EDA415] flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-[#EDA415]" />
            Selling fast in Europe
          </span>
        </div>

        <div className="space-y-3">
          {PRODUCT_DATA.bundles.map((bundle) => {
            const isSelected = selectedBundle.id === bundle.id;

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
                {bundle.discountBadge && (
                  <div className="absolute -top-3 right-4">
                    <span
                      className={`text-[10px] sm:text-xs font-black uppercase px-3 py-0.5 rounded-full tracking-wider shadow-xs ${
                        bundle.isPopular
                          ? 'bg-[#003459] text-[#FCEED5]'
                          : 'bg-[#FFB703] text-[#003459]'
                      }`}
                    >
                      {bundle.discountBadge}
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
                        {bundle.title}
                      </h4>
                      <p className="text-xs text-[#667479]">
                        {bundle.subtitle}
                      </p>
                      {bundle.freebie && (
                        <p className="text-xs font-bold text-[#003459] mt-1 flex items-center gap-1 bg-[#FCEED5] px-2 py-0.5 rounded-md inline-block">
                          🎁 {bundle.freebie}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Pricing on the right */}
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-black text-[#003459]">
                      €{bundle.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-400 line-through">
                      €{bundle.originalPrice.toFixed(2)}
                    </div>
                    <div className="text-[11px] font-black text-[#EDA415]">
                      Save €{bundle.savings.toFixed(2)}
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
          <span>Tracked EU Delivery (6-9 Days)</span>
        </div>
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#003459]" />
          <span>30-Day Money Back</span>
        </div>
        <div className="flex items-center gap-1">
          <RefreshCw className="w-3.5 h-3.5 text-[#003459]" />
          <span>Free Returns</span>
        </div>
      </div>

      {/* Main Solid Navy Button with Glow Pulse & Spring */}
      <button
        onClick={onProceedToCheckout}
        className="btn-spring w-full bg-[#003459] hover:bg-[#002A48] text-white font-black text-base sm:text-lg py-4 px-6 rounded-full shadow-lg shadow-[#003459]/25 flex flex-col items-center justify-center gap-0.5 animate-glow-pulse group"
      >
        <span className="flex items-center gap-2 tracking-wide uppercase">
          <span>Claim 50% Off &amp; Checkout Now</span>
          <span className="transition-transform group-hover:translate-x-1">➔</span>
        </span>
        <span className="text-xs font-normal text-[#FCEED5]">
          Selected: {selectedBundle.title} • Total: €{selectedBundle.price.toFixed(2)} (Tax Included)
        </span>
      </button>

      {/* Payment Security */}
      <div className="pt-1 text-center">
        <p className="text-[11px] uppercase tracking-wider text-[#667479] font-black mb-2">
          Secure European Payment Encryption
        </p>
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-xs font-bold text-[#003459]">
          <span className="bg-white border border-gray-200 px-2.5 py-1 rounded-full shadow-2xs hover:scale-105 transition-transform">💳 Cards</span>
          <span className="bg-white border border-gray-200 px-2.5 py-1 rounded-full shadow-2xs hover:scale-105 transition-transform"> Apple Pay</span>
          <span className="bg-white border border-gray-200 px-2.5 py-1 rounded-full shadow-2xs hover:scale-105 transition-transform">GPay</span>
          <span className="bg-[#FFB703]/20 text-[#003459] border border-[#FFB703]/40 px-2.5 py-1 rounded-full hover:scale-105 transition-transform">Klarna.</span>
          <span className="bg-[#FCEED5] text-[#003459] border border-[#F7DBA7] px-2.5 py-1 rounded-full hover:scale-105 transition-transform">iDEAL</span>
        </div>
      </div>

    </div>
  );
}
