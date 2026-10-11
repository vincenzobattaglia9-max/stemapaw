import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { addOrder } from '@/data/ordersStore';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';
const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2025-02-24.acacia' as any,
    })
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { bundleTitle, variantName, totalAmount, quantity, customerName, email } = body;

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // If Stripe is configured with a live or test key
    if (stripe) {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: `${bundleTitle} (${variantName})`,
                description: 'Pettoh™ Pro • 3-in-1 Self-Cleaning Ultrasonic Steamy Brush (Free EU Tracked Delivery)',
                images: ['https://ae-pic-a1.aliexpress-media.com/kf/Sd1666179dac54183925043efdc2629c2F.jpg'],
              },
              unit_amount: Math.round(totalAmount * 100),
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        customer_email: email && email.includes('@') ? email : undefined,
        billing_address_collection: 'required',
        shipping_address_collection: {
          allowed_countries: [
            'DE', 'FR', 'NL', 'IT', 'ES', 'AT', 'BE', 'SE', 'DK', 'PL', 'IE', 'GB', 'PT', 'FI', 'CZ', 'RO', 'HU'
          ],
        },
        success_url: `${origin}/track?order=confirmed&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/#buy-now`,
        metadata: {
          bundleTitle: bundleTitle || '',
          variantName: variantName || '',
          customerName: customerName || '',
        },
      });

      // Also record order in local merchant store
      addOrder({
        customerName: customerName || 'European Pet Parent',
        email: email || 'checkout@stripe.com',
        address: 'Recorded in Stripe Checkout',
        city: 'Europe',
        postalCode: 'EU',
        country: 'European Union 🇪🇺',
        bundleTitle: bundleTitle,
        variantName: variantName,
        quantity: quantity || 1,
        totalAmount: totalAmount,
        currency: 'EUR',
        paymentMethod: 'Stripe Live (Card / Klarna / Apple Pay)',
      });

      return NextResponse.json({ success: true, url: session.url });
    }

    // Fallback if Stripe key is not loaded yet
    const order = addOrder({
      customerName: customerName || 'Valued Customer',
      email: email || 'pending@email.com',
      address: body.address || 'Standard European Delivery',
      city: body.city || 'Berlin',
      postalCode: body.postalCode || '10115',
      country: body.country || 'Germany 🇩🇪',
      bundleTitle: bundleTitle,
      variantName: variantName,
      quantity: quantity || 1,
      totalAmount: totalAmount,
      currency: 'EUR',
      paymentMethod: body.paymentMethod || 'Credit Card (Stripe)',
    });

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    console.error('Stripe Checkout Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Stripe error' },
      { status: 500 }
    );
  }
}
