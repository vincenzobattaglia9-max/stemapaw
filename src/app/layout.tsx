import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SteamPaws™ | Ultrasonic 3-in-1 Steamy Pet Brush (Official Europe Store)',
  description: 'Say goodbye to flying pet hair! SteamPaws™ combines gentle cold ultrasonic nano-mist and soft silicone grooming teeth to trap 99% of loose fur. 30-Day Money Back Guarantee & Free EU Tracked Delivery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
