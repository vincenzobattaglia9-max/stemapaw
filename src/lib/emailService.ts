import nodemailer from 'nodemailer';
import { OrderRecord } from '@/data/ordersStore';

interface EmailPayload {
  order: OrderRecord;
  customerEmail: string;
  orderBumpSelected?: boolean;
}

export async function sendOrderConfirmationEmail({
  order,
  customerEmail,
  orderBumpSelected = false,
}: EmailPayload): Promise<{ success: boolean; messageId?: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://stemapaw.vercel.app';
  const trackUrl = `${baseUrl}/track?order=${order.id}`;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Pettoh™ Order Confirmation</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FDFBF8; color: #242B33; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid #F7DBA7; box-shadow: 0 4px 20px rgba(0, 52, 89, 0.08); }
    .header { background-color: #003459; padding: 32px 24px; text-align: center; }
    .logo { color: #ffffff; font-size: 28px; font-weight: 900; letter-spacing: -0.5px; margin: 0; }
    .logo span { color: #FFB703; }
    .tagline { color: #FCEED5; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 6px; }
    .content { padding: 32px 24px; }
    .order-badge { background: #FCEED5; color: #003459; display: inline-block; padding: 6px 14px; border-radius: 999px; font-size: 12px; font-weight: 800; text-transform: uppercase; margin-bottom: 12px; }
    h1 { color: #003459; font-size: 22px; font-weight: 800; margin: 0 0 12px 0; }
    p { font-size: 14px; line-height: 1.6; color: #667479; margin: 0 0 16px 0; }
    .card { background: #FDFBF8; border: 1px solid #F7DBA7; border-radius: 16px; padding: 20px; margin: 20px 0; }
    .card-title { font-size: 13px; font-weight: 800; text-transform: uppercase; color: #003459; letter-spacing: 1px; margin-bottom: 12px; }
    .summary-row { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 8px; color: #242B33; }
    .summary-row.bold { font-weight: 800; color: #003459; font-size: 16px; border-top: 1px dashed #F7DBA7; padding-top: 10px; margin-top: 10px; }
    .btn-container { text-align: center; margin: 32px 0; }
    .btn { background-color: #003459; color: #ffffff !important; text-decoration: none; padding: 16px 36px; border-radius: 999px; font-weight: 800; font-size: 15px; display: inline-block; box-shadow: 0 6px 16px rgba(0, 52, 89, 0.25); }
    .footer { background: #FCEED5; padding: 24px; text-align: center; font-size: 12px; color: #003459; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Pettoh<span>.</span></div>
      <div class="tagline">Ultrasonic Pet Care Europe</div>
    </div>
    
    <div class="content">
      <div class="order-badge">Confirmed Order • ${order.id}</div>
      <h1>Thank you for your order, ${order.customerName || 'Pet Parent'}! 🐾</h1>
      <p>
        Your order is now being processed by our European fulfillment center. 
        As soon as the priority carrier dispatches your parcel, tracking updates will be refreshed in real time.
      </p>

      <div class="card">
        <div class="card-title">Order Summary</div>
        <div class="summary-row">
          <span><strong>Bundle:</strong> ${order.bundleTitle}</span>
          <span>Qty: ${order.quantity}</span>
        </div>
        <div class="summary-row">
          <span><strong>Variant:</strong> ${order.variantName}</span>
          <span>Included</span>
        </div>
        ${
          orderBumpSelected
            ? `
        <div class="summary-row" style="color: #003459; font-weight: 700;">
          <span><strong>Order Bump:</strong> Extra Replacement Atomizer Cartridge</span>
          <span>Included</span>
        </div>
        `
            : ''
        }
        <div class="summary-row">
          <span><strong>Shipping:</strong> Free Priority Tracked EU Line</span>
          <span style="color: #22C55E; font-weight: 700;">FREE</span>
        </div>
        <div class="summary-row bold">
          <span>Total Paid</span>
          <span>€${order.totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Delivery Details</div>
        <p style="margin: 0; color: #242B33; font-weight: 600;">${order.customerName}</p>
        <p style="margin: 4px 0 0 0;">${order.address || 'Standard European Home Delivery'}</p>
        <p style="margin: 2px 0 0 0;">${order.postalCode ? `${order.postalCode} ` : ''}${order.city || ''} - ${order.country}</p>
        <p style="margin: 6px 0 0 0; font-size: 12px; color: #003459; font-weight: 700;">
          Tracking Ref: <span style="font-family: monospace;">${order.trackingNumber}</span>
        </p>
      </div>

      <div class="btn-container">
        <a href="${trackUrl}" class="btn">Track Your Shipment Now ➔</a>
      </div>

      <p style="font-size: 12px; text-align: center; color: #667479;">
        Have questions about your order? Simply reply to this email or visit our help center.
      </p>
    </div>

    <div class="footer">
      © 2026 Pettoh™ Europe • 30-Day Money-Back Guarantee • Happy Pets Guaranteed
    </div>
  </div>
</body>
</html>
  `;

  // Check if SMTP environment variables are configured
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM || 'orders@pettoh.com';

  if (!smtpHost || !smtpUser || !smtpPass) {
    // Graceful fallback: log clean transactional email in console
    console.log(`[Pettoh Email Service - Dev / Unconfigured Fallback]`);
    console.log(`--> Sending Order Confirmation to: ${customerEmail}`);
    console.log(`--> Order ID: ${order.id} | Amount: €${order.totalAmount.toFixed(2)}`);
    console.log(`--> Tracking URL: ${trackUrl}`);
    return { success: true, messageId: `mock-${order.id}` };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Pettoh™ Official Store" <${fromEmail}>`,
      to: customerEmail,
      subject: `Order Confirmed (${order.id}) • Pettoh™ Ultrasonic Steamy Brush`,
      html: htmlContent,
    });

    console.log(`[Pettoh Email Service] Email sent successfully to ${customerEmail}. Message ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('[Pettoh Email Service] Error sending email via SMTP:', error);
    // Keep order completion flow intact without throwing
    return { success: false };
  }
}
