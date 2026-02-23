import type { Metadata } from "next";
import { Geist, Geist_Mono, Cedarville_Cursive } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cedarvilleCursive = Cedarville_Cursive({
  variable: "--font-cedarville",
  weight: "400",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cedarvilleCursive.variable} antialiased`}
        style={{ margin: 0, padding: 0 }}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
