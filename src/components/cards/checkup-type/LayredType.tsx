import { Button } from '@/components/ui/button';
import { FaDna } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { PiCurrencyDollarBold } from "react-icons/pi";
// import ShinyButton from "@/components/magicui/shiny-button";


import Link from 'next/link';

type cardProps = {
    title: string;
    origialPricing: string;
    discountedPricing: string;
    discount: string;
    parameters: string;
}

const CheckupTypeCard = ({ title, origialPricing, discountedPricing, discount, parameters }: cardProps) => {
    return (
        <div className="w-full mx-auto h-60 bg-[#EDF6F9] rounded-xl  shadow-xl m-2 space-y-3">
            <UpperCard
                discount={discount}
                origialPricing={origialPricing}
                discountedPricing={discountedPricing}
                title={title}
            />
            <LowerCard
                parameters={parameters}
            />
        </div>
    );
};

type UpperCardProps = {
    title: string;
    discountedPricing: string;
    origialPricing: string;
    discount: string;
}

const UpperCard = ({ title, discountedPricing, origialPricing, discount }: UpperCardProps) => {
    return (
        <div className="bg-gradient-to-r from-[#006D77] to-[#83C5BE] h-[106px] rounded-xl">
            <p className="absoute top-0 bg-[#185358] m-2 mt-0 w-28 text-[#efefef] text-center rounded-b-lg ">
                checkup
            </p>
            <div className="flex flex-row sm:justify-center justify-around items-center">
                <h1 className="sm:w-[60%]  text-[14px] sm:text-[16px] sm:mt-1 text-white font-bold">
                    {title}
                </h1>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center items-center space-x-3">
                        <p className="opacity-75 line-through text-gray-200 text-sm">₹{origialPricing}</p>
                        <h1 className="font-semibold text-white flex items-center justify-center">
                            <PiCurrencyDollarBold className="text-white" />
                            {discountedPricing}
                        </h1>
                    </div>
                    <p className="text-sm text-white font-semibold  w-28 h-7 flex items-center justify-center text-center rounded-md bg-green-400">

                        {discount}% off
                    </p>
                </div>
            </div>
        </div>
    )
};

type LowerCardProps = {
    parameters: string;
    link?: string;
}

const LowerCard = ({ parameters, link = '/' }: LowerCardProps) => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 px-4">
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 flex items-center justify-center">
                        <FaDna className="h-full" />
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <div className="text-left">
                            <p className="font-semibold text-[13px]">{parameters} parameters </p>
                            <p className="text-[14px] "> included</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 flex items-center justify-center">
                        <TbReport className="h-full text-2xl" />
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <div className="text-left">
                            <p className=" text-[13px]">Reports within </p>
                            <p className="text-[14px] font-semibold"> 7 hours</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-around">
                <Link href='/organ-related/full%20body%20checkups'>
                    <Button className=' bg-transparent font-semibold  text-[#006D77] hover:bg-[#006D77] hover:text-white shadow-sm shadow-[#006D77] transition-all duration-200 ease-in-out'> View Details</Button>
                </Link>
                <Link href='/book-test-deatils'>
                    <Button className='bg-gradient-to-tr from-[#ff8153] to-[#f9d2c5] shadow-lg '> Book Details</Button>
                </Link>
            </div>
        </div>
    )
}

export default CheckupTypeCard;
