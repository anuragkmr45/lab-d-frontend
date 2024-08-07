'use client'

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LabTestBookingSteps from './LabTestBookingSteps';
import CheckupCard from '@/components/cards/CheckupListCard';

const TopHealthCheckups = () => {

    const [showMore, setShowMore] = useState<boolean>(false);

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    }

    type cardDataType = {
        key: number;
        text: string;
        img: string;
        link: string;
    }

    const cardData: cardDataType[] = [
        {
            key: 0,
            text: "Full Body Checkup",
            img: "/assets/homepage/top-health-chechkup/full-body-checkup.svg",
            link: "/organ-related/Full%20Body%20Checkup",
        },
        {
            key: 1,
            text: "Diabetes",
            img: "/assets/homepage/top-health-chechkup/dibatise.svg",
            link: "/organ-related/diabetes",
        },
        {
            key: 2,
            text: "Women's Health",
            img: "/assets/homepage/top-health-chechkup/women-health.svg",
            link: "/organ-related/womens%20health",
        },
        {
            key: 3,
            text: "Thyroid",
            img: "/assets/homepage/top-health-chechkup/thyroid.svg",
            link: "/organ-related/thyroid",
        },
        {
            key: 4,
            text: "Tax Saver",
            img: "/assets/homepage/top-health-chechkup/tax-saver.svg",
            link: "/organ-related/tax%20server",
        },
        {
            key: 5,
            text: "Fever",
            img: "/assets/homepage/top-health-chechkup/fever.svg",
            link: "/organ-related/fever",
        },
        {
            key: 6,
            text: "Vitamin",
            img: "/assets/homepage/top-health-chechkup/vitamin.svg",
            link: "/organ-related/vitamin",
        },
        {
            key: 7,
            text: "Blood Studies (Anemia)",
            img: "/assets/homepage/top-health-chechkup/blood-studies.svg",
            link: "/organ-related/blood%20studies",
        },
        {
            key: 8,
            text: "Liver",
            img: "/assets/homepage/top-health-chechkup/liveer.svg",
            link: "/organ-related/liver",
        },
        {
            key: 9,
            text: "Hairfall",
            img: "/assets/homepage/top-health-chechkup/hairfall.svg",
            link: "/organ-related/hairfall",
        },
        {
            key: 10,
            text: "Kidney",
            img: "/assets/homepage/top-health-chechkup/kidney.svg",
            link: "/organ-related/kidney",
        },
        {
            key: 11,
            text: "Hormone",
            img: "/assets/homepage/top-health-chechkup/harmons.svg",
            link: "/organ-related/hormone",
        },
    ];

    return (
        <div className='space-y-6'>
            <section className='bg-gradient-to-r from-[#EDF6F9] via-[#FDFDFD] to-[#EDF6F9] p-2 md:p-10 py-14 space-y-6'>
                <aside className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>Top Health Checkups (31)</h1>
                    {/* <Button variant='secondary '>
                        <span className='text-[#106C89]'>View All</span>
                    </Button> */}
                </aside>
                <div className='hidden md:block'>
                    <aside className='md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-4'>
                        {
                            cardData?.map((data) => {
                                return (
                                    <CheckupCard
                                        key={data.key}
                                        text={data.text}
                                        img={data.img}
                                        navLink={data.link}
                                    />
                                )
                            })
                        }
                    </aside>
                </div>
                <div className='block md:hidden'>
                    <aside className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                        {
                            cardData?.slice(0, 6).map((data) => {
                                return (
                                    <CheckupCard
                                        key={data.key}
                                        text={data.text}
                                        img={data.img}
                                        navLink={data.link}
                                    />
                                )
                            })
                        }
                        {
                            showMore && (
                                cardData?.slice(0, 6).map((data) => {
                                    return (
                                        <CheckupCard
                                            key={data.key}
                                            text={data.text}
                                            img={data.img}
                                            navLink={data.link}
                                        />
                                    )
                                })
                            )
                        }
                    </aside>
                    <div className="w-full flex justify-center items-center my-6">
                        <Button
                            variant="ghost"
                            className='w-2/4 text-[#EB752E] font-medium space-x-4'
                            onClick={handleToggleShowMore}
                        >
                            {
                                showMore ? (
                                    <>
                                        View Less
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg>
                                    </>
                                ) : (
                                    <>
                                        View More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                    </>
                                )
                            }
                        </Button>
                    </div>
                </div>
            </section>
            <section className='overflow-hidden w-11/12 mx-auto hidden md:block'>
                <LabTestBookingSteps />
            </section>
            <section className='overflow-hidden w-11/12 mx-auto block md:hidden'>
                <Image src="/assets/homepage/diag-how-to-book-1-mobile.svg" alt='dwedfrw' height={100} width={100} className='w-full' />
            </section>
        </div>
    )
}

export default TopHealthCheckups
