import Image from 'next/image';

const MissionAndVission = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-16 py-10'>
            <aside className='space-y-3 my-auto'>
                <h1 className='text-[#020D2B] text-xl font-medium'>Our Mission & Vision</h1>
                <article className='text-[#020D2B] text-sm'>
                    At Lab-D, our mission is to revolutionize healthcare accessibility by providing convenient, accurate, and reliable at-home diagnostic services. We are dedicated to empowering individuals to take control of their health journey, ensuring timely interventions and promoting overall wellness.
                </article>
                <article className='text-[#020D2B] text-sm'>
                    Our vision at Lab-D is to redefine the healthcare experience by seamlessly integrating advanced technology with compassionate care. We envision a future where individuals have easy access to personalized diagnostics from the comfort of their homes, empowering them to make informed decisions about their health and well-being.
                </article>
            </aside>
            <Image src="/assets/about/our-mission.svg" alt='' height={300} className='m-auto hidden md:block' width={300} />
        </section>
    )
}

export default MissionAndVission
