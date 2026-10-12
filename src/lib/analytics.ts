'use client';

// Global window extensions for tracking SDKs
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
    ttq: any;
  }
}

// Track standard PageView
export function trackPageView(pageUrl?: string) {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_location: pageUrl || window.location.href,
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }

  // TikTok Pixel
  if (window.ttq && typeof window.ttq.page === 'function') {
    window.ttq.page();
  }
}

// Track ViewContent (e.g. Viewing Bundles or Product Details)
export function trackViewContent(item: {
  id: string;
  name: string;
  price: number;
  currency?: string;
}) {
  if (typeof window === 'undefined') return;
  const currency = item.currency || 'EUR';

  // GA4
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      currency,
      value: item.price,
      items: [{ item_id: item.id, item_name: item.name, price: item.price }],
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_ids: [item.id],
      content_name: item.name,
      content_type: 'product',
      value: item.price,
      currency,
    });
  }

  // TikTok Pixel
  if (window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track('ViewContent', {
      contents: [{ content_id: item.id, content_name: item.name, price: item.price }],
      value: item.price,
      currency,
    });
  }
}

// Track InitiateCheckout
export function trackInitiateCheckout(item: {
  id: string;
  name: string;
  price: number;
  quantity: number;
  currency?: string;
}) {
  if (typeof window === 'undefined') return;
  const currency = item.currency || 'EUR';

  // GA4
  if (window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency,
      value: item.price,
      items: [{ item_id: item.id, item_name: item.name, price: item.price, quantity: item.quantity }],
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_ids: [item.id],
      content_name: item.name,
      num_items: item.quantity,
      value: item.price,
      currency,
    });
  }

  // TikTok Pixel
  if (window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track('InitiateCheckout', {
      contents: [{ content_id: item.id, content_name: item.name, quantity: item.quantity, price: item.price }],
      value: item.price,
      currency,
    });
  }
}

// Track Purchase
export function trackPurchase(order: {
  orderId: string;
  value: number;
  currency?: string;
  items?: Array<{ id: string; name: string; price: number; quantity: number }>;
}) {
  if (typeof window === 'undefined') return;
  const currency = order.currency || 'EUR';

  // GA4
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: order.orderId,
      value: order.value,
      currency,
      items: order.items?.map(it => ({
        item_id: it.id,
        item_name: it.name,
        price: it.price,
        quantity: it.quantity,
      })),
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Purchase', {
      value: order.value,
      currency,
      order_id: order.orderId,
      content_type: 'product',
    });
  }

  // TikTok Pixel
  if (window.ttq && typeof window.ttq.track === 'function') {
    window.ttq.track('PlaceAnOrder', {
      value: order.value,
      currency,
      contents: order.items?.map(it => ({
        content_id: it.id,
        content_name: it.name,
        quantity: it.quantity,
        price: it.price,
      })),
    });
    window.ttq.track('CompletePayment', {
      value: order.value,
      currency,
    });
  }
}
