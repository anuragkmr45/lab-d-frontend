import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const MostBookedCheckup = () => {

    type organDataType = {
        key: number;
        img: string;
        title: string;
        link: string
    }

    const organData: organDataType[] = [
        {
            key: 0,
            img: "/assets/organ-related/organ/heart.svg",
            title: 'HEART',
            link: '/organ-related/heart',
        },
        {
            key: 1,
            img: "/assets/organ-related/organ/kidney.svg",
            title: 'KIDNEY',
            link: '/organ-related/kidney',
        },
        {
            key: 2,
            img: "/assets/organ-related/organ/vitamin.svg",
            title: 'VITAMIN',
            link: '/organ-related/vitamin',
        },
        {
            key: 3,
            img: "/assets/organ-related/organ/liver.svg",
            title: 'LIVER',
            link: '/organ-related/live',
        },

        {
            key: 4,
            img: "/assets/organ-related/organ/gut-health.svg",
            title: 'GUT HEALTH',
            link: '/organ-related/get%20health',
        },
        {
            key: 5,
            img: "/assets/organ-related/organ/bone.svg",
            title: 'Bone',
            link: '/organ-related/bone',
        },
        {
            key: 6,
            img: "/assets/organ-related/organ/hormones.svg",
            title: 'Hormones',
            link: '/organ-related/hormones',
        },
        {
            key: 7,
            img: "/assets/organ-related/organ/blood.svg",
            title: 'Blood',
            link: '/organ-related/blood',
        },
        {
            key: 8,
            img: "/assets/organ-related/organ/reproductive-organs.svg",
            title: 'Reproductive Organs',
            link: '/organ-related/reproductive%20organs',
        },
    ];

    return (
        <main className='bg-gradient-to-r from-[#EDF6F9] via-[#FDFDFD] to-[#EDF6F9] py-12'>
            <div className='w-full md:w-8/12 mx-auto'>
                <h2 className='text-2xl text-center my-4 font-semibold block md:hidden'>For Vital Body Organs</h2>
                <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <aside className='hidden md:flex items-center justify-center'>
                        <div className='h-full flex flex-col justify-evenly'>
                            <h2 className='text-3xl font-semibold hidden md:block'>For vital body organs</h2>
                            <p className='text-sm'>
                                Explore our comprehensive range of diagnostic tests tailored for vital body organs. Our specialized diagnostic tests focus on evaluating the well-being of essential body organs, ensuring you receive the care you deserve.
                            </p>
                            <Link href='/organ-related'>
                                <Button variant='outline' className='w-1/2 shadow-md hover:shadow-lg'>
                                    Explore
                                </Button>
                            </Link>
                        </div>
                    </aside>
                    <aside className='w-full'>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                organData.map((data) => {
                                    return (
                                        <Link href={data.link} key={data.key} className='flex flex-col justify-center items-center align-middle space-y-2 w-full hover:scale-110 transition-all duration-200 ease-in-out'>
                                            <Image src={data.img} alt='lab-d' height={65} width={65} className='shadow-sm' />
                                            <h2 className='text-[#707070] font-bold text-sm flex text-wrap text-center'>
                                                {data.title}
                                            </h2>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    )
}

export default MostBookedCheckup
