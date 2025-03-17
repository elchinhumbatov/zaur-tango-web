import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import "./globals.css";

const monoFont = Fragment_Mono({
  variable: "--font-family",
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Zaur Tango",
  description: "Zaur Tango | personal website | dance lessons | dance classes | dance clothes | dance shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
