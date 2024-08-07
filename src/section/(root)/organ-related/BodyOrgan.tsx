import Image from 'next/image';
import Link from 'next/link';

const BodyOrgans = () => {

    type organDataType = {
        key: number,
        img: string,
        title: string,
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
        <div className='px-4 md:px-10 lg:px-12 py-10 space-y-4 bg-gradient-to-r from-[#EDF6F9] via-[#FDFDFD] to-[#EDF6F9]'>
            <h1 className='text-[#3C3C3C] font-semibold text-xl'>For vital body organs</h1>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center">
                {
                    organData.map((data: organDataType) => {
                        return (
                            <Link href={data.link} key={data.key} className='flex flex-col justify-center items-center align-middle space-y-2 w-full'>
                                <Image src={data.img} alt='csd' height={80} width={80} />
                                <h2 className='text-[#707070] font-semibold text-sm flex flex-wrap text-center'>
                                    {data.title}
                                </h2>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BodyOrgans
