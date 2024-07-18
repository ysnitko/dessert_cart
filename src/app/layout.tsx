import type { Metadata } from 'next';
import local from 'next/font/local';

import './globals.css';

const redhat = local({
  src: [
    {
      path: '../../public/assets/fonts/RedHatText-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/assets/fonts/RedHatText-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/RedHatText-Semibold.ttf',
      weight: '600',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Desserts cart',
  description: 'Desserts cart',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${redhat.className} bg-rose-50 flex justify-center `}>
        {children}
      </body>
    </html>
  );
}
