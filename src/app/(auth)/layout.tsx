import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import '../globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Lab-D",
    description: "Lab-D is a platform for booking lab tests online.",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-black bg-white`}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
