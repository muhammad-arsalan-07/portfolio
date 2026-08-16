import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Arsalan - Personal Portfolio',
  description: 'Personal portfolio of Muhammad Arsalan - Web Developer & Frontend Specialist',
  keywords: ['Muhammad Arsalan', 'Portfolio', 'Web Developer', 'React Developer', 'Frontend Developer', 'Full Stack Developer'],
  authors: [{ name: 'Muhammad Arsalan' }],
  openGraph: {
    title: 'Muhammad Arsalan - Personal Portfolio',
    description: 'Personal portfolio of Muhammad Arsalan - Web Developer & Frontend Specialist',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </head>
      <body className={poppins.className}>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

