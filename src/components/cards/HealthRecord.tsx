import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const HealthRecordCard = () => {
    return (
        <div className='flex flex-col w-full border-2 shadow-md rounded-xl border-[#d7d6d6]'>
            <>
                <div className='flex justify-between lg:justify-start items-center p-3 space-x-0 md:space-x-8'>
                    <p>Booking ID: <span className='text-[#006D77]'>25543</span></p>
                    <p>For Akash</p>
                </div>
                <Separator className="w-full mb-2 " />
            </>

            <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 items-center md:items-start py-6 px-4 w-full">
                <h1 className="text-lg font-medium">Full Body Checkup - Essential</h1>
                <Button variant='default' className=' bg-[#006D77] space-x-4 w-full md:w-fit my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download text-white"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                    <p className="text-white">Download Report</p>
                </Button>
            </div>
        </div>
    )
}

export default HealthRecordCard
