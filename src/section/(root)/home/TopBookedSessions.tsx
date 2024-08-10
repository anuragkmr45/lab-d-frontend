"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CheckupTypeCard from '@/components/cards/checkup-type/LayredType';

const TopBookedSessions = () => {
    const [showAll, setShowAll] = useState(false);

    type BookedTestType = {
        key: number,
        title: string,
        origialPricing: string,
        discountedPricing: string,
        discount: string,
        parameters: string
    }

    const bookedTest: BookedTestType[] = [
        {
            key: 0,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
        {
            key: 1,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
        {
            key: 2,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
        {
            key: 3,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
        {
            key: 4,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
        {
            key: 5,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
        {
            key: 6,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
        {
            key: 7,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
        {
            key: 8,
            title: 'Complete Blood Count (CBC)',
            origialPricing: '799',
            discountedPricing: '1499',
            discount: '75',
            parameters: '11'
        },
    ]

    const handleToggleShowMore = () => { setShowAll(!showAll) }

    return (
        <>
            <section className='bg-gradient-to-r from-[#EDF6F9] via-[#FDFDFD] to-[#EDF6F9] py-12 px-3 md:px-16'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>Top Booked Tests (40)</h1>
                    <Button variant='outline' className='shadow-md text-[#106C89]' onClick={handleToggleShowMore}>
                        {showAll ? 'Show Less' : 'View All'}
                    </Button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {
                        bookedTest.slice(0, showAll ? bookedTest.length : 3).map((data) => {
                            return (
                                <CheckupTypeCard
                                    key={data.key}
                                    title={data.title}
                                    origialPricing={data.origialPricing}
                                    discountedPricing={data.discountedPricing}
                                    discount={data.discount}
                                    parameters={data.parameters} />
                            )
                        })
                    }
                </div>
            </section>
            <>
                <Image src="/assets/homepage/Book-lab-Test-mobile.svg" alt='dwedfrw' height={100} width={100} className='w-full block md:hidden px-1 md:px-16' />
                <Image src="/assets/homepage/book-lab-test-laptop.svg" alt='dwedfrw' height={100} width={100} className='w-full hidden md:block px-4 md:px-16' />
            </>
        </>
    )
}

export default TopBookedSessions
