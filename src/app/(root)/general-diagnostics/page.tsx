import Image from 'next/image';

import HeroSection from '@/section/(root)/general-diagnostics/Hero';
import FullBodyCheckUp from '@/section/(root)/general-diagnostics/FullBodyCheckup';
import MostBookedCheckup from '@/section/(root)/home/feature/MostBookedCheckup';
import PopularCheckupsByArea from '@/section/(root)/general-diagnostics/PopularCheckupsbyArea';

const GeneralDiagnostics = () => {

    type CuratedMedicalCheckupsType = {
        key: number,
        img: string,
        title: string
    }

    const CuratedMedicalCheckups: CuratedMedicalCheckupsType[] = [
        {
            key: 0,
            img: "/assets/general-diagnostics/dibaties-checkup.svg",
            title: 'Diabetes Checkup',
        },
        {
            key: 1,
            img: "/assets/general-diagnostics/senior-citigien.svg",
            title: 'Senior Citizen',
        },
        {
            key: 2,
            img: "/assets/general-diagnostics/feaver-checkup.svg",
            title: 'Feaver Checkup',
        },
        {
            key: 3,
            img: "/assets/general-diagnostics/full-body-checkups.svg",
            title: 'Full Body Checkups',
        },
        {
            key: 4,
            img: "/assets/general-diagnostics/lifestyle-checkup.svg",
            title: 'Lifestyle Checkup',
        },
        {
            key: 5,
            img: "/assets/general-diagnostics/cancer-cheeckup.svg",
            title: 'Cancer Checkup',
        },
    ];

    return (
        <main className='space-y-10'>
            <HeroSection />
            <FullBodyCheckUp />
            <MostBookedCheckup />

            <div className='w-8/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-2 m-auto'>
                    <h1 className='col-span-2 text-lg md:text-2xl lg:text-4xl font-bold w-full text-center md:text-left md:w-2/3 my-auto'>
                        Curated Medical Checkups For You
                    </h1>
                    <div className='col-span-3'>
                        <div className="grid mx-auto grid-cols-3 gap-4">
                            {
                                CuratedMedicalCheckups.map((data) => {
                                    return (
                                        <div key={data.key} className='flex flex-col justify-center items-center space-y-2'>
                                            <div className='bg-gradient-to-br from-[#FFFFFF] to-[#E29578] rounded-xl w-fit m-auto p-3'>
                                                <Image src={data.img} alt={data.title} height={40} width={40} />
                                            </div>
                                            <h1 className='text-center text-[#727272] text-xs'>{data.title}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <PopularCheckupsByArea />

        </main>
    )
}

export default GeneralDiagnostics;
