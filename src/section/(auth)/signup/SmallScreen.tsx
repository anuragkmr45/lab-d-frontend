import { Separator } from "@/components/ui/separator";
import { CircleX } from 'lucide-react';
import Link from "next/link";

import Form from "./Form";

const SmallScreen = () => {

    return (
        <section className="m-auto w-full px-2 space-y-6 h-screen">
            <div className="flex flex-col">
                <Link href='/' className="flex justify-end mt-3 mx-4">
                    <CircleX className="text-[#868686] hover:text-white transition-all duration-200 ease-in-out rounded-full hover:bg-[#555555]" />
                </Link>
                <Separator className="my-4 text-[#868686] h-[0.15rem]" />
            </div>
            <Form />
        </section>
    )
}

export default SmallScreen
