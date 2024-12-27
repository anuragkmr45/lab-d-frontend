// "validate inpiut form"
"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signup } from '@/services/auth';
import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Loader2, EyeOff, Eye } from "lucide-react";


const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        dob: "",
        bloodgrp: "",
    });
    const [passToggle, setPassToggle] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleTogglePass = () => {
        setPassToggle(!passToggle);
    }

    const handleSingup = async () => {
        setIsLoading(true);
        try {
            await signup(formData);
            return router.replace("/auth/signin");

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col justify-around space-y-16">
            <div className="space-y-4">
                <h1 className="font-bold text-2xl" >Sign Up</h1>
                <div className="space-y-4">
                    <Input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        className="ring-offset-background focus-visible:outline-none"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        className="ring-offset-background focus-visible:outline-none"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <div className="flex justify-start items-center space-x-4 px-2">
                        <span>+91</span>
                        <Input
                            type="tel"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            placeholder=" _ _ _ _ _ _ _ _ _ _"
                            value={formData.phoneNumber}
                            className="ring-offset-background focus-visible:outline-none"
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        />
                    </div>
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
                    <div className="flex justify-start items-center space-x-4 px-2">
                        <Input
                            type="date"
                            placeholder="Date of Birth"
                            value={formData.dob}
                            className="ring-offset-background focus-visible:outline-none"
                            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        />
                        <Input
                            type="text"
                            placeholder="Blood Group"
                            value={formData.bloodgrp}
                            className="ring-offset-background focus-visible:outline-none"
                            onChange={(e) => setFormData({ ...formData, bloodgrp: e.target.value })}
                        />
                    </div>
                </div>
                {/* <label className="text-[#006D77] text-xs mt-6">OTP will be send to this number by SMS.</label>
                <div className="flex space-x-2">
                    <Checkbox id="terms" className="my-auto" />
                    <label
                        htmlFor="terms"
                        className="text-xs md:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Share health tips, appointment details and offers with me on whatsapp
                    </label>
                </div> */}
            </div>
            <label className="text-black text-xs">Already having an account <Link className="text-[#006D77]" href='/auth/signin'>SignIn</Link>.</label>
            <Button disabled={false} className='bg-[#006D77] w-full shadow-md text-lg font-semibold py-6' onClick={handleSingup}>
                {
                    isLoading ?
                        <div className="text-white flex justify-center align-middle">
                            <Loader2 className="m-auto mr-2 h-4 w-4 animate-spin" />
                            <span>Loading</span>
                        </div>
                        :
                        <>Singup</>

                }
            </Button>
            {/* <p className="text-xs font-semibold mt-20 text-center">By clicking Continue, you agree to Lab-D’s <span className="text-[#006D77]">Privacy policy, Terms and conditions</span></p> */}
        </div>
    )
}

export default Form
