export interface OrderRecord {
  id: string;
  customerName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  bundleTitle: string;
  variantName: string;
  quantity: number;
  totalAmount: number;
  currency: string;
  paymentMethod: string;
  status: 'Pending Fulfillment' | 'Processing on AliExpress' | 'Dispatched' | 'Delivered';
  trackingNumber: string;
  createdAt: string;
  aliExpressFulfillUrl: string;
}

const EXACT_ALIEXPRESS_URL = "https://it.aliexpress.com/item/1005009329999811.html";

// Reset to empty: no mock orders, only real customer purchases!
export const initialOrders: OrderRecord[] = [];

let runtimeOrders: OrderRecord[] = [...initialOrders];

export function getOrders(): OrderRecord[] {
  return runtimeOrders;
}

export function addOrder(newOrder: Omit<OrderRecord, 'id' | 'createdAt' | 'trackingNumber' | 'status' | 'aliExpressFulfillUrl'>): OrderRecord {
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  const orderId = `PT-${randomSuffix}`;
  const trackingNumber = `EU-${randomSuffix}-${newOrder.country.slice(0, 2).toUpperCase()}`;
  
  const createdOrder: OrderRecord = {
    ...newOrder,
    id: orderId,
    status: 'Pending Fulfillment',
    trackingNumber,
    createdAt: new Date().toISOString(),
    aliExpressFulfillUrl: EXACT_ALIEXPRESS_URL
  };

  runtimeOrders.unshift(createdOrder);
  return createdOrder;
}

export function updateOrderStatus(id: string, status: OrderRecord['status']): boolean {
  const order = runtimeOrders.find(o => o.id === id);
  if (order) {
    order.status = status;
    return true;
  }
  return false;
}
