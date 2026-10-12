import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pettoh™ | Ultrasonic 3-in-1 Steamy Pet Brush — 50% Off (Official EU Store)',
  description: 'Say goodbye to flying loose pet fur! Pettoh™ combines gentle cold ultrasonic nano-mist and 150° safety pins with 1-click hair ejection. 30-Day Money Back Guarantee & Free Tracked European Delivery.',
  metadataBase: new URL('https://stemapaw.vercel.app'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Pettoh™ Pro • Ultrasonic Steamy Pet Brush — 50% OFF Today!',
    description: '🐾 Traps 99% of flying fur. 1-click self-cleaning. Free tracked EU delivery in 6-9 days. Spring Sale: 50% OFF — limited stock!',
    url: 'https://stemapaw.vercel.app',
    siteName: 'Pettoh™ Official Store',
    images: [
      {
        url: '/images/facebook_cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Pettoh™ Pro Ultrasonic Steamy Pet Brush — Official EU Store',
      },
    ],
    locale: 'en_EU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pettoh™ Pro • 50% OFF Today — Ultrasonic Pet Brush',
    description: '🐾 Traps 99% of flying fur. 1-click self-cleaning. Free tracked EU delivery!',
    images: ['/images/facebook_cover.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
