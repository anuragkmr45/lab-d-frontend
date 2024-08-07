import CheckupTypeCard from '@/components/cards/checkup-type/LayredType';

const RecommandedTests = () => {
    return (
        <div className='px-2 md:px-10 py-0 md:py-2 space-y-6 md:space-y-10'>
            <h1 className='text-2xl font-semibold'>Showing 10 tests/checkups</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <CheckupTypeCard
                    title='Full Body Checkup - Essential'
                    origialPricing='6063'
                    discountedPricing='1499'
                    discount='75'
                    parameters='91'
                />
                <CheckupTypeCard
                    title='Full Body Checkup - Essential'
                    origialPricing='6063'
                    discountedPricing='1499'
                    discount='75'
                    parameters='91'
                />
                <CheckupTypeCard
                    title='Full Body Checkup - Essential'
                    origialPricing='6063'
                    discountedPricing='1499'
                    discount='75'
                    parameters='91'
                />
                <CheckupTypeCard
                    title='Full Body Checkup - Essential'
                    origialPricing='6063'
                    discountedPricing='1499'
                    discount='75'
                    parameters='91'
                />
                <CheckupTypeCard
                    title='Full Body Checkup - Essential'
                    origialPricing='6063'
                    discountedPricing='1499'
                    discount='75'
                    parameters='91'
                />
                <CheckupTypeCard
                    title='Full Body Checkup - Essential'
                    origialPricing='6063'
                    discountedPricing='1499'
                    discount='75'
                    parameters='91'
                />
                <CheckupTypeCard
                    title='Full Body Checkup - Essential'
                    origialPricing='6063'
                    discountedPricing='1499'
                    discount='75'
                    parameters='91'
                />
            </div>
        </div>
    )
}

export default RecommandedTests
