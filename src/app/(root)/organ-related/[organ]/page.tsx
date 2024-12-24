import {getServiceById} from '@/services/service';
import Image from 'next/image';
import HeroSection from '@/section/(root)/organ-related/checkup/Hero';
import RecommandedTests from '@/section/(root)/organ-related/checkup/Recomandation';

const OrganDetails = async ({ params }: { params: any }) => {
        const organ = params.organ;
        const res = await getServiceById(organ);

    return (
        <div className='space-y-16'>
            <HeroSection serviceName={res.serviceName} serviceDesc={res.serviceDesc} />
            {/* OrganDetails: {res.serviceName} */}
            <RecommandedTests />
            <Image src="/assets/organ-related/whatsapp-help.svg" alt='fsed' height={100} width={100} className='w-full md:w-10/12 mx-auto' />
        </div>
    )
}

export default OrganDetails
