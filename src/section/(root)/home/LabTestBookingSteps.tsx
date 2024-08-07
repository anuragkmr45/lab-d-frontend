import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const LabTestBookingSteps = () => {
    return (
        <div className='border-2 shadow-[rgb(0,109,119)] rounded-xl w-full p-10'>
            <div className="grid grid-cols-5 gap-3">
                <h1 className='font-semibold text-2xl my-auto h-full col-span-1'>
                    How to book Lab test in 3 simple steps
                </h1>
                <div className='col-span-4 flex flex-col justify-between px-4'>
                    <Image src="/assets/homepage/book-lab-test-3steps.svg" alt='' height={800} width={800} className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default LabTestBookingSteps
