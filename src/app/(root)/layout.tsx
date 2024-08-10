import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../globals.css";

// const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer/index";
import BottomNavigation from "@/components/bottom-navigation/index";

export const metadata: Metadata = {
  title: "Lab-D",
  description: "Booking lab tests online at your dore eo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-black bg-white">
        <Navbar />
        <main className="py-24 overflow-x-hidden mb-32 md:mb-0">
          {children}
        </main>
        <BottomNavigation />
        <Footer />
      </body>
    </html>
  );
}
