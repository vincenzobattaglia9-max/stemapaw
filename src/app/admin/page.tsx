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
  LogOut
} from 'lucide-react';
import { OrderRecord } from '@/data/ordersStore';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // Check session storage on mount
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('pettoh_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin secret password (or can be configured via NEXT_PUBLIC_ADMIN_PIN)
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
              Enter your master store password to access confidential customer orders and fulfillment metrics.
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

  // Authenticated Merchant Dashboard
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'Pending Fulfillment').length;
  const estimatedCost = totalOrders * 11.89;
  const netProfit = totalRevenue - estimatedCost;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Top Navbar */}
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
                <h1 className="font-black text-lg tracking-tight leading-none">Pettoh™ Merchant Admin</h1>
                <span className="text-[10px] text-[#FFB703] font-bold uppercase tracking-widest">
                  Live Operations &amp; Fulfillment
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchOrders}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              title="Refresh Orders"
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

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        
        {/* KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Gross Sales</span>
              <div className="text-2xl font-black text-[#003459] mt-1">€{totalRevenue.toFixed(2)}</div>
              <span className="text-[11px] text-emerald-600 font-bold">100% Collected (Stripe)</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl">
              €
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Orders</span>
              <div className="text-2xl font-black text-[#003459] mt-1">{totalOrders}</div>
              <span className="text-[11px] text-gray-500 font-bold">{pendingOrders} awaiting fulfillment</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Estimated Profit</span>
              <div className="text-2xl font-black text-emerald-600 mt-1">€{netProfit.toFixed(2)}</div>
              <span className="text-[11px] text-gray-400 font-medium">After €11.89/unit COGS</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Supplier Sync</span>
              <div className="text-sm font-black text-[#003459] mt-1">AliExpress Choice</div>
              <span className="text-[11px] text-emerald-600 font-bold">1-Click Direct Auto-Fill</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-black text-base text-[#003459]">Live Customer Orders</h3>
              <p className="text-xs text-gray-500">Orders captured via Stripe and local checkout</p>
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
                Your store is live and running ads! When customer orders come in, they will appear here with 1-click AliExpress fulfillment.
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

      </main>

    </div>
  );
}
