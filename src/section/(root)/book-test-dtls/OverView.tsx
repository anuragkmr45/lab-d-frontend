import Image from 'next/image';

const OverView = () => {
    return (
        <section className='space-y-6 md:space-y-10'>
            <>
                <h1 className='text-2xl font-semibold text-[#30363C] hidden lg:block mb-4'>How To Book In Simple Steps</h1>
                <div>
                    <Image src="/assets/homepage/book-lab-test-3steps.svg" alt='daesd' height={800} className='m-auto hidden lg:block' width={800} />
                    <Image src='/assets/homepage/diag-how-to-book-1-mobile.svg' alt='daesd' height={400} className='m-auto block lg:hidden' width={400} />
                </div>
            </>
            <>
                <div className="flex justify-start items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-gantt-chart text-[#30363C]"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 8h7" /><path d="M8 12h6" /><path d="M11 16h5" /></svg>
                    <h1 className='text-2xl font-semibold text-[#30363C]'>Overview</h1>
                </div>
                <article className='text-xs md:text-sm text-[#30363C]'>
                    The Healthy 2022 Full Body Checkup is best for those who want to keep track of their overall health. This checkup includes necessary tests for Blood Sugar Levels, Cholesterol, Kidney and Liver Function, Thyroid Gland Function, Lipid Profile, Urine Routine and more. It also checks for Sodium, Chloride and Calcium levels in the body. Additionally, its Complete Blood Count tests can help give a clearer picture of the bodys bloo…
                </article>
            </>
            <>
                <div className="flex justify-start items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-gantt-chart text-[#30363C]"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 8h7" /><path d="M8 12h6" /><path d="M11 16h5" /></svg>
                    <h1 className='text-2xl font-semibold text-[#30363C]'>Risk Assessment</h1>
                </div>
                <article className='text-xs md:text-sm text-[#30363C]'>
                    Preventive health checkups evaluate the health of vital organs and the overall health of the body, like diabetes, obesity, heart disease, kidney disease, liver disorder, thyroid disorder, urine infection, anaemia, etc.
                    <br />
                    <br />
                    Including a complete Lipid Profile, this test package also provides valuable information about the risk of…
                </article>
            </>
        </section>
    )
}

export default OverView;