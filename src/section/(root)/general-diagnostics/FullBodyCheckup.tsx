"use client"

import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import CheckupTypeCard from '@/components/cards/checkup-type/LayredType';

const FullBodyCheckUp = () => {

    type carouselContnentType = {
        key: number;
        title: string;
        origialPricing: string;
        discountedPricing: string;
        discount: string;
        parameters: string;
    }

    const carouselContnent: carouselContnentType[] = [
        {
            key: 0,
            title: 'Full Body Checkup - Essential',
            origialPricing: '6063',
            discountedPricing: '1499',
            discount: '75',
            parameters: '91'
        },
        {
            key: 1,
            title: 'Full Body Checkup - Essential',
            origialPricing: '6063',
            discountedPricing: '1499',
            discount: '75',
            parameters: '91'
        },
        {
            key: 2,
            title: 'Full Body Checkup - Essential',
            origialPricing: '6063',
            discountedPricing: '1499',
            discount: '75',
            parameters: '91'
        },
        {
            key: 3,
            title: 'Full Body Checkup - Essential',
            origialPricing: '6063',
            discountedPricing: '1499',
            discount: '75',
            parameters: '91'
        },
        {
            key: 4,
            title: 'Full Body Checkup - Essential',
            origialPricing: '6063',
            discountedPricing: '1499',
            discount: '75',
            parameters: '91'
        },
        {
            key: 5,
            title: 'Full Body Checkup - Essential',
            origialPricing: '6063',
            discountedPricing: '1499',
            discount: '75',
            parameters: '91'
        },
        {
            key: 6,
            title: 'Full Body Checkup - Essential',
            origialPricing: '6063',
            discountedPricing: '1499',
            discount: '75',
            parameters: '91'
        },
        {
            key: 7,
            title: 'Full Body Checkup - Essential',
            origialPricing: '6063',
            discountedPricing: '1499',
            discount: '75',
            parameters: '91'
        },
    ];

    return (
        <div className='bg-gradient-to-r from-[#EDF6F9] via-[#FDFDFD] to-[#EDF6F9]'>
            <div className='px-4 md:px-10 lg:px-16 py-2 md:py-4 '>
                <h1 className='text-[#3C3C3C] text-xl font-semibold'>4 Full body checkups in Hyderabad</h1>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        })
                    ]}
                    className="w-full mx-auto"
                >
                    <CarouselContent>
                        {
                            carouselContnent.map((data: carouselContnentType) => {
                                return (
                                    <CarouselItem key={data.key} className="md:basis-1/2 lg:basis-1/3">
                                        <CheckupTypeCard
                                            title={data.title}
                                            origialPricing={data.origialPricing}
                                            discountedPricing={data.discountedPricing}
                                            discount={data.discount}
                                            parameters={data.parameters}
                                        />
                                    </CarouselItem>
                                )
                            })
                        }
                    </CarouselContent>
                    <CarouselPrevious className='shadow-xl hidden md:block m-auto' />
                    <CarouselNext className='shadow-xl hidden md:block m-auto' />
                </Carousel>
            </div>
        </div>
    )
}

export default FullBodyCheckUp
