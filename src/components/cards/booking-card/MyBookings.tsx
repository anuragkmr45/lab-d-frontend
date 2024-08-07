import { Separator } from "@/components/ui/separator";

const MyBookingCard = () => {
    return (
        <div className='flex flex-col w-full border-2 shadow-md rounded-xl border-[#d7d6d6]'>
            <>
                <div className='flex justify-between lg:justify-start items-center p-3 space-x-0 md:space-x-8'>
                    <p>Booking ID: <span className='text-[#006D77]'>25543</span></p>
                    <p>For Akash</p>
                </div>
                <Separator className="w-full mb-2 " />
            </>

            <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:items-center py-6 px-4">
                <div>
                    <h1 className="text-lg font-medium">Full Body Checkup - Essential</h1>
                    <div className="flex flex-col">
                        <div className="flex item-center text-black font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            <h3>Home</h3>
                        </div>
                        <p className="pl-6 text-xs md:text-sm text-[#575757]">
                            68, Hanuman Road area, Bangla sahib area, New Delhi, Delhi 110001, India
                        </p>
                    </div>
                </div>
                <div className="w-fit">
                    <p className="py-2 px-4 bg-[#E8E8E8] text-sm lg:text-base">Tue - 12.15 pm</p>
                    <Separator className='w-full text-black' />
                    <p className="py-2 px-4 bg-[#E8E8E8] text-sm lg:text-base">Mar 20 2024</p>
                </div>
            </div>

            <div className="bg-[#F3F3F3] flex justify-evenly items-center py-3 rounded-b-xl ">
                <div className="flex justify-center items-center space-x-1 text-xs md:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-[#006D77]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <p className="text-[#006D77]">CALL US</p>
                </div>
                <div className="flex justify-center items-center space-x-1 text-xs md:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-7 text-[#006D77]"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 9.5 16" /></svg>
                    <p className="text-[#006D77]">RESCHEDULE</p>
                </div>
                <div className="flex justify-center items-center space-x-1 text-xs md:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-[#006D77]"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    <p className="text-[#006D77]">CANCEL</p>
                </div>
            </div>
        </div>
    )
}

export default MyBookingCard
