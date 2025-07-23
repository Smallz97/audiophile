import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/app/utilities/ui/components/footer/Footer";
import CartModal from "@/app/utilities/ui/components/cart-modal/CartModal";
import { CartContextProvider } from "@/app/utilities/contexts/CartContext";
import { BreakpointProvider } from "@/app/utilities/contexts/BreakpointContext";
import NavbarWithHeader from "@/app/utilities/ui/components/navbar/NavbarWithHeader";
import { CustomModalContextProvider } from "@/app/utilities/contexts/CustomModalContext";
import CustomAlertDialog from "@/app/utilities/ui/components/utility-components/CustomAlertDialog";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://audiophile-v1.vercel.app'),
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
      <body className={`${manrope.variable} antialiased overscroll-none`}>
        <CustomModalContextProvider>
          <BreakpointProvider>
            <CartContextProvider>
              <NavbarWithHeader />
              <CartModal />
              <CustomAlertDialog />
              <main>{children}</main>
            </CartContextProvider>
          </BreakpointProvider>
          <Footer />
        </CustomModalContextProvider>
      </body>
    </html >
  );
}
