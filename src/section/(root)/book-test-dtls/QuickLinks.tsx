import React from 'react'

const QuickLinks = () => {
    return (
        <main>
            <h1 className='font-bold text-3xl'>Quick Links</h1>
            <ul className='flex justify-between'>
                <li className='text-[#006D77] font-medium cursor-pointer hover:bg-[#006D77] hover:text-white p-1 rounded-lg transition-all duration-200 ease-in-out'>Overview</li>
                <li className='text-[#006D77] font-medium cursor-pointer hover:bg-[#006D77] hover:text-white p-1 rounded-lg transition-all duration-200 ease-in-out'>Risk Assessment</li>
                <li className='text-[#006D77] font-medium cursor-pointer hover:bg-[#006D77] hover:text-white p-1 rounded-lg transition-all duration-200 ease-in-out'>Testimonials</li>
            </ul>
            <p className='mt-4 text-xl font-semibold text-center'>Our Goal is to Make India Healthy</p>
        </main>
    )
}

export default QuickLinks
