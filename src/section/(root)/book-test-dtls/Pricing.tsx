import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/magicui/shiny-button";

const BookCard = ({discountedPrice, discountPercentage}: {discountedPrice: string, discountPercentage: string}) => {

    const originalPricing: number = Math.round(
        parseFloat(discountedPrice || "0") /
          (1 - parseFloat(discountPercentage || "0") / 100)
      );

    return (
        <main className="space-y-8">
            <section className="rounded-xl shadow-md">
                <div className="bg-[#006D77] flex justify-between items-center py-2 px-1 rounded-t-xl">
                    <p className="text-white font-medium text-xs">Get 20% OFF* on 1st order above ₹500</p>
                    <div className="text-white font-medium text-xs">
                        Use: <Badge variant='default' className='bg-[#01A16E] border-none'>Lab-D 20</Badge>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 bg-white py-4 rounded-b-xl">
                    <div className="flex flex-col mx-auto space-y-2">
                        <div className="flex items-end space-x-2">
                            <h2 className="flex items-center text-2xl font-medium">₹ {discountedPrice}</h2>
                            <p className="line-through text-gray-500 font-medium">₹ {originalPricing}</p>
                        </div>
                        <Badge className="rounded-md bg-[#006D77] w-fit py-2 text-center">
                            75% off
                        </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        {/* <Button className='bg-gradient-to-tr from-[#E29578] from-50% to-[#FFDDD2] shadow-lg'>
                            Book Now
                        </Button> */}
                        <ShinyButton text="Shiny Button" className="bg-gradient-to-tr from-[#E29578] from-40% to-[#FFDDD2] shadow-lg py-4 border-none text-white" />
                    </div>
                </div>
            </section>
            <section className="bg-white flex flex-col rounded-xl">
                <div className="flex items-center justify-start space-x-2 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    <p className="font-medium">Free home sample collection in <span className="font-bold">60 mins</span> </p>
                </div>
                <Separator className='w-full my-2' />
                <div className="flex items-center justify-start space-x-2 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                    <p className="font-medium">Reports within <span className="font-bold">7 hours</span> </p>
                </div>
            </section>
        </main>
    );
};

export default BookCard;
