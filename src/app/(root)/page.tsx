import HomeHero from "@/section/(root)/home/Hero";
import TopHealthCheckups from "@/section/(root)/home/TopHealthCheckup";
import FullBodyCheckUps from "@/section/(root)/home/FullBodyCheckups";
import FeatureSection from "@/section/(root)/home/feature";
import TopBookedSessions from "@/section/(root)/home/TopBookedSessions";

import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-10">
      <HomeHero />
      <TopHealthCheckups />
      <FullBodyCheckUps />
      <FeatureSection />
      <TopBookedSessions />
      <section className="bg-gradient-to-r from-[#eaeeed] via-inherit to-[#eaeeed] px-2">
        <Image src="/assets/organ-related/whatsapp-help.svg" alt="dwedfrw" height={200} width={200} className="m-auto w-full md:w-10/12 h-full" />
      </section>
    </main>
  );
}


// "use client";

// import React from "react";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
// import Image from "next/image";

// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-black">
//         {/* <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         /> */}
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem voluptates consequuntur iste provident incidunt dolorem eligendi necessitatibus tempore mollitia voluptatum quibusdam dicta, quidem eaque maxime, facilis nobis autem nam!
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-black">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
//         Running out of content
//       </div>
//     ),
//   },
// ];
// export default function StickyScrollRevealDemo() {
//   return (
//     <StickyScroll content={content} />
//   );
// }
