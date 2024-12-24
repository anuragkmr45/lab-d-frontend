import CheckupTypeCard from '@/components/cards/checkup-type/LayredType';
import { getAllServices } from '@/services/service';
  
const RecommandedTests = async () => {

    const services = await getAllServices();

    type ServiceType = {
        serviceId: number;
        serviceName: string;
        serviceDesc: string;
        testParameters: string[];
        sampleType: string;
        tubeType: string;
        packageIncludes: string;
        discountedPrice: string;
        discountPercentage: string;
      };
      
    return (
        <div className='px-2 md:px-10 py-0 md:py-2 space-y-6 md:space-y-10'>
            <h1 className='text-2xl font-semibold'>Showing 10 tests/checkups</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    services.map((service: ServiceType) => (
                        <CheckupTypeCard key={service.serviceId} cardData={service} />
                    ))
                }
            </div>
        </div>
    )
}

export default RecommandedTests
