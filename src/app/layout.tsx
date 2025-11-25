import type { Metadata } from "next";
import "./globals.css";

// Font Awesome configuration
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  keywords: ['football club management', 'athlete onboarding', 'combine data', 'team management', 'Ontario football', 'Canadian youth football'],
  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon.ico in the public folder
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
