// app/layout.tsx
import { jost } from '@/app/font';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your App',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}