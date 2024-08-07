import Image from 'next/image'
import React from 'react'

const OurPriority = () => {
    return (
        <section className='px-4 md:px-10 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#EDF6F9]'>
            <aside className='my-auto space-y-3'>
                <h1 className='text-[#020D2B] text-xl font-medium'>Your Health, Our Priority</h1>
                <p className='text-sm text-gray-600'>It is the journey that takes you to new destinations every day with endless possibilities of life on the back of happiness, energy, and hope. Lab-D wants to make this journey easy for every Indian and help them live healthier and longer lives.</p>
            </aside>
            <Image src="/assets/about/our-priority.svg" alt='Our Priority' height={450} width={450} className='m-auto' />
        </section>
    )
}

export default OurPriority
