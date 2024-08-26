import type { Metadata } from "next";
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
        {/* <BottomNavLargeScreen /> */}
        <BottomNavigation />
        <Footer />
      </body>
    </html>
  );
}


// const BottomNavLargeScreen = () => {
//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },

//     {
//       title: "Products",
//       icon: (
//         <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "Components",
//       icon: (
//         <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "Aceternity UI",
//       icon: (
//         <Image
//           src="https://assets.aceternity.com/logo-dark.png"
//           width={20}
//           height={20}
//           alt="Aceternity Logo"
//         />
//       ),
//       href: "#",
//     },
//     {
//       title: "Changelog",
//       icon: (
//         <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },

//     {
//       title: "Twitter",
//       icon: (
//         <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "GitHub",
//       icon: (
//         <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//   ];
//   return (
//     <div className="hidden md:block sticky bottom-0">
//       <div className="flex items-center justify-center h-[35rem] w-full">
//         <FloatingDock
//           mobileClassName="translate-y-20" // only for demo, remove for production
//           items={links}
//         />
//       </div>
//     </div>
//   )
// }
