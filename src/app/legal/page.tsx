import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF8] text-[#242B33] flex flex-col font-sans">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-[#003459] hover:text-[#002A48] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Pettoh™ Store</span>
          </Link>
          <span className="text-xs font-bold text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full">
            EU Consumer Rights &amp; Legal Notice
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full space-y-10">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full inline-block mb-2">
            Legal Compliance
          </span>
          <h1 className="text-3xl font-black text-[#003459]">
            Terms, Privacy &amp; Consumer Protection
          </h1>
          <p className="text-sm text-[#667479] mt-2">
            Compliant with European Directive 2011/83/EU, GDPR (Regulation EU 2016/679), and Omnibus Directive 2019/2161.
          </p>
        </div>

        {/* 1. Impressum */}
        <section className="bg-white p-6 sm:p-8 rounded-[24px] border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-lg font-black text-[#003459]">1. Merchant Identity &amp; Contact (Impressum)</h2>
          <p className="text-xs sm:text-sm text-[#667479] leading-relaxed">
            This e-commerce store <strong>Pettoh™</strong> operates in accordance with European e-commerce regulations.
          </p>
          <div className="bg-[#FCEED5]/40 border border-[#F7DBA7] rounded-xl p-4 text-xs font-mono text-[#003459] space-y-1">
            <p><strong>Brand / Store Name:</strong> Pettoh™ Official Store</p>
            <p><strong>Customer Support Email:</strong> support@pettoh.com (or order contact form)</p>
            <p><strong>Territory Served:</strong> European Union (Germany, France, Netherlands, Italy, Spain, Austria, and all EU member states) &amp; UK</p>
            <p><strong>Online Dispute Resolution (ODR):</strong> https://ec.europa.eu/consumers/odr</p>
          </div>
        </section>

        {/* 2. Right of Withdrawal & Guarantee */}
        <section className="bg-white p-6 sm:p-8 rounded-[24px] border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-lg font-black text-[#003459]">2. 30-Day Money-Back Guarantee &amp; Right of Withdrawal</h2>
          <p className="text-xs sm:text-sm text-[#667479] leading-relaxed">
            In compliance with EU Directive 2011/83/EU on Consumer Rights, you have the right to withdraw from this contract within 14 days without giving any reason. Pettoh™ voluntarily extends this period to <strong>30 calendar days</strong>.
          </p>
          <p className="text-xs sm:text-sm text-[#667479] leading-relaxed">
            To exercise your right of withdrawal, you must notify our customer support with your Order ID before the 30-day period expires. Returned items must be in original condition with complete accessories.
          </p>
        </section>

        {/* 3. Review Verification Transparency */}
        <section className="bg-white p-6 sm:p-8 rounded-[24px] border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-lg font-black text-[#003459]">3. Review Transparency (EU Omnibus Directive 2019/2161)</h2>
          <p className="text-xs sm:text-sm text-[#667479] leading-relaxed">
            In accordance with the Omnibus Directive (EU 2019/2161) and fair trade regulations, we guarantee transparent consumer feedback:
          </p>
          <ul className="list-disc list-inside text-xs sm:text-sm text-[#667479] space-y-2">
            <li>Customer reviews displayed on this store include authentic ratings collected from verified European buyers who have ordered and received the identical manufacturing model via our direct fulfillment chain.</li>
            <li>No fake, sponsored, or paid non-verified reviews are published.</li>
            <li>All product ratings reflect genuine product performance and user satisfaction.</li>
          </ul>
        </section>

        {/* 4. Privacy & GDPR */}
        <section className="bg-white p-6 sm:p-8 rounded-[24px] border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-lg font-black text-[#003459]">4. Privacy &amp; Data Protection (GDPR)</h2>
          <p className="text-xs sm:text-sm text-[#667479] leading-relaxed">
            Your personal data (name, shipping address, email) is collected solely for fulfilling your purchase and providing parcel tracking updates.
          </p>
          <p className="text-xs sm:text-sm text-[#667479] leading-relaxed">
            Payment transactions are processed securely via <strong>Stripe Inc.</strong> (PCI-DSS Level 1 Certified). We never store or have access to your full credit card or sensitive financial credentials.
          </p>
        </section>

      </main>

      <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-[#667479]">
        <p>© 2026 Pettoh™ Official Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
