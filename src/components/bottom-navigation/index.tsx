"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { FloatingDock } from "@/components/ui/floating-dock";
import { House, PillBottle, HeartPulse, UserRoundPen, CircleHelp, PersonStanding, Stethoscope } from 'lucide-react';

const BottomNavigation = () => {

    const pathname: string = usePathname()

    type bottomNavType = {
        key: number,
        link: string,
        img: string,
        title: string,
    }

    const BottomNavigationContent: bottomNavType[] = [
        {
            key: 0,
            link: '/',
            img: "/assets/homepage/icons/home.svg",
            title: 'Home',
        },
        {
            key: 1,
            link: '/general-diagnostics',
            img: "/assets/homepage/icons/general-test.svg",
            title: 'General Test',
        },
        {
            key: 2,
            link: '/organ-related',
            img: "/assets/homepage/icons/organ.svg",
            title: 'Organ',
        },
    ];

    const navItemActiveStyle: string = 'flex flex-col justify-center items-center transition-all duration-300 space-y-2 ease-in-out'
    const navItemInActiveStyle: string = 'flex flex-col justify-center items-center opacity-35 transition-all space-y-2 duration-300 ease-in-out'

    const shouldShowBottomNav = BottomNavigationContent.some(item => item.link === pathname);

    return shouldShowBottomNav ? (
        <>
            <div className="w-full sticky bottom-0 block md:hidden">
                <div className="w-full h-[70px] rounded-t-2xl shadow-2xl text-center bg-[#F8F8F8] absolute bottom-0 grid grid-cols-3 gap-2 z-30">
                    {
                        BottomNavigationContent?.map((data: bottomNavType) => {
                            return (
                                <Link key={data.key} href={data.link} className={pathname === data.link ? navItemActiveStyle : navItemInActiveStyle}>
                                    <div className={`w-full bg-[#13a798] h-2 transition-all ease-in-out duration-300 rounded-b-lg ${data.link === pathname ? 'block' : 'hidden'}`} />
                                    <Image src={data.img} alt="" width={20} height={20} className='text-[#105f57]' />
                                    <h1 className='text-[#105f57] font-bold text-sm'>{data.title}</h1>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='w-full bg-black h-2 rounded-lg' />
            </div>
            <div className='w-full sticky bottom-4 hidden md:block'>
                <BottomNavigationLargeScreen />
            </div>
        </>
    ) : null;
}

const BottomNavigationLargeScreen = () => {

    const links = [
        {
            title: "Home",
            icon: (
                <House className="h-full w-full text-neutral-900 " />
            ),
            href: "/",
        },
        {
            title: "General Diagnostics",
            icon: (
                <PillBottle className="h-full w-full text-neutral-900" />
            ),
            href: "/general-diagnostics",
        },
        {
            title: "Organ Related",
            icon: (
                <HeartPulse className="h-full w-full text-neutral-900" />
            ),
            href: "/organ-related",
        },
        {
            title: "Regular Tests",
            icon: (
                <PersonStanding className="h-full w-full text-neutral-900" />
            ),
            href: "/",
        },
        {
            title: "About Us",
            icon: (
                <Stethoscope className="h-full w-full text-neutral-900" />
            ),
            href: "/about",
        },
        {
            title: "Need Help?",
            icon: (
                <CircleHelp className="h-full w-full text-neutral-900" />
            ),
            href: "/contact",
        },

        {
            title: "Profile",
            icon: (
                <UserRoundPen className="h-full w-full text-neutral-900" />
            ),
            href: "/",
        },
    ];

    return (
        <div className='bg-inherit text-center flex items-center justify-center'>
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    )
}

export default BottomNavigation
