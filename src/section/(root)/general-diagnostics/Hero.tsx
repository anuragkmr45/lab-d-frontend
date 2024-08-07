import Image from 'next/image';

const HeroSection = () => {

    type cardDataType = {
        key: number,
        img: string,
        title: string,
        subtitle: string
    }

    const cardData: cardDataType[] = [
        {
            key: 0,
            img: "/assets/general-diagnostics/certified.svg",
            title: "Certified Labs",
            subtitle: '6 hours'
        },
        {
            key: 1,
            img: "/assets/general-diagnostics/certified.svg",
            title: "Certified Labs",
            subtitle: '6 hours'
        },
        {
            key: 2,
            img: "/assets/general-diagnostics/certified.svg",
            title: "Certified Labs",
            subtitle: '6 hours'
        },
    ]

    return (
        <section className='px-2 md:px-10 pt-0 md:pt-2'>
            <div className='bg-gradient-to-br from-[#F0F0F0] to-[#F1F1F1] md:to-[#FFFFFF] min-h-fit rounded-3xl  p-4 md:px-8 md:py-4'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    <div className='col-span-3 m-auto'>
                        <h1 className='text-3xl md:text-2xl font-semibold'>General Diagnostics in Hyderabad at home</h1>
                        <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-32 right-[15%] md:right-[45%] opacity-55 z-0'>
                            <g filter="url(#filter0_f_140_2981)">
                                <circle cx="100" cy="100" r="75" fill="url(#paint0_linear_140_2981)" fill-opacity="0.8" />
                            </g>
                            <defs>
                                <filter id="filter0_f_140_2981" x="0" y="0" width="200" height="200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_140_2981" />
                                </filter>
                                <linearGradient id="paint0_linear_140_2981" x1="42.25" y1="175" x2="146.5" y2="38.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#016D77" />
                                    <stop offset="1" stop-color="#EAF4F5" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className='z-10 relative'>
                            Home diagnosis involves utilizing various tools and techniques to assess symptoms and health conditions within the comfort of one is residence. With advancements in telemedicine and portable medical devices, individuals can now perform preliminary assessments such as temperature checks, blood pressure monitoring, and even self-administered tests for certain ailments.
                        </p>
                        <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-56 opacity-30 md:opacity-90 z-0'>
                            <g filter="url(#filter0_f_140_2981)">
                                <circle cx="100" cy="100" r="75" fill="url(#paint0_linear_140_2981)" fill-opacity="0.8" />
                            </g>
                            <defs>
                                <filter id="filter0_f_140_2981" x="0" y="0" width="200" height="200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_140_2981" />
                                </filter>
                                <linearGradient id="paint0_linear_140_2981" x1="42.25" y1="175" x2="146.5" y2="38.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#016D77" />
                                    <stop offset="1" stop-color="#EAF4F5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <Image src="/assets/general-diagnostics/general-diagnostics-hero.svg" alt='csd' height={380} width={380} className='m-auto col-span-2' />
                </div>

            </div>
            <div className='grid grid-cols-3 gap-4 w-full md:w-10/12 lg:w-8/12 mx-auto'>

                {
                    cardData.map((data) => {
                        return (
                            <div key={data.key} className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                                <div className='col-span-1'>
                                    <Image src={data.img} alt='nfsjruds' height={70} width={80} className='m-auto' />
                                </div>
                                <div className='col-span-2 my-auto mx-auto md:mx-0'>
                                    <p className='text-[#3C3C3C] text-sm'>{data.title}</p>
                                    <p className='font-semibold text-lg'>{data.subtitle}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HeroSection
