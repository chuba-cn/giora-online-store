import type { Metadata } from "next";
import "./globals.css";
import { nunito, nunito_sans, open_sans } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/components/providers/Providers";
import { CartProvider } from "@/components/providers/CartProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Giora Online Store",
  description: "Luxury Fashion E-Shop",
  icons: {
    icon: "/assets/images/Giora.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${nunito.variable} ${nunito_sans.variable} ${open_sans.variable}`}
        >
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </CartProvider>
        </body>
      </Provider>
    </html>
  );
}
