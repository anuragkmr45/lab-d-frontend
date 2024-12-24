"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllServices } from "@/services/service";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CheckupTypeCard from "@/components/cards/checkup-type/LayredType";


const FullBodyCheckUps = () => {

    type cardDataType = {
        key: number;
        title: string;
        desc: string;
        parameters: string;
        sampleType: string;
        tubeType: string;
        packageIncludes: string;
        discountedPrice: string;
        discountPercentage: string;
    }

    const [services, setServices] = useState<cardDataType[]>([]);

    useEffect(() => { 
        const handleGetAllServices = async () => {
            try {
                const res = await getAllServices();
                setServices(res);
            } catch (error) {
                console.error('Error while fetching all services:', error);
            }
        };

        handleGetAllServices();
    }, [])

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
                            services.length !== 0 && services.map((data) => {
                                return (
                                    <CarouselItem key={data.key} className="md:basis-1/2 lg:basis-1/3">
                                        <CheckupTypeCard cardData={data} />
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
