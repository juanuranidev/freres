import type { Metadata } from 'next';
import './globals.css';
import { AnnouncementBar } from '@/components/shared/announcement-bar/announcement-bar';
import { montserrat } from '@/lib/shared/fonts';
import { Navbar } from '@/app/components/navbar/navbar';
import Footer from '@/components/shared/footer/footer';
import { Providers } from '@/contexts/providers';

export const metadata: Metadata = {
  title: 'Freres',
  description: 'Tu marca de ropa.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <AnnouncementBar />
        <Providers>
          <Navbar />
          <div>{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
