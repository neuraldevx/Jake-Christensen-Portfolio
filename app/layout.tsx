"use client";
import 'app/styles/global.css';
import 'bulma/css/bulma.min.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import ScrollProgressBar from './components/scrollProgressBar';
import { useEffect, useState } from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  return (
    <html lang="en" className={cx('text-black bg-light-black dark:text-white dark:bg-gray-900', GeistSans.variable, GeistMono.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-fill">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
