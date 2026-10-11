'use client';

import { useState } from 'react';
import { BundleTier, ProductVariant } from '@/data/productData';
import { X, ShieldCheck, Lock, CheckCircle, Truck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBundle: BundleTier;
  selectedVariant: ProductVariant;
}

const EU_COUNTRIES = [
  { code: 'DE', name: 'Germany 🇩🇪' },
  { code: 'FR', name: 'France 🇫🇷' },
  { code: 'NL', name: 'Netherlands 🇳🇱' },
  { code: 'IT', name: 'Italy 🇮🇹' },
  { code: 'ES', name: 'Spain 🇪🇸' },
  { code: 'AT', name: 'Austria 🇦🇹' },
  { code: 'BE', name: 'Belgium 🇧🇪' },
  { code: 'SE', name: 'Sweden 🇸🇪' },
  { code: 'DK', name: 'Denmark 🇩🇰' },
  { code: 'PL', name: 'Poland 🇵🇱' },
  { code: 'GB', name: 'United Kingdom 🇬🇧' },
  { code: 'IE', name: 'Ireland 🇮🇪' },
];

export default function CheckoutModal({
  isOpen,
  onClose,
  selectedBundle,
  selectedVariant,
}: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Germany 🇩🇪',
    paymentMethod: 'Credit Card (Stripe)'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState<{ id: string; trackingNumber: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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
          bundleTitle: selectedBundle.title,
          variantName: selectedVariant.name,
          quantity: selectedBundle.quantity,
          totalAmount: selectedBundle.price,
          paymentMethod: formData.paymentMethod,
        }),
      });

      const data = await res.json();
      
      // If Stripe Checkout session URL is returned, redirect customer to Stripe payment page!
      if (data.success && data.url) {
        window.location.href = data.url;
        return;
      }

      if (data.success && data.order) {
        setOrderCompleted({
          id: data.order.id,
          trackingNumber: data.order.trackingNumber,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Monito Style */}
        <div className="bg-[#003459] text-white p-6 flex items-center justify-between border-b border-[#002A48]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FCEED5] text-[#003459] flex items-center justify-center font-black">
              🐾
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg">
                Pettoh™ • Fast European Checkout
              </h3>
              <p className="text-xs text-[#FCEED5]">
                Official Stripe Checkout • Apple Pay & Klarna Active
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
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-[#FCEED5] text-[#003459] rounded-full flex items-center justify-center mx-auto text-2xl font-black">
              ✓
            </div>

            <div>
              <span className="text-xs uppercase font-black text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full">
                Order Confirmed!
              </span>
              <h2 className="text-2xl font-black text-[#003459] mt-3">
                Thank you, {formData.name || 'Pet Parent'}!
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
                <span className="text-[#667479]">Selected Bundle:</span>
                <span className="font-bold text-[#003459]">{selectedBundle.title} ({selectedVariant.name})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667479]">Total Paid:</span>
                <span className="font-black text-[#003459]">€{selectedBundle.price.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-3 bg-[#FCEED5] rounded-xl text-xs text-[#003459] font-bold flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#003459] flex-shrink-0" />
              <span>Estimated Delivery: 6-9 business days to {formData.country}</span>
            </div>

            <div className="flex gap-3">
              <a
                href={`/track?order=${orderCompleted.id}`}
                className="flex-1 bg-[#003459] hover:bg-[#002A48] text-white font-bold py-3.5 rounded-full text-xs sm:text-sm transition-all"
              >
                Track Your Package Now ➔
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3.5 border border-gray-200 rounded-full text-xs sm:text-sm font-bold text-[#003459] hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
            
            {/* Order Summary Pill */}
            <div className="bg-[#FCEED5]/50 border border-[#F7DBA7] rounded-2xl p-4 flex items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-black text-[#003459] block">{selectedBundle.title}</span>
                <span className="text-[#003459]/80 text-xs font-semibold">Color: {selectedVariant.name} • Free EU Shipping</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-[#003459]">€{selectedBundle.price.toFixed(2)}</span>
                <span className="text-[10px] text-gray-400 block line-through">€{selectedBundle.originalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#003459]">
                1. Delivery & Contact Details
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003459]"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address (for order receipt)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003459]"
                />
              </div>

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
                    onClick={() => setFormData({ ...formData, paymentMethod: m.name })}
                    className={`p-3 rounded-xl border font-bold text-left transition-all ${
                      formData.paymentMethod === m.name
                        ? 'border-[#003459] bg-[#FCEED5]/50 text-[#003459] ring-2 ring-[#003459]/10'
                        : 'border-gray-200 text-[#667479] hover:border-gray-300'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#003459] hover:bg-[#002A48] active:scale-98 text-white font-black text-base py-4 rounded-full shadow-lg shadow-[#003459]/25 transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span>Connecting to Stripe...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-[#FFB703]" />
                  <span>Proceed to Payment (€{selectedBundle.price.toFixed(2)}) ➔</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#667479] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#003459]" />
              <span>Official Stripe 256-Bit SSL Checkout • 30-Day Guarantee</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
