"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoLocationOutline } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/searchbar";

const LargeScreenNavbar = ({ isAuth }: { isAuth: boolean }) => {

    const [isSticky, setSticky] = useState(false);
    const location = false;
    const authenticated: boolean = true;

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setSticky(scrollPosition > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStickyEffect = isSticky ?
        'bg-[#F8F8F8] transition-all duration-500 ease-in-out shadow-lg shadow-[#DEEFF4]' :
        'bg-inherit transition-all duration-500 ease-in-out';

    return (
        <div className={`w-screen shadow ${navbarStickyEffect}`}>
            <div className='grid grid-cols-3 gap-4 w-full py-2'>
                <div className='flex items-center justify-between mx-2'>
                    <Link href='/'>
                        <Image src='/assets/logos/logo.png' alt='LabD' width={60} height={60} />
                    </Link>
                    {
                        authenticated && (
                            <>
                                <div className='flex items-center py-2 px-3 cursor-pointer rounded-md hover:shadow-lg ease-in-out duration-200 transition-all'>
                                    <IoLocationOutline />
                                    <span>Select Location</span>

                                </div>
                                {
                                    location && (
                                        <div>Kukatpally</div>
                                    )
                                }

                            </>
                        )
                    }
                </div>
                <SearchBar />
                <div className='flex justify-evenly items-center'>
                    <Button variant="outline" className='space-x-3 shadow shadow-green-300 text-green-600'>
                        <SiWhatsapp />
                        <span>Support</span>
                    </Button>
                    {
                        isAuth && isAuth ? (
                            <Button variant="ghost" className='space-x-2 shadow'>
                                <RxAvatar />
                                <span>Logout</span>
                            </Button>
                        ) : (
                            <Link href="/signin">
                                <Button variant="ghost" className='space-x-2 shadow'>
                                    <RxAvatar />
                                    <span>Login</span>
                                </Button>
                            </Link>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default LargeScreenNavbar
