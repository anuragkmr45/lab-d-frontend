import Image from 'next/image';

const HeroSection = () => {
    return (
        <>
            <h1 className='text-black font-semibold text-xl text-center'>About Lab-D</h1>
            <Image src="/assets/about/gradiant-text.svg" alt='vbujfsed' height={10} width={10} className="w-10/12 md:w-8/12 my-6 md:my-10 mx-auto h-full" />
            <div className="px-4 md:px-10 lg:px-16">
                <h2 className='text-black font-semibold text-lg'>About Us</h2>
                <article className='text-gray-600 text-sm'>
                    Lab-D is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.
                </article>
            </div>
        </>
    )
}

export default HeroSection
