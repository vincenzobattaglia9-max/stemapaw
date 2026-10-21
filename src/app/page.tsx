'use client';

import { useState } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShippingTrustBar from '@/components/ShippingTrustBar';
import FeatureGrid from '@/components/FeatureGrid';
import ComparisonTable from '@/components/ComparisonTable';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import CheckoutModal from '@/components/CheckoutModal';
import StickyBottomCta from '@/components/StickyBottomCta';
import { PRODUCT_DATA, BundleTier, ProductVariant } from '@/data/productData';
import { LanguageProvider } from '@/context/LanguageContext';

export default function Home() {
  // Start with null so cart starts at 0 articles on initial landing
  const [selectedBundle, setSelectedBundle] = useState<BundleTier | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(PRODUCT_DATA.variants[0]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const cartCount = selectedBundle ? selectedBundle.quantity : 0;
  const activeCheckoutBundle = selectedBundle || PRODUCT_DATA.bundles[0];

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
        <AnnouncementBar />
        <Navbar
          onOpenCheckout={() => {
            if (!selectedBundle) {
              setSelectedBundle(PRODUCT_DATA.bundles[0]);
            }
            setIsCheckoutOpen(true);
          }}
          cartCount={cartCount}
        />
      
      <main className="flex-grow">
        <HeroSection
          onOpenCheckout={() => {
            if (!selectedBundle) {
              setSelectedBundle(PRODUCT_DATA.bundles[0]);
            }
            setIsCheckoutOpen(true);
          }}
          selectedBundle={selectedBundle}
          onSelectBundle={setSelectedBundle}
          selectedVariant={selectedVariant}
          onSelectVariant={setSelectedVariant}
        />
        <ShippingTrustBar />
        <FeatureGrid />
        <ComparisonTable />
        <ReviewsSection />
        <FaqSection />
      </main>

      <Footer />

      <StickyBottomCta
        onOpenCheckout={() => {
          if (!selectedBundle) {
            setSelectedBundle(PRODUCT_DATA.bundles[0]);
          }
          setIsCheckoutOpen(true);
        }}
        selectedBundle={selectedBundle}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedBundle={activeCheckoutBundle}
        selectedVariant={selectedVariant}
      />
    </div>
  </LanguageProvider>
  );
}
