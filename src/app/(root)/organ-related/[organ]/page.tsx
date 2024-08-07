import Image from 'next/image';
import HeroSection from '@/section/(root)/organ-related/checkup/Hero';
import RecommandedTests from '@/section/(root)/organ-related/checkup/Recomandation';

const OrganDetails = ({ params }: { params: any }) => {

    const organ = decodeURIComponent(params.organ).toUpperCase();


    return (
        <div className='space-y-16'>
            <HeroSection organ={organ} />
            {/* OrganDetails: {params.organ} */}
            <RecommandedTests />
            <Image src="/assets/organ-related/whatsapp-help.svg" alt='fsed' height={100} width={100} className='w-full md:w-10/12 mx-auto' />
        </div>
    )
}

export default OrganDetails
