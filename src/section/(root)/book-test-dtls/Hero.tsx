import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
    return (
        <section className='bg-white rounded-lg shadow-lg'>
            <h1 className='px-4 pt-4 md:px-6 md:pt-4 font-semibold text-xl md:text-2xl'>Full Body Checkup - Essential in Hyderabad</h1>
            <Badge className='bg-[#006D77] px-2 py-1 my-3 rounded-none'>Tests for 91 Parameters</Badge>
            <article className='px-4 pb-8 md:px-6 md:pb-10 text-sm text-[#636363]'>
                The Full Body Checkup- Essential includes doctor curated tests for the liver, kidneys, sugar, thyroid, cholesterol, blood, and urine, among others. This package helps detect potential health disorders and vitamin deficiencies. Screening for vitamin D and B12 deficiencies is vital for overall health. Deficiencies can cause weak bones, fatigue, numbness, mood swings, and impaired immunity. Regular checkups maintain optimal health, ensuring recommended levels of both vitamins.
            </article>
            <p className='w-full bg-[#F6F6F6] p-2 text-sm font-medium text-center text-[#2c2c2c]'>Available everyday from 6:30 AM to 10 PM</p>
        </section>
    )
}

export default HeroSection
