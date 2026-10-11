'use client';

import { useState } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import ComparisonTable from '@/components/ComparisonTable';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import CheckoutModal from '@/components/CheckoutModal';
import StickyBottomCta from '@/components/StickyBottomCta';
import { PRODUCT_DATA, BundleTier, ProductVariant } from '@/data/productData';

export default function Home() {
  const [selectedBundle, setSelectedBundle] = useState<BundleTier>(PRODUCT_DATA.bundles[1]); // Default to popular duo pack
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(PRODUCT_DATA.variants[0]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
      <AnnouncementBar />
      <Navbar
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        cartCount={selectedBundle.quantity}
      />
      
      <main className="flex-grow">
        <HeroSection
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          selectedBundle={selectedBundle}
          onSelectBundle={setSelectedBundle}
          selectedVariant={selectedVariant}
          onSelectVariant={setSelectedVariant}
        />
        <FeatureGrid />
        <ComparisonTable />
        <ReviewsSection />
        <FaqSection />
      </main>

      <Footer />

      <StickyBottomCta
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        selectedBundle={selectedBundle}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedBundle={selectedBundle}
        selectedVariant={selectedVariant}
      />
    </div>
  );
}
