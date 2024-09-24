import type { Metadata } from "next";
import StoreProvider from '@/lib/redux/providers/StoreProvider';
import "./globals.css";

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
        <StoreProvider>
            {children}
        </StoreProvider>
    );
}
