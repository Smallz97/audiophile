import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/footer/Footer";
import NavbarWithHeader from "./components/navbar/NavbarWithHeader";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Next Generation Audio Devices",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <NavbarWithHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
