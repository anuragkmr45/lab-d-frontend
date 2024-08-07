"use client"

import Image from 'next/image';
import Link from 'next/link';

import { IoMenuOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { BiClinic } from "react-icons/bi";
import { RiHealthBookLine } from "react-icons/ri";
import { LuHelpCircle } from "react-icons/lu";
import { CiLogout, CiLocationOn } from "react-icons/ci";

import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import AnimatedSubscribeButtonDemo from '@/components/button/SubscribeButton';


const SmallScreenNavbar = ({ isAuth }: {isAuth: boolean}) => {

    return (
        <Sheet className='w-full bg-white'>
            <section className='bg-[#F8F8F8]  shadow shadow-blue-100 grid grid-cols-1 mb-3 px-2 py-4'>
                <aside className='flex justify-between items-center h-10/12'>
                    <Link href='/'>
                        <Image src='/assets/logos/logo.png' alt='LabD' width={60} height={60} />
                    </Link>
                    <SheetTrigger>
                        <IoMenuOutline className='text-3xl' />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <Image src='/assets/logos/logo.png' alt='LabD' width={60} height={60} />
                            </SheetTitle>
                            <SheetDescription>
                                <section className='text-left space-y-3'>
                                    <p className='text-black text-xl'>Welcome !</p>
                                    <AnimatedSubscribeButtonDemo />
                                </section>
                                <section className='mt-10'>
                                    {
                                        isAuth ? (
                                            <Link href="/about">
                                                <div className='h-12 flex items-center space-x-2'>
                                                    <FiLogIn />
                                                    <span>About Us</span>
                                                </div>
                                            </Link>
                                        ) : (
                                            <Link href="/signin">
                                                <div className='h-12 flex items-center space-x-2'>
                                                    <FiLogIn />
                                                    <span>Log In or Register</span>
                                                </div>
                                            </Link>
                                        )
                                    }
                                    <Separator />
                                    <Link href="/blog">
                                        <div className='h-12 flex items-center space-x-2'>
                                            <BiClinic />
                                            <span>Articles</span>
                                        </div>
                                    </Link>
                                    <Separator />
                                    <Link href="/my-bookings">
                                        <div className='h-12 flex items-center space-x-2'>
                                            <BiClinic />
                                            <span>My Bookings</span>
                                        </div>
                                    </Link>
                                    <Separator />
                                    <Link href="/health-record">
                                        <div className='h-12 flex items-center space-x-2'>
                                            <RiHealthBookLine />
                                            <span>Health Records</span>
                                        </div>
                                    </Link>
                                    <Separator />
                                    <Link href="/contact">
                                        <div className='h-12 flex items-center space-x-2'>
                                            <LuHelpCircle />
                                            <span>Need Help?</span>
                                        </div>
                                    </Link>
                                    <Separator />
                                    {
                                        isAuth && (
                                            <div className='h-12 flex items-center space-x-2'>
                                                <CiLogout />
                                                <span>Logout</span>
                                            </div>
                                        )
                                    }
                                    <Separator />
                                </section>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </aside>
                <>
                    <div className='grid grid-cols-5 gap-4'>
                        <div className='col-span-3 bg-white'>
                            <input
                                className=' shadow rounded px-2 max-w-full h-full'
                                type="search"
                                name=""
                                id=""
                                placeholder='Search for Test ...'
                            />
                        </div>
                        <Button
                            variant='link'
                            className=' col-span-2'
                        // onClick={handleRequestLocationPermission}
                        >
                            <CiLocationOn className='h-full w-full' />
                            <span className='text-gray-500'>
                                Location
                            </span>
                        </Button>
                    </div>
                </>
            </section>
        </Sheet>
    )
}

export default SmallScreenNavbar
