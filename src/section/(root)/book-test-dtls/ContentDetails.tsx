import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"

import PricingSection from './Pricing';
import QuickLinks from './QuickLinks';

const ContentDetails = ({sampleType,tubeType, packageIncludes, testParameters,discountedPrice, discountPercentage, serviceId}: {sampleType: string,tubeType: string, packageIncludes: string, testParameters: string[], discountedPrice: string, discountPercentage: string, serviceId: number}) => {
    return (
        <div className='border-2 border-[#DFE3E6] rounded-lg p-2'>
            <div className='block lg:hidden'>
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="outline" className='bg-[#006D77] text-white text-lg font-medium w-full py-4'>Book Now</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <section>
                            <div className=' bg-[#EDF6F9] p-4 rounded-lg'>
                                <PricingSection discountedPrice={discountedPrice} discountPercentage={discountPercentage} serviceId={serviceId} />
                            </div>
                            <div className=' bg-[#EDF6F9] p-4 rounded-lg'>
                                <QuickLinks />
                            </div>
                        </section>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button variant="ghost" className='bg-red-500 text-white font-semibold shadow-md shadow-red-200 hover:bg-red-700 hover:text-white hover:shadow-lg hover:shadow-red-300 transition-all duration-200 ease-in-out'>Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className="grid grid-cols-0 md:grid-cols-2">
                <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucideBeaker text-[#40464D]"><path d="M4.5 3h15" /><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" /><path d="M6 14h12" /></svg>
                        <h2 className="font-semibold text-[#40464D] text-sm md:text-base">Sample Type : </h2>
                    </div>
                    <Badge className='bg-[#EEF4FF] px-2 py-1 my-2 rounded-md text-[#4F585E]'>{sampleType}</Badge>
                </div>
                <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils-crossed text-[#40464D]"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" /><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" /><path d="m2.1 21.8 6.4-6.3" /><path d="m19 5-7 7" /></svg>
                        <h2 className="font-semibold text-[#40464D] text-sm md:text-base">Fasting Required : </h2>
                    </div>
                    <Badge className='bg-[#EEF4FF] px-2 py-1 my-2 rounded-md text-[#4F585E]'>10-12 hours</Badge>
                </div>
            </div>
            <div className="flex justify-start items-center">
                <div className="flex justify-start items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-test-tube-diagonal text-[#40464D]"><path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" /><path d="m16 2 6 6" /><path d="M12 16H4" /></svg>
                    <h2 className="font-semibold text-[#40464D] text-sm md:text-base">Tube Type : </h2>
                </div>
                <Badge className='bg-[#EEF4FF] px-2 py-1 my-2 rounded-md text-[#4F585E]'>{tubeType}</Badge>
            </div>
            <div className="flex flex-col justify-start items-start">
                <div className="flex justify-start items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag text-[#4F585E]"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                    <h2 className="font-semibold text-[#40464D] text-sm md:text-base">Package Includes : {packageIncludes}</h2>
                </div>
                {/* <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 pl-2">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dot text-[#40464D]"><circle cx="12.1" cy="12.1" r="1" /></svg>
                        <p className="text-[#40464D] text-xs md:text-sm">Fasting Blood Sugar (FBS)</p>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dot text-[#40464D]"><circle cx="12.1" cy="12.1" r="1" /></svg>
                        <p className="text-[#40464D] text-xs md:text-sm">Fasting Blood Sugar (FBS)</p>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dot text-[#40464D]"><circle cx="12.1" cy="12.1" r="1" /></svg>
                        <p className="text-[#40464D] text-xs md:text-sm">Fasting Blood Sugar (FBS)</p>
                    </div>
                </div> */}
            </div>
            <div className="flex flex-col justify-start items-start">
                <div className="flex justify-start items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notepad-text text-[#40464D]"><path d="M8 2v4" /><path d="M12 2v4" /><path d="M16 2v4" /><rect width="16" height="18" x="4" y="4" rx="2" /><path d="M8 10h6" /><path d="M8 14h8" /><path d="M8 18h5" /></svg>
                    <h2 className="font-semibold text-[#40464D] text-sm md:text-base">Description : </h2>
                </div>
                <p className="text-[#40464D] p-2 text-xs md:text-sm">Fasting Blood Sugar Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos amet cupiditate nulla sed eos nisi itaque tempora natus necessitatibus labore harum minus corporis dolor tempore, reiciendis quas optio libero numquam!</p>
            </div>
        </div>
    )
}

export default ContentDetails
