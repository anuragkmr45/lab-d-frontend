"use client"

import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { signout } from '@/services/auth';

import { IoMenuOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { BiClinic } from "react-icons/bi";
import { RiHealthBookLine } from "react-icons/ri";
// import { LuHelpCircle } from "react-icons/lu";
import { CiLogout, CiHome } from "react-icons/ci";
import { MdOutlineArticle } from "react-icons/md";

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

import SearchBar from '@/components/searchbar';
import { Button } from '../ui/button';


const SmallScreenNavbar = ({ isAuth }: { isAuth: boolean }) => {

    const handleLogout = async () => {
        try {
            await signout();
            redirect('/auth/signin');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Sheet>
            <section className='bg-[#F8F8F8]  shadow shadow-blue-100 grid grid-cols-1 mb-3 px-2 py-4'>
                <aside className='flex justify-between items-center h-10/12'>
                    <div className="grid grid-cols-7">
                        <Link href='/' className='col-span-2'>
                            <Image src='/assets/logos/logo.png' alt='LabD' width={60} height={60} />
                        </Link>
                        <div className='col-span-5 mx-auto'>
                            <SearchBar />
                        </div>
                    </div>
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
                                    <Link href="/about">
                                        <div className='h-12 flex items-center space-x-2'>
                                            <CiHome />
                                            <span>Home</span>
                                        </div>
                                    </Link>
                                    <Separator />
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
                                            <MdOutlineArticle />
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
                                            {/* <LuHelpCircle /> */}
                                            <span>Need Help?</span>
                                        </div>
                                    </Link>
                                    <Separator />
                                    {
                                        isAuth && (
                                            <Button onClick={handleLogout} className='h-12 flex items-center space-x-2'>
                                                <CiLogout />
                                                <span>Logout</span>
                                            </Button>
                                        )
                                    }
                                    <Separator />
                                </section>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </aside>
            </section>
        </Sheet>
    )
}

export default SmallScreenNavbar;
