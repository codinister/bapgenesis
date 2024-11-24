import type { Metadata } from 'next';

import './globals.scss';

export const metadata: Metadata = {
  title: 'BAP GENESIS ROOFING SYSTEM',
  description: 'BAP GENESIS ROOFING SYSTEM',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
