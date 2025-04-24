import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import { Providers } from "@/providers/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


// const monoFont = Fragment_Mono({
//   variable: "--font-family",
//   weight: ['400'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// })
const quicksand = Quicksand({
  variable: "--font-family",
  weight: ['500'],
  style: ['normal'],
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
        className={`${quicksand.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <div className="pt-[64px]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
