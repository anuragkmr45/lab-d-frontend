import { Separator } from "@/components/ui/separator";
import { CircleX } from 'lucide-react';
import OtpInput from "./OTPInput";

const OtpScreen = () => {
    return (
        <section className="m-auto w-full px-2 space-y-6 h-screen">
            <h1 className="font-bold text-2xl" >Enter OTP</h1>
            <label htmlFor="h1">Please enter OTP sent to 8238128102</label>
            <OtpInput />

        </section>
    )
}

export default OtpScreen
