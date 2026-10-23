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

function getCountryCode(countryStr?: string): string {
  if (!countryStr) return 'DE';
  const c = countryStr.toLowerCase();
  if (c.includes('germany') || c.includes('deutschland') || c.includes('de')) return 'DE';
  if (c.includes('netherland') || c.includes('nederland') || c.includes('nl')) return 'NL';
  if (c.includes('austria') || c.includes('österreich') || c.includes('at')) return 'AT';
  if (c.includes('belgi') || c.includes('be')) return 'BE';
  if (c.includes('franc') || c.includes('fr')) return 'FR';
  if (c.includes('ital') || c.includes('it')) return 'IT';
  if (c.includes('spain') || c.includes('spanien') || c.includes('es')) return 'ES';
  if (c.includes('sweden') || c.includes('schweden') || c.includes('se')) return 'SE';
  if (c.includes('united kingdom') || c.includes('gb') || c.includes('uk')) return 'GB';
  return 'DE';
}

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
      address,
      city,
      postalCode,
      country,
      paymentMethod,
      orderBumpSelected,
      promoCode
    } = body;

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // If Stripe is configured with a live or test key
    if (stripe) {
      const countryCode = getCountryCode(country);

      // Pre-create customer with shipping address so Stripe Checkout opens with address ALREADY filled in!
      let customerId: string | undefined;
      if (email && email.includes('@')) {
        try {
          const customer = await stripe.customers.create({
            name: customerName || undefined,
            email: email.trim(),
            shipping: address ? {
              name: customerName || 'Valued Customer',
              address: {
                line1: address,
                city: city || undefined,
                postal_code: postalCode || undefined,
                country: countryCode,
              }
            } : undefined,
            address: address ? {
              line1: address,
              city: city || undefined,
              postal_code: postalCode || undefined,
              country: countryCode,
            } : undefined,
            metadata: {
              bundleTitle: bundleTitle || '',
              variantName: variantName || '',
            }
          });
          customerId = customer.id;
        } catch (custErr: any) {
          console.warn('[Stripe Customer Warning]:', custErr.message);
        }
      }

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
        ...(customerId ? {
          customer: customerId,
          customer_update: {
            shipping: 'auto',
            address: 'auto'
          }
        } : {
          customer_email: email && email.includes('@') ? email.trim() : undefined,
        }),
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
          preferredMethod: paymentMethod || '',
        },
      });

      // Record order in local merchant store
      const recordedOrder = addOrder({
        customerName: customerName || 'European Pet Parent',
        email: email || 'checkout@stripe.com',
        address: address || 'Recorded in Stripe Checkout',
        city: city || 'Europe',
        postalCode: postalCode || 'EU',
        country: country || 'Germany 🇩🇪',
        bundleTitle: bundleTitle,
        variantName: variantName,
        quantity: quantity || 1,
        totalAmount: orderBumpSelected ? Number(totalAmount) + 5.99 : Number(totalAmount),
        currency: 'EUR',
        paymentMethod: paymentMethod || 'Stripe Live (Klarna / Card / Apple Pay / Amazon Pay)',
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
