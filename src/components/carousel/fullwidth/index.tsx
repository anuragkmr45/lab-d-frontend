"use client"

import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

const FullWidthCarousel = () => {

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    type CarouselImgType = {
        key: number;
        img: string;
        imgsm: string;
    }

    const caerouselImg: CarouselImgType[] = [
        {
            key: 0,
            img: '/assets/homepage/banner/banner-1.svg',
            imgsm: '/assets/homepage/banner/banner-1sm.svg',
        },
        {
            key: 1,
            img: '/assets/homepage/banner/banner-2.svg',
            imgsm: '/assets/homepage/banner/banner-1sm.svg',
        },
        {
            key: 2,
            img: '/assets/homepage/banner/banner-3.svg',
            imgsm: '/assets/homepage/banner/banner-1sm.svg',
        },
    ];

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {
                    caerouselImg.map((data: CarouselImgType) => {
                        return (
                            <CarouselItem key={data.key}>
                                <Image src={data.img} alt='vbujfsed' height={10} width={100} className="w-screen h-fit hidden md:block" />
                                <Image src={data.imgsm} alt='vbujfsed' height={10} width={100} className="w-screen h-fit block md:hidden" />
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>

    )
}

export default FullWidthCarousel
