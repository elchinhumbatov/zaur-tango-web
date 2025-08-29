import "./globals.css";
import type { Metadata } from "next";

import { Providers } from "@/providers/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const quicksand = Quicksand({
//   variable: "--font-family",
//   weight: ['500'],
//   style: ['normal'],
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: "Zaur Tango",
  description: "Zaur Tango - Dance lessons, dance classes, dance clothes, personal website",
  keywords: [
    "Zaur Tango",
    "dance lessons",
    "personal website",
    "dance classes",
    "dance clothes",
    "tango",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Navbar />
          <div className="pt-[70px] min-h-[80vh]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
