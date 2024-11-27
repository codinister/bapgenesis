import type { Metadata } from 'next';

import './globals.css';
import QueryProvider from '@/components/QueryProvider';

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
      <body>
        <QueryProvider>
          {children}
          </QueryProvider>
      </body>
    </html>
  );
}
