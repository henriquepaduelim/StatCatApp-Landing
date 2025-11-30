import type { Metadata, Viewport } from "next";
import { Sora, Space_Grotesk, Press_Start_2P } from 'next/font/google';
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics'; 
import ScrollToTop from '@/components/ScrollToTop';

// Font Awesome configuration
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: "StatCat | The All-In-One Football Club Management Platform",
  description: "Centralize combine data, athlete onboarding, team management, and reporting. Built for Canadian football clubs. Book your demo today!",
  openGraph: {
    title: "StatCat | The All-In-One Football Club Management Platform",
    description: "Centralize combine data, athlete onboarding, team management, and reporting. Built for Canadian football clubs.",
    url: 'https://statcat.example.com', // Replace with actual URL
    siteName: 'StatCat',
    images: [
      {
        url: 'https://statcat.example.com/og-image.png', // Replace with actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "StatCat | The All-In-One Football Club Management Platform",
    description: "Centralize combine data, athlete onboarding, team management, and reporting. Built for Canadian football clubs.",
    images: ['https://statcat.example.com/og-image.png'], // Replace with actual Twitter image URL
  },
  keywords: ['football club management', 'athlete onboarding', 'combine data', 'team management', 'Ontario football', 'Canadian youth football'],
  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon.ico in the public folder
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceGrotesk.variable} ${pressStart2P.variable}`}>
      <body>
        {children}
        <GoogleAnalytics /> {/* New component */}
        <ScrollToTop /> {/* New component */}
      </body>
    </html>
  );
}
