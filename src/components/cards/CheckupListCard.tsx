import Image from 'next/image';
import Link from 'next/link';

type CheckupCardType = {
    text: string;
    img: string;
    navLink: string;
}

const CheckupCard = ({ text, img, navLink = '/' }: CheckupCardType) => {
    return (
        <Link href={navLink} className='shadow cursor-pointer py-2 hover:shadow-md grid grid-cols-2 gap-3 bg-white rounded-xl transition-all duration-200 ease-in-out h-20'>
            <aside className='flex items-center justify-center'>
                <Image src={img} alt='' height={45} width={45} />
            </aside>
            <aside className='flex items-center justify-center'>
                <h1 className='text-sm font-semibold text-gray-700'>{text}</h1>
            </aside>
        </Link>
    )
}

export default CheckupCard
