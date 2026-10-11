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
  Layers
} from 'lucide-react';
import { OrderRecord } from '@/data/ordersStore';

export default function AdminPage() {
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [loading, setLoading] = useState(true);

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
    fetchOrders();
  }, []);

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

  // Metrics
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'Pending Fulfillment').length;
  // Estimated supplier cost per item is €11.89 (AliExpress Choice)
  const totalCost = orders.reduce((sum, o) => sum + (o.quantity * 11.89), 0);
  const netProfit = totalRevenue - totalCost;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-black text-[#003459] flex items-center gap-2">
                <span>Pettoh™</span>
                <span className="text-xs bg-[#FCEED5] text-[#003459] font-bold px-2.5 py-0.5 rounded-full">
                  Merchant Portal
                </span>
              </h1>
              <p className="text-xs text-gray-500">
                1-Click AliExpress Dropshipping Fulfillment & Orders
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchOrders}
              className="flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-xl transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <Link
              href="/"
              className="text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 px-3.5 py-2 rounded-xl shadow-sm transition-all"
            >
              View Store Front
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between text-gray-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Sales</span>
              <DollarSign className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-gray-900">
              €{totalRevenue.toFixed(2)}
            </div>
            <p className="text-xs text-gray-400 mt-1">Gross revenue collected via Stripe</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between text-gray-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Net Profit</span>
              <TrendingUp className="w-5 h-5 text-teal-600" />
            </div>
            <div className="text-2xl font-black text-emerald-600">
              €{netProfit.toFixed(2)}
            </div>
            <p className="text-xs text-emerald-600/80 font-medium mt-1">
              ~{(totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0).toFixed(0)}% Profit margin after COGS
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between text-gray-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Orders</span>
              <ShoppingBag className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">
              {totalOrders}
            </div>
            <p className="text-xs text-gray-400 mt-1">Customer checkouts recorded</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
            <div className="flex items-center justify-between text-gray-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">To Fulfill</span>
              <Clock className="w-5 h-5 text-rose-500" />
            </div>
            <div className="text-2xl font-black text-rose-600">
              {pendingOrders}
            </div>
            <p className="text-xs text-gray-400 mt-1">Awaiting dispatch on AliExpress</p>
          </div>

        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-black text-lg text-gray-900">
                Customer Orders & AliExpress 1-Click Dispatch
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Click "Fulfill on AliExpress" to open the supplier item with customer details for instant ordering.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-50/70 border-b border-gray-200 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                  <th className="p-4">Order ID & Date</th>
                  <th className="p-4">Customer & Country</th>
                  <th className="p-4">Bundle / Color</th>
                  <th className="p-4">Paid (EUR)</th>
                  <th className="p-4">Fulfillment Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((o) => (
                  <tr key={o.id} className="hover:bg-gray-50/50 transition-colors">
                    
                    {/* Order ID & Date */}
                    <td className="p-4 font-mono font-bold text-gray-900">
                      <div>{o.id}</div>
                      <div className="text-[10px] text-gray-400 font-sans font-normal">
                        {new Date(o.createdAt).toLocaleDateString()}
                      </div>
                    </td>

                    {/* Customer & Address */}
                    <td className="p-4">
                      <div className="font-bold text-gray-900">{o.customerName}</div>
                      <div className="text-xs text-gray-500">{o.email}</div>
                      <div className="text-[11px] text-gray-400">
                        {o.address}, {o.postalCode} {o.city} ({o.country})
                      </div>
                    </td>

                    {/* Item */}
                    <td className="p-4">
                      <div className="font-semibold text-gray-900">{o.bundleTitle}</div>
                      <div className="text-xs text-emerald-700">Variant: {o.variantName}</div>
                      <div className="text-[10px] text-gray-400">Qty: {o.quantity}</div>
                    </td>

                    {/* Total */}
                    <td className="p-4 font-bold text-gray-900">
                      <div>€{o.totalAmount.toFixed(2)}</div>
                      <div className="text-[10px] text-gray-400">{o.paymentMethod}</div>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <select
                        value={o.status}
                        onChange={(e) => handleUpdateStatus(o.id, e.target.value as OrderRecord['status'])}
                        className={`text-xs font-bold rounded-lg px-2.5 py-1.5 border focus:outline-none ${
                          o.status === 'Pending Fulfillment'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : o.status === 'Dispatched'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-blue-50 text-blue-800 border-blue-200'
                        }`}
                      >
                        <option value="Pending Fulfillment">Pending Fulfillment</option>
                        <option value="Processing on AliExpress">Processing on AliExpress</option>
                        <option value="Dispatched">Dispatched</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                      <div className="text-[10px] text-gray-400 font-mono mt-1">
                        Track: {o.trackingNumber}
                      </div>
                    </td>

                    {/* Action: 1-Click AliExpress */}
                    <td className="p-4 text-right">
                      <a
                        href={o.aliExpressFulfillUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-sm transition-all"
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

        </div>

      </main>
    </div>
  );
}
