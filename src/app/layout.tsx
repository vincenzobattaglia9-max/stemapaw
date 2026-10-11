import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pettoh™ | Ultrasonic 3-in-1 Steamy Pet Brush (Official Store)',
  description: 'Say goodbye to flying loose pet fur! Pettoh™ combines gentle cold ultrasonic nano-mist and 150° safety pins with 1-click hair ejection. 30-Day Money Back Guarantee & Free Tracked European Delivery.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
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
