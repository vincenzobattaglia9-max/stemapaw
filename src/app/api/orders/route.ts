import { NextResponse } from 'next/server';
import { getOrders, addOrder, updateOrderStatus } from '@/data/ordersStore';

export async function GET() {
  const orders = getOrders();
  return NextResponse.json({ success: true, orders });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (body.action === 'update_status') {
      const updated = updateOrderStatus(body.id, body.status);
      return NextResponse.json({ success: updated });
    }

    const order = addOrder({
      customerName: body.customerName,
      email: body.email,
      address: body.address,
      city: body.city,
      postalCode: body.postalCode,
      country: body.country,
      bundleTitle: body.bundleTitle,
      variantName: body.variantName,
      quantity: body.quantity || 1,
      totalAmount: body.totalAmount,
      currency: "EUR",
      paymentMethod: body.paymentMethod || "Credit Card (Stripe)"
    });

    return NextResponse.json({ success: true, order });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
