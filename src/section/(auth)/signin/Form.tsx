"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signin } from "@/services/auth";

import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Loader2, EyeOff, Eye } from "lucide-react"

const Form = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [passToggle, setPassToggle] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleTogglePass = () => {
        setPassToggle(!passToggle);
    }

    const handleSignin = async () => {
        setIsLoading(true);
        try {
            // const res = await signin(formData.email, formData.password);
            await signin("abcd@abcd.com", "Abcd@12345");
            router.replace("/");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col justify-around space-y-16">
            <div className="space-y-5">
                <h1 className="font-bold text-2xl" >Sign In</h1>
                <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    className="ring-offset-background focus-visible:outline-none"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <div className="flex justify-start items-center space-x-4 px-2">
                    <Input
                        type={passToggle ? "text" : "password"}
                        minLength={7}
                        placeholder="Password"
                        value={formData.password}
                        className="ring-offset-background focus-visible:outline-none"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <Button onClick={handleTogglePass} className="bg-inherit text-black">
                        {
                            passToggle ? (
                                <Eye />
                            ) : (
                                <EyeOff />
                            )
                        }
                    </Button>
                </div>
                <label className="text-black text-xs mt-6">Don't having an account <Link className="text-[#006D77]" href='/auth/signup'>Signup</Link>.</label>
                {/* <div className="flex space-x-2">
                    <Checkbox id="terms" className="my-auto" />
                    <label
                        htmlFor="terms"
                        className="text-xs md:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Share health tips, appointment details and offers with me on whatsapp
                    </label>
                </div> */}
            </div>
            <Button disabled={false} className='bg-[#006D77] w-full shadow-md text-lg font-semibold py-6' onClick={handleSignin}>
                {
                    isLoading ?
                        <div className="text-white flex justify-center align-middle">
                            <Loader2 className="m-auto mr-2 h-4 w-4 animate-spin" />
                            <span>Loading ...</span>
                        </div>
                        :
                        <>SignIn</>

                }
            </Button>
            <p className="text-xs font-semibold mt-20 text-center">By clicking Continue, you agree to Lab-D’s <span className="text-[#006D77]">Privacy policy, Terms and conditions</span></p>
        </div>
    )
}

export default Form
