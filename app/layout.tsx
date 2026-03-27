import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoltWallet - Secure Digital Wallet",
  description: "Modern fintech wallet for managing your digital assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
