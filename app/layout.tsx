import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Noto_Sans, Roboto_Slab } from "next/font/google";
import { cn } from "@/lib/utils";

const robotoSlabHeading = Roboto_Slab({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Raphaël Randrianantoanina",
  description:
    "Praxis portfolio showcasing projects and experience of Raphaël Randrianantoanina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", notoSans.variable, robotoSlabHeading.variable)}>
      <body className="antialiased" style={{ margin: 0, padding: 0 }}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
