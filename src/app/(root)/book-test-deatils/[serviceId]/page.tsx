import { getServiceById } from '@/services/service';

import Hero from '@/section/(root)/book-test-dtls/Hero';
import ContentDetails from '@/section/(root)/book-test-dtls/ContentDetails';
import SimilarPackage from '@/section/(root)/book-test-dtls/SimilarPackages';
import OverView from '@/section/(root)/book-test-dtls/OverView';
import Testimonial from '@/section/(root)/book-test-dtls/Testimonial';
import PricingSection from '@/section/(root)/book-test-dtls/Pricing';
import QuickLinks from '@/section/(root)/book-test-dtls/QuickLinks';

const BookTestDetails = async ({ params }: { params: any }) => {

    const serviceId = params.serviceId;
    const res = await getServiceById(serviceId);
    
    return (
        <main className="flex relative w-full h-full">
            <aside className="w-full space-y-8 lg:w-2/3 px-4 md:px-8">
                <Hero serviceName={res?.serviceName} serviceDesc={res.serviceDesc} />
                <ContentDetails sampleType={res?.sampleType} tubeType={res?.tubeType} packageIncludes={res?.packageIncludes} testParameters={res?.testParameters} discountedPrice={res?.discountedPrice} discountPercentage={res?.discountPercentage} serviceId={res?.serviceId} />
                <SimilarPackage />
                <OverView />
                <Testimonial />
            </aside>
            <aside className="hidden lg:block md:w-1/3 fixed right-0 top-14 p-4 h-full z-10 space-y-4">
                <div className=' bg-[#EDF6F9] p-4 rounded-lg'>
                    <PricingSection discountedPrice={res?.discountedPrice} discountPercentage={res?.discountPercentage} serviceId={res?.serviceId} />
                </div>
                <div className=' bg-[#EDF6F9] p-4 rounded-lg'>
                    <QuickLinks />
                </div>
            </aside>
        </main>
    );
};

export default BookTestDetails;
