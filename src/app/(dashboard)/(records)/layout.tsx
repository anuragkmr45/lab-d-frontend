// import { Inter } from "next/font/google";
import "../../globals.css";

import Navbar from "@/components/navbar/index";
import Footer from "@/components/footer/index";
import BottomNavigation from "@/components/bottom-navigation/index";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Lab-D",
    description: "Lab-D is a platform for booking lab tests online.",
};

export default function PatientRecordLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="text-black bg-white">
                {/* <body className={`${inter.className} text-black bg-white`}> */}
                <Navbar />
                <main className="pt-32 lg:py-16 overflow-x-hidden mb-32 md:mb-0">
                    {children}
                </main>
                <BottomNavigation />
                <Footer />
            </body>
        </html>
    );
}
