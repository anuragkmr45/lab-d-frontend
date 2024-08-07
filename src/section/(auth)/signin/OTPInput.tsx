"use client"

import { useState } from "react"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const OtpInput = () => {
    const [value, setValue] = useState("")
    const [isLoading, setIsLoading] = useState("")
    const handleSubmit = () => { }
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-8">
            <div className="space-y-2">
                <InputOTP
                    maxLength={8}
                    value={value}
                    onChange={(value) => setValue(value)}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} className="border border-gray-700" />
                        <InputOTPSlot index={1} className="border border-gray-700" />
                        <InputOTPSlot index={2} className="border border-gray-700" />
                        <InputOTPSlot index={3} className="border border-gray-700" />
                        <InputOTPSlot index={4} className="border border-gray-700" />
                        <InputOTPSlot index={5} className="border border-gray-700" />
                        <InputOTPSlot index={6} className="border border-gray-700" />
                        <InputOTPSlot index={7} className="border border-gray-700" />
                    </InputOTPGroup>
                </InputOTP>
                <label className="flex justify-between w-full">
                    <small className="text-[#006D77] font-semibold">Resend OTP</small>
                    <small>00:19 sec</small>
                </label>
            </div>
            <Button disabled={false} className='bg-[#006D77] w-full shadow-md text-lg font-semibold py-6' onClick={handleSubmit}>
                {
                    isLoading ?
                        <div className="text-black flex-col">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </div>
                        :
                        <>Verify</>

                }
            </Button>
        </div>
    )
}

export default OtpInput
