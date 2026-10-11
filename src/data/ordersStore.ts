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

// Initial mock orders to show the user how real orders look in the admin panel
export const initialOrders: OrderRecord[] = [
  {
    id: "SP-92841",
    customerName: "Lukas Weber",
    email: "lukas.w@outlook.de",
    address: "Maximilianstraße 42",
    city: "Munich",
    postalCode: "80539",
    country: "Germany 🇩🇪",
    bundleTitle: "2x SteamPaws™ Duo Pack",
    variantName: "Sage Mint Green",
    quantity: 2,
    totalAmount: 39.99,
    currency: "EUR",
    paymentMethod: "Klarna (Pay in 30 days)",
    status: "Pending Fulfillment",
    trackingNumber: "DHL-DE-9284192",
    createdAt: "2026-10-11T16:20:00Z",
    aliExpressFulfillUrl: "https://it.aliexpress.com/w/wholesale-steamy-cat-brush.html"
  },
  {
    id: "SP-92837",
    customerName: "Emma Lefevre",
    email: "emma.lefevre@gmail.com",
    address: "18 Rue de la Paix",
    city: "Paris",
    postalCode: "75002",
    country: "France 🇫🇷",
    bundleTitle: "1x SteamPaws™ Brush",
    variantName: "Warm Cream Sunshine",
    quantity: 1,
    totalAmount: 24.99,
    currency: "EUR",
    paymentMethod: "Apple Pay",
    status: "Dispatched",
    trackingNumber: "COLIS-FR-8371948",
    createdAt: "2026-10-10T14:15:00Z",
    aliExpressFulfillUrl: "https://it.aliexpress.com/w/wholesale-steamy-cat-brush.html"
  }
];

// In-memory runtime storage
let runtimeOrders: OrderRecord[] = [...initialOrders];

export function getOrders(): OrderRecord[] {
  return runtimeOrders;
}

export function addOrder(newOrder: Omit<OrderRecord, 'id' | 'createdAt' | 'trackingNumber' | 'status' | 'aliExpressFulfillUrl'>): OrderRecord {
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  const orderId = `SP-${randomSuffix}`;
  const trackingNumber = `EU-${randomSuffix}-${newOrder.country.slice(0, 2).toUpperCase()}`;
  
  const createdOrder: OrderRecord = {
    ...newOrder,
    id: orderId,
    status: 'Pending Fulfillment',
    trackingNumber,
    createdAt: new Date().toISOString(),
    aliExpressFulfillUrl: `https://it.aliexpress.com/w/wholesale-steamy-cat-brush.html`
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
