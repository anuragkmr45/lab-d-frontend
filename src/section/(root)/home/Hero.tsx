import ShowCheckUpCard from '@/components/cards/ShowCheckupType';
import FullWidthCarousel from '@/components/carousel/fullwidth';

const HomeHero = () => {

    return (
        <section className='space-y-2 md:space-y-4 px-2 md:px-0'>
            <div className="px-0 md:px-10">
                <FullWidthCarousel />
            </div>
            <>
                <div className='hidden md:block md:px-10'>
                    <section className='grid grid-cols-3 gap-3'>
                        <ShowCheckUpCard bgcolor='bg-yellow-300' title='General Diagnostics' img='/assets/homepage/general-diagnostics.svg' navLink='/general-diagnostics' />
                        <ShowCheckUpCard bgcolor='bg-[#E29578]' title='Organs Related' img='/assets/homepage/organ-related.svg' navLink='/organ-related' />
                        <ShowCheckUpCard bgcolor='bg-[#FFDDD2]' title='Popular' img='/assets/homepage/popular.svg' navLink='/organ-related/full%20body%20checkup' />
                    </section>
                </div>
                <div className='block md:hidden space-y-1'>
                    <section className='grid grid-cols-2 gap-1'>
                        <ShowCheckUpCard bgcolor='bg-yellow-300' title='General Diagnostics' img='/assets/homepage/general-diagnostics.svg' navLink='/general-diagnostics' />
                        <ShowCheckUpCard bgcolor='bg-[#E29578]' title='Organs Related' img='/assets/homepage/organ-related.svg' navLink='/organ-related' />
                    </section>
                    <ShowCheckUpCard bgcolor='bg-[#FFDDD2]' title='Popular' img='/assets/homepage/popular.svg' navLink='/organ-related/full%20body%20checkup' />
                </div>
            </>
        </section>
    )
}

export default HomeHero
