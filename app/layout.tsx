import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
      <body className="antialiased" style={{ margin: 0, padding: 0 }}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
