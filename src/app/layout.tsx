import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/app/utilities/ui/components/footer/Footer";
import { CartContextProvider } from "@/app/utilities/contexts/CartContext";
import CartModal from "@/app/utilities/ui/components/cart-modal/CartModal";
import { BreakpointProvider } from "@/app/utilities/contexts/BreakpointContext";
import NavbarWithHeader from "@/app/utilities/ui/components/navbar/NavbarWithHeader";

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
        <BreakpointProvider>
          <CartContextProvider>
            <NavbarWithHeader />
            <CartModal />
            <main>{children}</main>
          </CartContextProvider>
        </BreakpointProvider>
        <Footer />
      </body>
    </html >
  );
}
