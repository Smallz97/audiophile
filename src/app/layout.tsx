import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/app/utilities/ui/components/footer/Footer";
import { CartModalProvider } from "@/app/utilities/contexts/ModalContexts";
import NavbarWithHeader from "@/app/utilities/ui/components/navbar/NavbarWithHeader";
import CartModal from "@/app/utilities/ui/components/cart-modal/CartModal";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Next Generation Audio Devices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <CartModalProvider>
          <NavbarWithHeader />
          <CartModal />
        </CartModalProvider>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
