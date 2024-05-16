import 'bulma/css/bulma.min.css';
import 'app/styles/global.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import ScrollProgressBar from './components/ScrollProgressBar';

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx('text-black bg-white dark:text-white dark:bg-gray-900', GeistSans.variable, GeistMono.variable)}>
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
