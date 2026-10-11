'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck, Search, CheckCircle, Package, ArrowLeft, Clock, MapPin } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderQuery, setOrderQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderQuery.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-[#003459] hover:text-[#002A48] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Pettoh Store</span>
          </Link>
          <span className="text-xs font-bold text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full">
            European Carrier Tracking
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#FCEED5] text-[#003459] flex items-center justify-center mx-auto mb-3 font-bold">
            🐾
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#003459]">
            Track Your European Package
          </h1>
          <p className="text-xs sm:text-sm text-[#667479]">
            Enter your Order ID (e.g. <span className="font-mono font-bold text-[#003459]">PT-92841</span>) or your email address to see live tracking updates.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm flex gap-2">
          <input
            type="text"
            required
            placeholder="e.g. SP-92841 or your@email.com"
            value={orderQuery}
            onChange={(e) => setOrderQuery(e.target.value)}
            className="flex-1 px-4 py-2.5 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Track</span>
          </button>
        </form>

        {/* Tracking Timeline Result */}
        {hasSearched && (
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in duration-300">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs text-gray-400 block">Status:</span>
                <span className="text-sm sm:text-base font-black text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  In Transit (Priority EU Express Line)
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 block">Estimated Arrival:</span>
                <span className="text-xs sm:text-sm font-bold text-gray-900">5-7 Business Days</span>
              </div>
            </div>

            {/* Carrier Info */}
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Package className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="font-bold text-gray-900">Courier Partner: European Standard Line</div>
                  <div className="text-gray-500 font-mono text-[11px]">Tracking Ref: EU-948201-EXPRESS</div>
                </div>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>

            {/* Milestones */}
            <div className="space-y-6 pl-4 border-l-2 border-emerald-500">
              
              <div className="relative">
                <div className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Departed International Hub</h4>
                <p className="text-xs text-gray-500">Customs cleared, handoff scheduled with local destination postal service.</p>
                <span className="text-[10px] text-gray-400 font-mono">Today, 11:42 AM</span>
              </div>

              <div className="relative">
                <div className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Package Dispatched</h4>
                <p className="text-xs text-gray-500">SteamPaws™ package inspected, packed with protective seal, and tracking number issued.</p>
                <span className="text-[10px] text-gray-400 font-mono">Yesterday, 14:10 PM</span>
              </div>

              <div className="relative">
                <div className="absolute -left-[23px] top-0 w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">Order Placed & Verified</h4>
                <p className="text-xs text-gray-500">Payment received securely. Order sent to warehouse queue.</p>
                <span className="text-[10px] text-gray-400 font-mono">2 days ago</span>
              </div>

            </div>

          </div>
        )}

      </main>

      <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100">
        © 2026 Pettoh Europe • Automated Customer Tracking System
      </footer>

    </div>
  );
}
