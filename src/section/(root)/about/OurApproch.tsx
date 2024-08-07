import Image from 'next/image';

const OurApproch = () => {

    type cardContentType = {
        key: number,
        img: string,
        title: string,
        desc: string
    }

    const cardContent: cardContentType[] = [
        {
            key: 0,
            img: "/assets/about/connect.svg",
            title: 'Connect',
            desc: 'We understand healthcare goes beyond signs, symptoms, diagnosis, and treatment. It’s about the deep connection between doctors and patients that leads to continuous care and sustained, better outcomes.',
        },
        {
            key: 1,
            img: "/assets/about/trust.svg",
            title: 'Trust',
            desc: 'Lab-D works on trust. We are aware of the responsibility placed on us by 30 crore+ patients and over a lakh doctors. We always have and always will do everything we possibly can to uphold this trust.',
        },
        {
            key: 2,
            img: "/assets/about/connect.svg",
            title: 'Connect',
            desc: 'We understand healthcare goes beyond signs, symptoms, diagnosis, and treatment. It’s about the deep connection between doctors and patients that leads to continuous care and sustained, better outcomes.',
        },
    ];

    return (
        <section className='px-2 md:px-10 lg:px-16 text-center'>
            <h1 className='font-semibold text-2xl'>Our Approach to healthcare</h1>
            <p className='text-sm text-gray-600 my-3'>Providing high-quality, trusted, and accessible healthcare is our reason for being</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {
                    cardContent.map((data: cardContentType) => {
                        return (
                            <div key={data.key} className="w-fit text-center space-y-4">
                                <Image src={data.img} alt='fdsaed' height={100} width={100} className='mx-auto' />
                                <>
                                    <h2 className='text-2xl font-bold'>{data.title}</h2>
                                    <p className='text-[#535353] text-xs w-9/12 mx-auto'>{data.desc}</p>
                                </>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default OurApproch
