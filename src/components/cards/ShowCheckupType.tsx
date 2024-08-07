import Image from 'next/image';
import Link from 'next/link';
// import { FaCircleArrowRight } from "react-icons/fa6";

interface CheckupCardProps {
    bgcolor: string;
    title: string;
    img: string;
    navLink: string;
}

const ShowCheckUpCard = ({ bgcolor, title, img, navLink }: CheckupCardProps) => {
    return (
        <Link href={navLink} className={`${bgcolor} grid grid-cols-2 gap-4 w-full rounded-xl px-4 py-1 md:py-6 h-36 md:h-52 shadow transition-all duration-200 ease-in-out hover:shadow-lg shadow-${bgcolor}`}>
            <div className='flex flex-col justify-center space-y-6 my-auto'>
                <h1 className='text-lg md:text-2xl font-medium'>{title}</h1>
                {/* <FaCircleArrowRight className='text-5xl hidden md:block' /> */}
            </div>
            <div className='flex flex-cols items-center justify-center m-auto'>
                <Image src={img} alt={title} height={100} width={100} className='w-full' />
            </div>
        </Link>
    )
}

export default ShowCheckUpCard
