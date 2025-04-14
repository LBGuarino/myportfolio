import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ModernAirportBanner from "@/components/Banner";

export const metadata: Metadata = {
  title: "My Portfolio",  
  description: "Welcome to my portfolio website, where I showcase my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <NavBar />
        <ModernAirportBanner />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
