"use client";

import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Loader2 } from "lucide-react"

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleOTPReq = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    // const handleInputChange = (event) => {
    //     const value = event.target.value;
    //     if (value.length < 11) {

    //     }
    // };

    return (
        <div className="flex flex-col justify-around space-y-16">
            <div className="space-y-5">
                <h1 className="font-bold text-2xl" >Sign In</h1>
                <Input
                    ref={inputRef}
                    type="tel"
                    placeholder="+91 _ _ _ _ _ _ _ _ _ _"
                    value={inputValue}
                    className="ring-offset-background focus-visible:outline-none"
                />
                <label className="text-[#006D77] text-xs mt-6">OTP will be send to this number by SMS.</label>
                <div className="flex space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-xs md:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Share health tips, appointment details and offers with me on whatsapp
                    </label>
                </div>
            </div>
            <Button disabled={false} className='bg-[#006D77] w-full shadow-md text-lg font-semibold py-6' onClick={handleOTPReq}>
                {
                    isLoading ?
                        <div className="text-black flex-col">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </div>
                        :
                        <>Get OTP</>

                }
            </Button>
            <p className="text-xs font-semibold mt-20 text-center">By clicking Continue, you agree to Lab-D’s <span className="text-[#006D77]">Privacy policy, Terms and conditions</span></p>
        </div>
    )
}

export default Form
