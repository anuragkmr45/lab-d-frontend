import Image from 'next/image';
import { Button } from '@/components/ui/button';

const VitalBodyOrgans = () => {
    return (
        <main className='w-8/12 mx-auto'>
            <div>
                <h2 className='text-xl text-center font-semibold block md:hidden'>For vital body organs</h2>
                <Button></Button>
            </div>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <aside className='hidden md:flex items-center justify-center'>
                    <div className='h-full flex flex-col justify-evenly'>
                        <h2 className='text-3xl font-semibold hidden md:block'>For vital body organs</h2>
                        <p className='text-sm'>
                            Explore our comprehensive range of diagnostic tests tailored for vital body organs. Our specialized diagnostic tests focus on evaluating the well-being of essential body organs, ensuring you receive the care you deserve.
                        </p>
                        <Button variant='outline' className='w-1/2 shadow-md'>Explore</Button>
                    </div>
                </aside>
                <aside className='flex justify-center items-center'>
                    <div className=''>
                        {/* <div className="">
                            <div className="grid grid-cols-3">
                                <h1 className='col-span-2'>Full Body Checkup</h1>
                                <h1>Full Body Checkup</h1>
                            </div>
                            <Image src='/assets/homepage/fullbody-checkup.svg' alt='lab-d' height={180} width={180} className='mx-auto h-full w-full shadow hover:shadow-2xl hover:scale-95 transition-all duration-300 ease-in-out rounded-xl' />
                        </div> */}
                        <Image src='/assets/homepage/sexual-health.svg' alt='lab-d' height={180} width={180} className='mx-auto h-full w-full shadow hover:shadow-2xl hover:scale-95 transition-all duration-300 ease-in-out rounded-xl' />
                    </div>
                    <div className=''>
                        <Image src='/assets/homepage/fullbody-checkup.svg' alt='lab-d' height={180} width={180} className='mx-auto h-full w-full shadow hover:shadow-2xl hover:scale-95 transition-all duration-300 ease-in-out rounded-xl' />
                        <Image src='/assets/homepage/women-health.svg' alt='lab-d' height={180} width={180} className='mx-auto h-full w-full shadow hover:shadow-2xl hover:scale-95 transition-all duration-300 ease-in-out rounded-xl' />
                    </div>
                </aside>
            </section>
        </main>
    )
}

export default VitalBodyOrgans
