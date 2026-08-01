import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import clsx from 'clsx';
import { Raleway } from 'next/font/google';

import './globals.scss';

const raleway = Raleway({
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  description: 'https://github.com/dafengzhen/blog',
  icons: [
    {
      rel: 'icon',
      sizes: 'any',
      type: 'image/x-icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      type: 'image/png',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
  robots: {
    follow: true,
    index: true,
  },
  title: {
    default: 'cnff',
    template: `%s | cnff`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body className={clsx(raleway.className, raleway.variable)}>{children}</body>
    </html>
  );
}
