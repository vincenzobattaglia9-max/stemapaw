'use client';

import { useState, useCallback } from 'react';
import { BundleTier, ProductVariant } from '@/data/productData';
import { X, ShieldCheck, Lock, Truck, Loader2, AlertCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBundle: BundleTier;
  selectedVariant: ProductVariant;
}

// Persistent form state outside component so it survives modal close/reopen
let persistedForm = {
  name: '',
  email: '',
  paymentMethod: 'Credit Card (Stripe)',
};

export default function CheckoutModal({
  isOpen,
  onClose,
  selectedBundle,
  selectedVariant,
}: CheckoutModalProps) {
  const [formData, setFormData] = useState(persistedForm);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [orderCompleted, setOrderCompleted] = useState<{ id: string; trackingNumber: string } | null>(null);

  // Keep persistedForm in sync so data survives modal close/open
  const updateField = useCallback((field: string, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    persistedForm = { ...persistedForm, [field]: value };
  }, [formData]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.name,
          email: formData.email,
          bundleTitle: selectedBundle.title,
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
      
      // Stripe Checkout — redirect to Stripe hosted page
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
        // Reset persisted form after successful order
        persistedForm = { name: '', email: '', paymentMethod: 'Credit Card (Stripe)' };
      }

      if (!data.success) {
        throw new Error(data.error || 'Payment could not be processed. Please try again.');
      }

    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        err.message?.includes('Server error')
          ? 'Our payment gateway is temporarily unavailable. Please try again in a moment.'
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
                Pettoh™ • Fast European Checkout
              </h3>
              <p className="text-xs text-[#FCEED5]">
                Official Stripe Checkout • Apple Pay &amp; Klarna Active
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
                Order Confirmed!
              </span>
              <h2 className="text-2xl font-black text-[#003459] mt-3">
                Thank you{formData.name ? `, ${formData.name.split(' ')[0]}` : ''}!
              </h2>
              <p className="text-xs sm:text-sm text-[#667479] mt-1.5 max-w-sm mx-auto">
                Your order is confirmed and queued for immediate fulfillment with European tracking.
              </p>
            </div>
            <div className="bg-[#FDFBF8] border border-gray-200 rounded-2xl p-4 text-left space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-[#667479]">Order ID:</span>
                <span className="font-mono font-bold text-[#003459]">{orderCompleted.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667479]">Tracking Code:</span>
                <span className="font-mono font-bold text-[#003459]">{orderCompleted.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667479]">Bundle:</span>
                <span className="font-bold text-[#003459]">{selectedBundle.title} — {selectedVariant.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667479]">Total Paid:</span>
                <span className="font-black text-[#003459]">€{selectedBundle.price.toFixed(2)}</span>
              </div>
            </div>
            <div className="p-3 bg-[#FCEED5] rounded-xl text-xs text-[#003459] font-bold flex items-center gap-2">
              <Truck className="w-4 h-4 flex-shrink-0" />
              <span>Estimated EU Delivery: 6-9 business days. Tracking link sent to your email.</span>
            </div>
            <div className="flex gap-3">
              <a
                href={`/track?order=${orderCompleted.id}`}
                className="btn-spring flex-1 bg-[#003459] hover:bg-[#002A48] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm text-center shadow-md"
              >
                Track Your Package ➔
              </a>
              <button
                onClick={onClose}
                className="btn-spring px-5 py-3.5 border border-gray-200 rounded-full text-xs sm:text-sm font-bold text-[#003459] hover:bg-gray-50"
              >
                Close
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
                <span>Contact Info</span>
              </div>
              <span className="text-gray-300">➔</span>
              <div className="flex items-center gap-1.5 text-gray-400">
                <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px]">2</span>
                <span>Stripe Payment &amp; Delivery Address</span>
              </div>
            </div>

            {/* Order Summary Pill */}
            <div className="bg-[#FCEED5]/50 border border-[#F7DBA7] rounded-2xl p-4 flex items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-black text-[#003459] block">{selectedBundle.title}</span>
                <span className="text-[#003459]/70 text-xs font-semibold">{selectedVariant.name} · Free Tracked EU Shipping (6-9 days)</span>
                {selectedBundle.freebie && (
                  <span className="text-[11px] font-bold text-[#003459] bg-[#FCEED5] border border-[#F7DBA7] px-2 py-0.5 rounded-full mt-1 inline-block">
                    🎁 {selectedBundle.freebie}
                  </span>
                )}
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-lg font-black text-[#003459]">€{selectedBundle.price.toFixed(2)}</span>
                <span className="text-[10px] text-gray-400 block line-through">€{selectedBundle.originalPrice.toFixed(2)}</span>
                <span className="text-[11px] font-black text-[#EDA415]">Save €{selectedBundle.savings.toFixed(2)}</span>
              </div>
            </div>

            {/* Contact Fields — address collected by Stripe in step 2 */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#003459]">
                Step 1: Your Contact Details
              </h4>
              <p className="text-[11px] text-[#667479]">
                Your full delivery address will be securely collected on the next Stripe payment page.
              </p>

              <input
                required
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all"
              />
              <input
                required
                type="email"
                placeholder="Email Address (receipt & order tracking will be sent here)"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all"
              />
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#003459]">
                Step 2: Preferred Payment Method
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { name: 'Credit Card (Stripe)', label: '💳 Cards / Apple Pay' },
                  { name: 'Klarna Pay Later', label: '🛍️ Klarna (30 days)' },
                  { name: 'iDEAL Payment', label: '🏦 iDEAL (NL)' },
                  { name: 'PayPal Direct', label: '🅿️ PayPal' },
                ].map((m) => (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() => updateField('paymentMethod', m.name)}
                    className={`btn-spring p-3 rounded-xl border font-bold text-left transition-all ${
                      formData.paymentMethod === m.name
                        ? 'border-[#003459] bg-[#FCEED5]/50 text-[#003459] ring-2 ring-[#003459]/15'
                        : 'border-gray-200 text-[#667479] hover:border-gray-300'
                    }`}
                  >
                    {m.label}
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
                  <span>Connecting to Stripe Secure Gateway...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-[#FFB703]" />
                  <span>Proceed to Payment (€{selectedBundle.price.toFixed(2)}) ➔</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#667479] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#003459]" />
              <span>Official Stripe 256-Bit SSL · 30-Day Money-Back Guarantee</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
