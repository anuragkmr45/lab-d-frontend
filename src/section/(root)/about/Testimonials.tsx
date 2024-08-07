"use client"

import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import DoctTestimonialCard from "@/components/cards/testimonoal/DoctTestimonialCard";

const Testimonials = () => {

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const caerouselImg: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className='bg-[#EDF6F9] py-10'>
            <h1 className='text-[#006D77] text-xl font-semibold text-center'>What Doctors say about us</h1>
            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {
                        caerouselImg.map((data) => {
                            return (
                                <CarouselItem key={data} className='bg-transparent'>
                                    <DoctTestimonialCard />
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Testimonials
