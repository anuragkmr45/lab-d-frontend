import Link from 'next/link';
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter } from "react-icons/io5";
import { FaAmazonPay, FaGooglePay, FaPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";

const Footer = () => {

    return (
        <main className='relative z-20'>
            <footer className='bg-[#EDF6F9] px-5 md:px-24 py-6'>
                <section className='flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-4'>
                    <aside className='space-y-1 md:space-y-4'>
                        <h2 className='text-[#4F585E] text-xl font-semibold'>Company</h2>
                        <ul className='space-y-0 md:space-y-2'>
                            <li>
                                <Link href="/about">
                                    <span className='text-[#4F585E] font-normal text-sm'>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <span className='text-[#4F585E] font-normal text-sm'> Contact Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <span className='text-[#4F585E] font-normal text-sm'>Articles</span>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <aside className='space-y-1 md:space-y-4'>
                        <h1 className='text-[#4F585E] text-xl font-semibold'>Our Services</h1>
                        <ul className='space-y-0 md:space-y-2'>
                            <li>
                                <span className='text-[#4F585E] font-normal text-sm'>Lab Tests</span>
                            </li>
                            <li>
                                <span className='text-[#4F585E] font-normal text-sm'>Find Nearest Collection Centre</span>
                            </li>
                        </ul>
                    </aside>
                    <aside className='space-y-1 md:space-y-4'>
                        <h2 className='text-[#4F585E] text-xl font-semibold'>Policy Info</h2>
                        <ul className='space-y-0 md:space-y-2'>
                            <li>
                                <span className='text-[#4F585E] font-normal text-sm'>Editorial Policy</span>
                            </li>
                            <li>
                                <span className='text-[#4F585E] font-normal text-sm'>Privacy Policy</span>
                            </li>
                            <li>
                                <span className='text-[#4F585E] font-normal text-sm'>Vulnerability Disclosure Policy</span>
                            </li>
                            <li>
                                <span className='text-[#4F585E] font-normal text-sm'>Terms and Conditions</span>
                            </li>
                            <li>
                                <span className='text-[#4F585E] font-normal text-sm'>Customer Support Policy</span>
                            </li>
                            <li>
                                <span className='text-[#4F585E] font-normal text-sm'> Return Policy</span>
                            </li>
                        </ul>
                    </aside>
                    <aside className='space-y-4'>
                        <h2 className='text-xl font-medium text-[#4F585E] hidden md:block'>FOLLOW US</h2>
                        <div className="flex justify-start items-center space-x-3">
                            <Link href='https://www.instagram.com/labd.co.in?igsh=ZGVzanc2ZXR1MnZk' target='_blank' className='shadow shadow-[#10847E]  bg-[#10847E] rounded-full p-2 hover:shadow-md hover:scale-95 cursor-pointer transition-all ease-in-out duration-200'>
                                <IoLogoInstagram className='text-white text-xl' />
                            </Link>
                            <Link href='/' className='shadow shadow-[#10847E]  bg-[#10847E] rounded-full p-2 hover:shadow-md hover:scale-95 cursor-pointer transition-all ease-in-out duration-200'>
                                <IoLogoFacebook className='text-white text-xl' />
                            </Link>
                            <Link href='/' className='shadow shadow-[#10847E]  bg-[#10847E] rounded-full p-2 hover:shadow-md hover:scale-95 cursor-pointer transition-all ease-in-out duration-200'>
                                <IoLogoYoutube className='text-white text-xl' />
                            </Link>
                            <Link href='/' className='shadow shadow-[#10847E]  bg-[#10847E] rounded-full p-2 hover:shadow-md hover:scale-95 cursor-pointer transition-all ease-in-out duration-200'>
                                <IoLogoTwitter className='text-white text-xl' />
                            </Link>
                        </div>
                    </aside>
                </section>
                <section className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                    <aside className='space-y-2'>
                        <h3 className='text-[#4F585E] font-semibold text-lg'>Our Payment Partners</h3>
                        <div className='flex justify-start items-center space-x-4'>
                            <FaAmazonPay className='text-4xl' />
                            <SiPaytm className='text-4xl ' />
                            <FaGooglePay className='text-4xl ' />
                            <FaPaypal className='text-4xl ' />
                            <FaApplePay className='text-4xl ' />
                        </div>
                    </aside>
                    <aside className='mt-10 md:mt-0 text-sm md:text-base'>
                        <p>© 2024 Lab-D. All Rights Reserved</p>
                    </aside>
                </section>
            </footer>
            <section className='bg-white text-gray-800 font-semibold text-lg text-center py-4'>
                Powered By <Link href='https://www.brandladder.co.in/' className='text-[#10847E]'> Brandladder Pvt Ltd</Link>
            </section>
        </main>
    )
}

export default Footer
