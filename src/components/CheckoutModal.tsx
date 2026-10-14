'use client';

import { useState, useCallback, useEffect } from 'react';
import { BundleTier, ProductVariant } from '@/data/productData';
import { X, ShieldCheck, Lock, Truck, Loader2, AlertCircle } from 'lucide-react';
import { trackInitiateCheckout } from '@/lib/analytics';
import { useLanguage } from '@/context/LanguageContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBundle: BundleTier;
  selectedVariant: ProductVariant;
}

// Persistent form state outside component so it survives modal close/reopen
let persistedForm = {
  email: '',
  name: '',
  address: '',
  city: '',
  postalCode: '',
  country: 'Germany 🇩🇪',
  paymentMethod: 'Credit Card (Stripe)',
};

export default function CheckoutModal({
  isOpen,
  onClose,
  selectedBundle,
  selectedVariant,
}: CheckoutModalProps) {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState(() => ({
    ...persistedForm,
    country: persistedForm.country || (language === 'nl' ? 'Netherlands 🇳🇱' : 'Germany 🇩🇪'),
  }));
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [orderCompleted, setOrderCompleted] = useState<{ id: string; trackingNumber: string } | null>(null);

  // Keep persistedForm in sync so data survives modal close/open
  const updateField = useCallback((field: string, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    persistedForm = { ...persistedForm, [field]: value };
  }, [formData]);

  // Track InitiateCheckout as soon as modal opens
  useEffect(() => {
    if (isOpen) {
      trackInitiateCheckout({
        id: selectedBundle.id,
        name: `${selectedBundle.title} (${selectedVariant.name})`,
        price: selectedBundle.price,
        quantity: selectedBundle.quantity,
        currency: 'EUR',
      });
    }
  }, [isOpen, selectedBundle, selectedVariant]);

  if (!isOpen) return null;

  const currentTotal = selectedBundle.price;

  // Localized bundle title mapping
  const bundleDisplayTitle =
    selectedBundle.id === 'single'
      ? t.bundles.singleTitle
      : selectedBundle.id === 'double'
      ? t.bundles.duoTitle
      : selectedBundle.id === 'triple'
      ? t.bundles.familyTitle
      : selectedBundle.title;

  const bundleFreebie =
    selectedBundle.id === 'double'
      ? t.bundles.duoFreebie
      : selectedBundle.id === 'triple'
      ? t.bundles.familyFreebie
      : selectedBundle.freebie;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    trackInitiateCheckout({
      id: selectedBundle.id,
      name: `${bundleDisplayTitle} (${selectedVariant.name})`,
      price: currentTotal,
      quantity: selectedBundle.quantity,
      currency: 'EUR',
    });

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.name,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country,
          bundleTitle: bundleDisplayTitle,
          variantName: selectedVariant.name,
          quantity: selectedBundle.quantity,
          totalAmount: selectedBundle.price,
          paymentMethod: formData.paymentMethod,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      
      // Stripe Checkout redirect
      if (data.success && data.url) {
        window.location.href = data.url;
        return;
      }

      // Fallback order confirmation
      if (data.success && data.order) {
        setOrderCompleted({
          id: data.order.id,
          trackingNumber: data.order.trackingNumber,
        });
        persistedForm = { 
          email: '', 
          name: '', 
          address: '', 
          city: '', 
          postalCode: '', 
          country: language === 'nl' ? 'Netherlands 🇳🇱' : 'Germany 🇩🇪', 
          paymentMethod: 'Credit Card (Stripe)', 
        };
      }

      if (!data.success) {
        throw new Error(data.error || 'Payment could not be processed. Please try again.');
      }

    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err.message?.includes('Server error')
          ? 'Gateway temporarily busy. Please retry.'
          : err.message || 'Something went wrong. Please try again or contact support.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#003459] text-white p-6 flex items-center justify-between border-b border-[#002A48]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FCEED5] text-[#003459] flex items-center justify-center font-black text-base">
              🐾
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg">
                {t.checkout.headerTitle}
              </h3>
              <p className="text-xs text-[#FCEED5]">
                {t.checkout.headerSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderCompleted ? (
          /* ✅ Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-[#FCEED5] text-[#003459] rounded-full flex items-center justify-center mx-auto text-2xl font-black">
              ✓
            </div>
            <div>
              <span className="text-xs uppercase font-black text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full">
                {t.checkout.orderConfirmed}
              </span>
              <h2 className="text-2xl font-black text-[#003459] mt-3">
                {t.checkout.thankYou}{formData.name ? `, ${formData.name.split(' ')[0]}` : ''}!
              </h2>
              <p className="text-xs sm:text-sm text-[#667479] mt-1.5 max-w-sm mx-auto">
                {t.checkout.orderSuccessDesc} (<strong>{formData.email}</strong>).
              </p>
            </div>
            <div className="bg-[#FDFBF8] border border-gray-200 rounded-2xl p-4 text-left space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-[#667479]">{t.checkout.orderId}</span>
                <span className="font-mono font-bold text-[#003459]">{orderCompleted.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667479]">{t.checkout.trackingCode}</span>
                <span className="font-mono font-bold text-[#003459]">{orderCompleted.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667479]">Produkt:</span>
                <span className="font-bold text-[#003459]">{bundleDisplayTitle} — {selectedVariant.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667479]">{t.checkout.totalPaid}</span>
                <span className="font-black text-[#003459]">€{currentTotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="p-3 bg-[#FCEED5] rounded-xl text-xs text-[#003459] font-bold flex items-center gap-2">
              <Truck className="w-4 h-4 flex-shrink-0" />
              <span>{t.checkout.freeShippingBadge}</span>
            </div>
            <div className="flex gap-3">
              <a
                href={`/track?order=${orderCompleted.id}`}
                className="btn-spring flex-1 bg-[#003459] hover:bg-[#002A48] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm text-center shadow-md"
              >
                {t.checkout.trackPackage}
              </a>
              <button
                onClick={onClose}
                className="btn-spring px-5 py-3.5 border border-gray-200 rounded-full text-xs sm:text-sm font-bold text-[#003459] hover:bg-gray-50"
              >
                {t.checkout.close}
              </button>
            </div>
          </div>
        ) : (
          /* 📝 Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-[#003459] border-b border-gray-100 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#003459] text-white flex items-center justify-center text-[10px]">1</span>
                <span>{t.checkout.step1}</span>
              </div>
              <span className="text-gray-300">➔</span>
              <div className="flex items-center gap-1.5 text-gray-400">
                <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px]">2</span>
                <span>{t.checkout.step2}</span>
              </div>
            </div>

            {/* Order Summary Pill */}
            <div className="bg-[#FCEED5]/50 border border-[#F7DBA7] rounded-2xl p-4 flex items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-black text-[#003459] block">{bundleDisplayTitle}</span>
                <span className="text-[#003459]/70 text-xs font-semibold">{selectedVariant.name} · {t.checkout.freeShippingBadge}</span>
                {bundleFreebie && (
                  <span className="text-[11px] font-bold text-[#003459] bg-[#FCEED5] border border-[#F7DBA7] px-2 py-0.5 rounded-full mt-1 inline-block">
                    🎁 {bundleFreebie}
                  </span>
                )}
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-lg font-black text-[#003459]">€{selectedBundle.price.toFixed(2)}</span>
                <span className="text-[10px] text-gray-400 block line-through">€{selectedBundle.originalPrice.toFixed(2)}</span>
                <span className="text-[11px] font-black text-[#EDA415]">{t.bundles.save} €{selectedBundle.savings.toFixed(2)}</span>
              </div>
            </div>

            {/* Step 1: Customer Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#003459]">
                  {t.checkout.contactTitle}
                </h4>
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> {t.checkout.encrypted}
                </span>
              </div>

              {/* EMAIL FIRST: Crucial for cart abandonment capture */}
              <div>
                <input
                  required
                  type="email"
                  placeholder={t.checkout.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all bg-[#FDFBF8]"
                />
                <p className="text-[10px] text-[#667479] mt-1 pl-1">
                  {t.checkout.emailHint}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder={t.checkout.fullName}
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all"
                />
                <input
                  type="text"
                  placeholder={t.checkout.streetAddress}
                  value={formData.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder={t.checkout.postalCode}
                  value={formData.postalCode}
                  onChange={(e) => updateField('postalCode', e.target.value)}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all"
                />
                <input
                  type="text"
                  placeholder={t.checkout.city}
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all"
                />
                <select
                  value={formData.country}
                  onChange={(e) => updateField('country', e.target.value)}
                  className="w-full text-sm px-3 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all bg-white col-span-2 sm:col-span-1"
                >
                  <option value="Germany 🇩🇪">Germany 🇩🇪</option>
                  <option value="Netherlands 🇳🇱">Netherlands 🇳🇱</option>
                  <option value="Austria 🇦🇹">Austria 🇦🇹</option>
                  <option value="Belgium 🇧🇪">Belgium 🇧🇪</option>
                  <option value="France 🇫🇷">France 🇫🇷</option>
                  <option value="Italy 🇮🇹">Italy 🇮🇹</option>
                  <option value="Spain 🇪🇸">Spain 🇪🇸</option>
                  <option value="Sweden 🇸🇪">Sweden 🇸🇪</option>
                  <option value="United Kingdom 🇬🇧">United Kingdom 🇬🇧</option>
                </select>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#003459]">
                  {t.checkout.preferredPayment}
                </h4>
                <span className="text-[10px] font-bold text-pink-700 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-full">
                  {t.checkout.klarnaBadge}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { name: 'Credit Card (Stripe)', label: t.checkout.cardsApplePay, badge: '' },
                  { 
                    name: 'Klarna Pay Later', 
                    label: t.checkout.klarnaPayLater, 
                    badge: language === 'de' ? 'Top Wahl DE' : 'Klarna 30d' 
                  },
                  { 
                    name: 'iDEAL Payment', 
                    label: t.checkout.idealPayment, 
                    badge: language === 'nl' ? 'Meest gekozen NL' : 'iDEAL' 
                  },
                  { 
                    name: 'PayPal Direct', 
                    label: t.checkout.paypalDirect, 
                    badge: 'Käuferschutz' 
                  },
                ].map((m) => (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() => updateField('paymentMethod', m.name)}
                    className={`btn-spring p-3 rounded-xl border font-bold text-left transition-all relative ${
                      formData.paymentMethod === m.name
                        ? 'border-[#003459] bg-[#FCEED5]/50 text-[#003459] ring-2 ring-[#003459]/15'
                        : 'border-gray-200 text-[#667479] hover:border-gray-300'
                    }`}
                  >
                    <div>{m.label}</div>
                    {m.badge && (
                      <span className="text-[9px] font-extrabold text-[#003459] opacity-70 block mt-0.5">
                        ✓ {m.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-spring w-full bg-[#003459] hover:bg-[#002A48] text-white font-black text-base py-4 rounded-full shadow-lg shadow-[#003459]/25 flex items-center justify-center gap-2 animate-glow-pulse disabled:opacity-75 disabled:cursor-wait"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-[#FFB703]" />
                  <span>{t.checkout.connectingStripe}</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-[#FFB703]" />
                  <span>{t.checkout.proceedButton} (€{currentTotal.toFixed(2)}) ➔</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#667479] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#003459]" />
              <span>{t.checkout.sslNotice}</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
