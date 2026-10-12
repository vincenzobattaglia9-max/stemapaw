'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  TrendingUp, 
  Truck, 
  ExternalLink, 
  CheckCircle, 
  Clock, 
  RefreshCw, 
  ArrowLeft,
  DollarSign,
  Package,
  Layers,
  Lock,
  KeyRound,
  ShieldCheck,
  LogOut,
  BarChart3,
  PlusCircle,
  AlertTriangle,
  Flame,
  CheckCircle2,
  Trash2,
  Calendar
} from 'lucide-react';
import { OrderRecord } from '@/data/ordersStore';

interface DailyAdEntry {
  id: string;
  date: string;
  spend: number;
  impressions: number;
  reach: number;
  linkClicks: number;
  cpc: number;
  cpm: number;
  notes?: string;
}

const DEFAULT_METRIC_ENTRIES: DailyAdEntry[] = [
  {
    id: 'entry-1',
    date: '2026-10-12',
    spend: 8.12,
    impressions: 480,
    reach: 410,
    linkClicks: 14,
    cpc: 0.58,
    cpm: 16.91,
    notes: 'First launch day (DE + NL). Shiba Inu video hook performed outstandingly (0.58€ CPC).'
  }
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [activeTab, setActiveTab] = useState<'orders' | 'marketing'>('marketing');

  // Orders State
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // Marketing Log State (saved in localStorage for persistence)
  const [adEntries, setAdEntries] = useState<DailyAdEntry[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    spend: '',
    impressions: '',
    reach: '',
    linkClicks: '',
    notes: ''
  });

  // Check session storage on mount
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('pettoh_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }

    // Load ad records from localStorage
    const saved = localStorage.getItem('pettoh_ad_entries');
    if (saved) {
      try {
        setAdEntries(JSON.parse(saved));
      } catch (e) {
        setAdEntries(DEFAULT_METRIC_ENTRIES);
      }
    } else {
      setAdEntries(DEFAULT_METRIC_ENTRIES);
      localStorage.setItem('pettoh_ad_entries', JSON.stringify(DEFAULT_METRIC_ENTRIES));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const expectedPassword = process.env.NEXT_PUBLIC_ADMIN_PIN || 'pettoh2026';

    if (passwordInput.trim() === expectedPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('pettoh_admin_auth', 'true');
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect master password. Access denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('pettoh_admin_auth');
  };

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/orders');
      const data = await res.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  const handleUpdateStatus = async (id: string, newStatus: OrderRecord['status']) => {
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update_status', id, status: newStatus }),
      });
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddAdEntry = (e: React.FormEvent) => {
    e.preventDefault();
    const spendNum = parseFloat(newEntry.spend) || 0;
    const impNum = parseInt(newEntry.impressions, 10) || 0;
    const reachNum = parseInt(newEntry.reach, 10) || 0;
    const clicksNum = parseInt(newEntry.linkClicks, 10) || 0;

    const cpc = clicksNum > 0 ? spendNum / clicksNum : 0;
    const cpm = impNum > 0 ? (spendNum / impNum) * 1000 : 0;

    const entry: DailyAdEntry = {
      id: `entry-${Date.now()}`,
      date: newEntry.date,
      spend: spendNum,
      impressions: impNum,
      reach: reachNum,
      linkClicks: clicksNum,
      cpc,
      cpm,
      notes: newEntry.notes
    };

    const updated = [entry, ...adEntries.filter(a => a.date !== newEntry.date)];
    setAdEntries(updated);
    localStorage.setItem('pettoh_ad_entries', JSON.stringify(updated));
    setShowAddModal(false);
    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      spend: '',
      impressions: '',
      reach: '',
      linkClicks: '',
      notes: ''
    });
  };

  const handleDeleteEntry = (id: string) => {
    const updated = adEntries.filter(a => a.id !== id);
    setAdEntries(updated);
    localStorage.setItem('pettoh_ad_entries', JSON.stringify(updated));
  };

  // If not logged in, render strict security lock screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FDFBF8] flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-[32px] p-8 shadow-monito-hover border border-[#F7DBA7] text-center space-y-6 animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-2xl bg-[#003459] text-[#FFB703] flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#003459] bg-[#FCEED5] px-3.5 py-1 rounded-full">
              Restricted Area
            </span>
            <h1 className="text-2xl font-black text-[#003459] mt-3">
              Pettoh™ Merchant Portal
            </h1>
            <p className="text-xs text-[#667479] mt-1.5">
              Enter your master store password to access confidential customer orders and ads intelligence metrics.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                required
                autoFocus
                placeholder="Enter Admin Password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3.5 pl-11 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459] transition-all bg-[#FDFBF8]"
              />
              <KeyRound className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
            </div>

            {errorMsg && (
              <p className="text-xs font-bold text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="btn-spring w-full bg-[#003459] hover:bg-[#002A48] text-white font-black py-3.5 rounded-full text-sm shadow-md flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#FFB703]" />
              <span>Unlock Merchant Dashboard</span>
            </button>
          </form>

          <Link href="/" className="inline-block text-xs font-bold text-[#667479] hover:text-[#003459] transition-colors">
            ← Return to Public Storefront
          </Link>
        </div>
      </div>
    );
  }

  // Analytics Computed Aggregates
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'Pending Fulfillment').length;
  const estimatedCost = totalOrders * 11.89;
  const netProfit = totalRevenue - estimatedCost;

  const totalAdSpend = adEntries.reduce((sum, e) => sum + e.spend, 0);
  const totalClicks = adEntries.reduce((sum, e) => sum + e.linkClicks, 0);
  const avgCpc = totalClicks > 0 ? totalAdSpend / totalClicks : 0;
  const overallRoas = totalAdSpend > 0 ? totalRevenue / totalAdSpend : 0;

  // Latest Day Record for Semaphore Diagnosis
  const latestEntry = adEntries[0] || null;

  // Semaphore Logic
  // CPC: < 0.60€ = Green, 0.60 - 1.00€ = Yellow, > 1.00€ = Red
  const getCpcStatus = (cpc: number) => {
    if (cpc === 0) return { color: 'bg-gray-100 text-gray-600 border-gray-200', dot: 'bg-gray-400', label: 'No Data' };
    if (cpc <= 0.65) return { color: 'bg-emerald-50 text-emerald-800 border-emerald-200', dot: 'bg-emerald-500', label: '🟢 OUTSTANDING (< 0.65€)' };
    if (cpc <= 1.00) return { color: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500', label: '🟡 ACCEPTABLE (0.65€ - 1.00€)' };
    return { color: 'bg-rose-50 text-rose-800 border-rose-200', dot: 'bg-rose-500', label: '🔴 EXPENSIVE (> 1.00€)' };
  };

  // CPM: < 22€ = Green, 22 - 32€ = Yellow, > 32€ = Red
  const getCpmStatus = (cpm: number) => {
    if (cpm === 0) return { color: 'bg-gray-100 text-gray-600 border-gray-200', dot: 'bg-gray-400', label: 'No Data' };
    if (cpm <= 22) return { color: 'bg-emerald-50 text-emerald-800 border-emerald-200', dot: 'bg-emerald-500', label: '🟢 CHEAP REACH (< 22€)' };
    if (cpm <= 32) return { color: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500', label: '🟡 NORMAL (22€ - 32€)' };
    return { color: 'bg-rose-50 text-rose-800 border-rose-200', dot: 'bg-rose-500', label: '🔴 HIGH COMPETITION (> 32€)' };
  };

  return (
    <div className="min-h-screen bg-[#FDFBF8] flex flex-col font-sans">
      
      {/* Top Header */}
      <header className="bg-[#003459] text-white border-b border-[#002A48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <Link href="/" className="text-white/70 hover:text-white transition-colors" title="Back to storefront">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FCEED5] text-[#003459] flex items-center justify-center font-black">
                🐾
              </div>
              <div>
                <h1 className="font-black text-lg tracking-tight leading-none">Pettoh™ Mission Control</h1>
                <span className="text-[10px] text-[#FFB703] font-bold uppercase tracking-widest">
                  Fulfillment &amp; Meta Ads Intelligence
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Tab Switcher */}
            <div className="bg-white/10 p-1 rounded-full flex gap-1">
              <button
                onClick={() => setActiveTab('marketing')}
                className={`px-3 py-1 rounded-full text-xs font-black transition-all flex items-center gap-1.5 ${
                  activeTab === 'marketing'
                    ? 'bg-[#FFB703] text-[#003459] shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Ads &amp; Traffic</span>
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-3 py-1 rounded-full text-xs font-black transition-all flex items-center gap-1.5 ${
                  activeTab === 'orders'
                    ? 'bg-[#FFB703] text-[#003459] shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Customer Orders ({orders.length})</span>
              </button>
            </div>

            <button
              onClick={fetchOrders}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        
        {/* ================= TAB 1: MARKETING & ADS INTELLIGENCE ================= */}
        {activeTab === 'marketing' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Top KPI Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              <div className="bg-white rounded-3xl p-5 border border-[#F7DBA7] shadow-xs">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Total Ad Budget Spent</span>
                <div className="text-2xl font-black text-[#003459] mt-1">€{totalAdSpend.toFixed(2)}</div>
                <span className="text-[11px] text-gray-500 font-semibold">{adEntries.length} daily logs recorded</span>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#F7DBA7] shadow-xs">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Total Store Link Clicks</span>
                <div className="text-2xl font-black text-[#003459] mt-1">{totalClicks}</div>
                <span className="text-[11px] text-emerald-600 font-bold">DE + NL Targeted Buyers</span>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#F7DBA7] shadow-xs">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Average CPC</span>
                <div className="text-2xl font-black text-emerald-600 mt-1">€{avgCpc.toFixed(2)}</div>
                <span className="text-[11px] text-emerald-700 font-bold">Benchmark: Target &lt; 0.65€</span>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#F7DBA7] shadow-xs">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Gross Sales Collected</span>
                <div className="text-2xl font-black text-[#003459] mt-1">€{totalRevenue.toFixed(2)}</div>
                <span className="text-[11px] text-blue-600 font-bold">{totalOrders} order(s) via Stripe</span>
              </div>

            </div>

            {/* LIVE SEMAPHORE & DIAGNOSTIC CARD (Latest Day) */}
            {latestEntry && (
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F7DBA7] shadow-sm space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#003459] bg-[#FCEED5] px-3 py-1 rounded-full">
                      Daily Traffic Health Check
                    </span>
                    <h3 className="text-xl font-black text-[#003459] mt-2">
                      Performance Diagnostic for {latestEntry.date}
                    </h3>
                  </div>

                  <button
                    onClick={() => setShowAddModal(true)}
                    className="btn-spring inline-flex items-center gap-2 bg-[#003459] hover:bg-[#002A48] text-white font-black text-xs px-5 py-2.5 rounded-full shadow-md self-start sm:self-auto"
                  >
                    <PlusCircle className="w-4 h-4 text-[#FFB703]" />
                    <span>Insert Today's Meta Export</span>
                  </button>
                </div>

                {/* 3 Semaphores */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Semaphore 1: CPC */}
                  <div className={`p-4.5 rounded-2xl border ${getCpcStatus(latestEntry.cpc).color}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider">CPC (Cost Per Click)</span>
                      <span className={`w-3 h-3 rounded-full ${getCpcStatus(latestEntry.cpc).dot} animate-pulse`} />
                    </div>
                    <div className="text-3xl font-black mt-2">€{latestEntry.cpc.toFixed(2)}</div>
                    <p className="text-[11px] font-bold mt-2">
                      {getCpcStatus(latestEntry.cpc).label}
                    </p>
                    <p className="text-[11px] opacity-80 mt-1">
                      {latestEntry.cpc <= 0.65 
                        ? 'The hook and Shiba video are working with extreme efficiency. People want this product!' 
                        : 'Review video thumbnail or first 3 seconds to lower click costs.'}
                    </p>
                  </div>

                  {/* Semaphore 2: CPM */}
                  <div className={`p-4.5 rounded-2xl border ${getCpmStatus(latestEntry.cpm).color}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider">CPM (1,000 Impressions)</span>
                      <span className={`w-3 h-3 rounded-full ${getCpmStatus(latestEntry.cpm).dot}`} />
                    </div>
                    <div className="text-3xl font-black mt-2">€{latestEntry.cpm.toFixed(2)}</div>
                    <p className="text-[11px] font-bold mt-2">
                      {getCpmStatus(latestEntry.cpm).label}
                    </p>
                    <p className="text-[11px] opacity-80 mt-1">
                      {latestEntry.cpm <= 22 
                        ? 'Ad algorithm is rewarding your creative with low-cost auction distribution.' 
                        : 'Audience may be too narrow or saturated. Keep targeting broad.'}
                    </p>
                  </div>

                  {/* Semaphore 3: Click-Through Rate */}
                  <div className="p-4.5 rounded-2xl border bg-blue-50 text-blue-900 border-blue-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider">Click Volume &amp; Reach</span>
                      <span className="w-3 h-3 rounded-full bg-blue-500" />
                    </div>
                    <div className="text-3xl font-black mt-2">{latestEntry.linkClicks} Clicks</div>
                    <p className="text-[11px] font-bold mt-2">
                      From {latestEntry.reach} unique pet owners
                    </p>
                    <p className="text-[11px] opacity-80 mt-1">
                      Conversion expected every 30-50 clicks. You are building critical pixel learning!
                    </p>
                  </div>

                </div>

                {latestEntry.notes && (
                  <div className="bg-[#FDFBF8] border border-[#F7DBA7] p-3.5 rounded-2xl text-xs text-[#003459] font-medium">
                    <strong className="font-black">Daily Note:</strong> {latestEntry.notes}
                  </div>
                )}

              </div>
            )}

            {/* Daily History Table */}
            <div className="bg-white rounded-3xl border border-[#F7DBA7] shadow-xs overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-base text-[#003459]">Campaign Daily History</h3>
                  <p className="text-xs text-gray-500">All data exported and tracked daily from Meta Ads Manager</p>
                </div>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="btn-spring text-xs font-bold bg-[#FCEED5] text-[#003459] hover:bg-[#F7DBA7] px-3.5 py-1.5 rounded-full"
                >
                  + Add Daily Entry
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FDFBF8] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                    <tr>
                      <th className="p-4">Date</th>
                      <th className="p-4">Spend (€)</th>
                      <th className="p-4">Link Clicks</th>
                      <th className="p-4">CPC</th>
                      <th className="p-4">Impressions / Reach</th>
                      <th className="p-4">CPM</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    {adEntries.map((e) => (
                      <tr key={e.id} className="hover:bg-gray-50/50">
                        <td className="p-4 font-mono font-bold text-[#003459] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          <span>{e.date}</span>
                        </td>
                        <td className="p-4 font-bold text-gray-900">€{e.spend.toFixed(2)}</td>
                        <td className="p-4 font-black text-[#003459]">{e.linkClicks}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-md font-bold ${
                            e.cpc <= 0.65 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            €{e.cpc.toFixed(2)}
                          </span>
                        </td>
                        <td className="p-4 text-gray-600">
                          {e.impressions} imp / {e.reach} reach
                        </td>
                        <td className="p-4 font-bold text-gray-700">€{e.cpm.toFixed(2)}</td>
                        <td className="p-4">
                          <span className="text-[11px] font-extrabold text-emerald-600 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Active
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleDeleteEntry(e.id)}
                            className="text-gray-400 hover:text-rose-600 p-1.5 rounded-md hover:bg-rose-50 transition-colors"
                            title="Delete entry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ================= TAB 2: CUSTOMER ORDERS ================= */}
        {activeTab === 'orders' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Orders KPI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-3xl p-5 border border-[#F7DBA7] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Gross Sales</span>
                  <div className="text-2xl font-black text-[#003459] mt-1">€{totalRevenue.toFixed(2)}</div>
                  <span className="text-[11px] text-emerald-600 font-bold">100% Stripe Live</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl">
                  €
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#F7DBA7] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Orders Recorded</span>
                  <div className="text-2xl font-black text-[#003459] mt-1">{totalOrders}</div>
                  <span className="text-[11px] text-gray-500 font-bold">{pendingOrders} awaiting fulfillment</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#F7DBA7] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Net Margin</span>
                  <div className="text-2xl font-black text-emerald-600 mt-1">€{netProfit.toFixed(2)}</div>
                  <span className="text-[11px] text-gray-400 font-medium">After €11.89 COGS</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-[#F7DBA7] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">AliExpress Sync</span>
                  <div className="text-sm font-black text-[#003459] mt-1">Choice Express Line</div>
                  <span className="text-[11px] text-emerald-600 font-bold">1-Click Auto Fulfillment</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-3xl border border-[#F7DBA7] shadow-xs overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-base text-[#003459]">Live Customer Orders</h3>
                  <p className="text-xs text-gray-500">Live purchases captured via official Stripe Checkout</p>
                </div>
                <span className="text-xs font-bold bg-[#FCEED5] text-[#003459] px-3 py-1 rounded-full">
                  {orders.length} Total
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="p-12 text-center space-y-3">
                  <div className="text-4xl">🐾</div>
                  <h4 className="font-black text-base text-[#003459]">No Orders Recorded Yet</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Your store is running active Meta ads! When purchases happen, they appear here with 1-click AliExpress fulfillment.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                      <tr>
                        <th className="p-4">Order ID</th>
                        <th className="p-4">Customer</th>
                        <th className="p-4">Item &amp; Color</th>
                        <th className="p-4">Total</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 text-right">AliExpress Fulfillment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-medium">
                      {orders.map((o) => (
                        <tr key={o.id} className="hover:bg-gray-50/50">
                          <td className="p-4 font-mono font-bold text-[#003459]">{o.id}</td>
                          <td className="p-4">
                            <div className="font-bold text-gray-900">{o.customerName}</div>
                            <div className="text-gray-400">{o.email}</div>
                            <div className="text-gray-500 text-[11px] mt-0.5">{o.city}, {o.country}</div>
                          </td>
                          <td className="p-4">
                            <span className="font-bold text-gray-800">{o.bundleTitle}</span>
                            <div className="text-gray-400 text-[11px]">{o.variantName}</div>
                          </td>
                          <td className="p-4 font-black text-gray-900">€{o.totalAmount.toFixed(2)}</td>
                          <td className="p-4">
                            <select
                              value={o.status}
                              onChange={(e) => handleUpdateStatus(o.id, e.target.value as any)}
                              className="text-xs font-bold border border-gray-200 rounded-lg p-1.5 bg-white focus:outline-none"
                            >
                              <option value="Pending Fulfillment">Pending Fulfillment</option>
                              <option value="Processing on AliExpress">Processing on AliExpress</option>
                              <option value="Dispatched">Dispatched</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            <a
                              href={o.aliExpressFulfillUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="btn-spring inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs shadow-xs"
                            >
                              <span>Fulfill on AliExpress</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

      </main>

      {/* ================= MODAL: ADD DAILY META DATA ================= */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-[32px] p-6 sm:p-7 shadow-2xl border border-gray-100 space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">📊</span>
                <h3 className="font-black text-base text-[#003459]">Add Meta Ads Daily Log</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddAdEntry} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-[#003459] block mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={newEntry.date}
                  onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#003459] block mb-1">Amount Spent (€)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="e.g. 8.12"
                    value={newEntry.spend}
                    onChange={(e) => setNewEntry({ ...newEntry, spend: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#003459] block mb-1">Link Clicks</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 14"
                    value={newEntry.linkClicks}
                    onChange={(e) => setNewEntry({ ...newEntry, linkClicks: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#003459] block mb-1">Impressions</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 480"
                    value={newEntry.impressions}
                    onChange={(e) => setNewEntry({ ...newEntry, impressions: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#003459] block mb-1">Reach (Accounts)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 410"
                    value={newEntry.reach}
                    onChange={(e) => setNewEntry({ ...newEntry, reach: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[#003459] block mb-1">Daily Notes / Creative</label>
                <input
                  type="text"
                  placeholder="e.g. Shiba Inu video hook test, high engagement..."
                  value={newEntry.notes}
                  onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003459]"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="btn-spring flex-1 bg-[#003459] hover:bg-[#002A48] text-white font-bold py-3 rounded-full text-xs shadow-md"
                >
                  Save &amp; Compute Semaphores
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-3 rounded-full border border-gray-200 text-gray-500 font-bold hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
