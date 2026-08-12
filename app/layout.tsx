import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Arsalan - Personal Portfolio',
  description: 'Personal portfolio of Muhammad Arsalan - Web Developer & Frontend Specialist',
  keywords: ['Muhammad Arsalan', 'Portfolio', 'Web Developer', 'React Developer', 'Frontend Developer'],
  authors: [{ name: 'Muhammad Arsalan' }],
  openGraph: {
    title: 'Muhammad Arsalan - Personal Portfolio',
    description: 'Personal portfolio of Muhammad Arsalan - Web Developer & Frontend Specialist',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
