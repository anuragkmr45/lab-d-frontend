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
      <section className="bg-gradient-to-r from-[#eaeeed] via-inherit to-[#eaeeed]">
        <Image src="/assets/organ-related/whatsapp-help.svg" alt="dwedfrw" height={200} width={200} className="m-auto w-full md:w-10/12 h-full" />
      </section>
    </main>
  );
}
