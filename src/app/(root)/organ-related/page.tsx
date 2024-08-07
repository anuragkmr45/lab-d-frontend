import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/section/(root)/organ-related/Hero";
import BodyOrgans from "@/section/(root)/organ-related/BodyOrgan";

const OrganRelated = () => {
    return (
        <main className='space-y-10'>
            <HeroSection />
            <BodyOrgans />
            <Link href='/organ-related/abcdefgh'>
                <Image src="/assets/organ-related/whatsapp-help.svg" width={120} height={120} alt="Organ Related" className="w-full md:w-10/12 mx-auto my-10" />
            </Link>
        </main>
    )
}

export default OrganRelated
