"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CheckupTypeCard from "@/components/cards/checkup-type/LayredType";

import Image from "next/image";
import Link from "next/link";

const FullBodyCheckUps = () => {

    type CarouselContent = {
        key: number;
        title: string;
        origialPricing: string;
        discountedPricing: string;
        discount: string;
        parameters: string;
    }

    const carouselContnent: CarouselContent[] = [
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
        <>
            <section className='bg-gradient-to-r from-[#EDF6F9] via-[#FDFDFD] to-[#EDF6F9] p-4 py-10 md:p-10 lg:p-14'>
                <h1 className='font-semibold text-lg'>4 Full body checkups in Hyderabad</h1>
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
                            carouselContnent.map((data) => {
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
                    {/* <CarouselPrevious className='shadow-xl hidden md:block m-auto' />
                    <CarouselNext className='shadow-xl hidden md:block m-auto' /> */}
                </Carousel>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-11/12'>
                <Image src="/assets/homepage/visit-a-lab-near-you.svg" alt="fsjdn" height={30} width={430} className="w-full m-auto " />
                <Link href="/book-test-deatils">
                    <Image src="/assets/homepage/health-test-at-your-home.svg" alt="fsjdn" height={30} width={430} className="m-auto w-full" />
                </Link>
            </section>
        </>
    )
}

export default FullBodyCheckUps
