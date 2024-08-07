import Image from 'next/image';

const HeroSection = () => {

    type cardDataType = {
        key: number;
        img: string;
        title: string;
        description: string;
    }

    const cardData: cardDataType[] = [
        {
            key: 0,
            img: "/assets/contact/email.svg",
            title: 'Email',
            description: 'support@labd.org',
        },
        {
            key: 1,
            img: "/assets/contact/phone.svg",
            title: 'Phone Number',
            description: '+91 82333 81000',
        },
        {
            key: 2,
            img: "/assets/contact/location.svg",
            title: 'Location',
            description: '14225 Falcon Head Blvd, Building E, Suite 218',
        },
    ];

    return (
        <div className='bg-gradient-to-b from-white to-[#DFEBEF] px-10'>
            <div className='space-y-2 my-9'>
                <h1 className='text-[#006D77] text-3xl font-bold text-center'>Contact Us</h1>
                <p className='text-sm md:text-base text-gray-500 font-medium text-center'>Don not hesitate to share your suggestions or feedback with us, and we will respond within 24 hours.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    cardData.map((data) => {
                        return (
                            <div key={data.key} className='flex flex-col justify-center align-middle items-center w-10/12 mx-auto'>
                                <Image src={data.img} alt='fds' height={80} width={80} className='relative z-10' />
                                <div className='flex w-full flex-col justify-center align-middle items-center bg-white px-4 py-4 pt-12 relative bottom-10 z-0 rounded-xl shadow'>
                                    <p className='font-medium'>{data.title}</p>
                                    <p className='text-[#006D77] text-center text-sm'>{data.description}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default HeroSection
