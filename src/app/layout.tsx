import type { Metadata } from "next"
import "./globals.css";
import { nunito, nunito_sans, open_sans } from '@/lib/fonts';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Giora",
  description: "Luxury Fashion E-Shop",
  icons:{
    icon: '/assets/images/Giora.png' 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunito_sans.variable} ${open_sans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
