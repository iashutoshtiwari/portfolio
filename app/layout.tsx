import type React from 'react';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { JetBrains_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Ashutosh Tiwari',
  description:
    'Personal portfolio of Ashutosh Tiwari. Building fast, scalable, and intuitive web experiences.',
  keywords: ['Ashutosh Tiwari', 'Frontend Engineer', 'React Developer', 'Next.js'],
  authors: [{ name: 'Ashutosh Tiwari', url: 'https://ashutoshtiwari.dev' }],
  openGraph: {
    title: 'Ashutosh Tiwari',
    description: 'Building fast, scalable, and intuitive web experiences.',
    url: 'https://ashutoshtiwari.dev',
    siteName: 'Ashutosh Tiwari',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashutosh Tiwari',
    description: 'Building fast, scalable, and intuitive web experiences.',
    creator: '@dozed_dev',
  },
  metadataBase: new URL('https://ashutoshtiwari.dev'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-center" theme="system" />
        </ThemeProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
