import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Navbar } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Simple Online Store',
  description: 'A simple online store built with Next.js and Prisma',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
