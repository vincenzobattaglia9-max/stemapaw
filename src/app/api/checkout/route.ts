import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { addOrder } from '@/data/ordersStore';
import { sendOrderConfirmationEmail } from '@/lib/emailService';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';
const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2025-02-24.acacia' as any,
    })
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      bundleTitle, 
      variantName, 
      totalAmount, 
      quantity, 
      customerName, 
      email,
      orderBumpSelected,
      promoCode
    } = body;

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // If Stripe is configured with a live or test key
    if (stripe) {
      const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
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
      ];

      // Add order bump line item if selected
      if (orderBumpSelected) {
        lineItems.push({
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Extra Ultrasonic Atomizer Replacement Head',
              description: 'Pettoh™ Official Replacement Cartridge • Long Life Mesh',
            },
            unit_amount: 599, // €5.99
          },
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        allow_promotion_codes: true,
        // Critical for abandoned cart recovery: pre-populate customer email
        customer_email: email && email.includes('@') ? email.trim() : undefined,
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
          customerEmail: email || '',
          orderBump: orderBumpSelected ? 'yes' : 'no',
          promoCode: promoCode || '',
        },
      });

      // Record order in local merchant store
      const recordedOrder = addOrder({
        customerName: customerName || 'European Pet Parent',
        email: email || 'checkout@stripe.com',
        address: body.address || 'Recorded in Stripe Checkout',
        city: body.city || 'Europe',
        postalCode: body.postalCode || 'EU',
        country: body.country || 'European Union 🇪🇺',
        bundleTitle: bundleTitle,
        variantName: variantName,
        quantity: quantity || 1,
        totalAmount: orderBumpSelected ? Number(totalAmount) + 5.99 : Number(totalAmount),
        currency: 'EUR',
        paymentMethod: 'Stripe Live (Card / Klarna / Apple Pay)',
      });

      // Send transactional confirmation email asynchronously (with fallback logger)
      if (email && email.includes('@')) {
        sendOrderConfirmationEmail({
          order: recordedOrder,
          customerEmail: email.trim(),
          orderBumpSelected: Boolean(orderBumpSelected),
        }).catch(err => console.error('[Order Email Error]:', err));
      }

      return NextResponse.json({ success: true, url: session.url, order: recordedOrder });
    }

    // Fallback if Stripe key is not loaded yet (local/dev testing mode)
    const finalAmount = orderBumpSelected ? Number(totalAmount) + 5.99 : Number(totalAmount);
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
      totalAmount: finalAmount,
      currency: 'EUR',
      paymentMethod: body.paymentMethod || 'Credit Card (Stripe)',
    });

    if (email && email.includes('@')) {
      sendOrderConfirmationEmail({
        order,
        customerEmail: email.trim(),
        orderBumpSelected: Boolean(orderBumpSelected),
      }).catch(err => console.error('[Order Email Error]:', err));
    }

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    console.error('Checkout API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Stripe error' },
      { status: 500 }
    );
  }
}
