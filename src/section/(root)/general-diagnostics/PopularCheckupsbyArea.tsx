import CheckupTypeCard from '@/components/cards/checkup-type/LayredType';

const PopularCheckupsByArea = () => {

    type bookedTestType = {
        key: number;
        title: string;
        origialPricing: string;
        discountedPricing: string;
        discount: string;
        parameters: string;
    }

    const bookedTest: bookedTestType[] = [
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
    ]
    return (
        <div className='px-2 md:px-10 pt-2 md:pt-4'>
            <h1 className='text-lg font-semibold mt-8 mb-4'>Popular Checkups Booked in Bangalore</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    bookedTest.map((data) => {
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
        </div>
    )
}

export default PopularCheckupsByArea
