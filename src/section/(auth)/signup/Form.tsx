"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { authorise } from "@/lib/redux/slices/authSlice";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Loader2, EyeOff, Eye } from "lucide-react";

const Form = () => {

    const router = useRouter();
    const isAuth = useSelector((state: RootState) => state.authStatus.isAuth);
    const dispatch = useDispatch();

    const [name, setName] = useState('anurag kumar');
    const [email, setEmail] = useState('anurag45kmr@gmail.com');
    const [password, setPass] = useState('anurag@123');
    const [passToggle, setPassToggle] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleTogglePass = () => {
        setPassToggle(!passToggle);
    }

    const handleSubmit = async () => {
        try {
            const formData: string = JSON.stringify({
                name: name,
                email: email,
                password: password,
            });

            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                body: formData,
                headers: { 'Content-Type': 'application/json' },
            });

            const responseData = await res.json();

            if (responseData?.tokenStatus) {
                localStorage.setItem('authToken', responseData.token);
                dispatch(authorise());
                router.back();
            } else {
                toast("token not availabe")
            }
        } catch (error) {
            console.error('Error signing up:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isAuth) {
            router.back();
        }
    }, [])

    return (
        <div className="flex flex-col justify-around">
            <div className="space-y-5">
                <h1 className="font-bold text-2xl" >Sign Up</h1>
                <div className="space-y-4">
                    <Input
                        type="tel"
                        placeholder="Name"
                        value={name}
                        className="ring-offset-background focus-visible:outline-none"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        className="ring-offset-background focus-visible:outline-none"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex justify-start items-center space-x-4 px-2">
                        <Input
                            type={passToggle ? "text" : "password"}
                            minLength={7}
                            placeholder="Password"
                            value={password}
                            className="ring-offset-background focus-visible:outline-none"
                            onChange={(e) => setPass(e.target.value)}
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

                </div>
                <label className="text-[#006D77] text-xs mt-6">OTP will be send to this number by SMS.</label>
                <div className="flex space-x-2">
                    <Checkbox id="terms" className="my-auto" />
                    <label
                        htmlFor="terms"
                        className="text-xs md:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Share health tips, appointment details and offers with me on whatsapp
                    </label>
                </div>
            </div>
            <Button disabled={false} className='bg-[#006D77] w-full shadow-md text-lg font-semibold mt-4 py-6' onClick={handleSubmit}>
                {
                    isLoading ?
                        <div className="text-white flex justify-center align-middle">
                            <Loader2 className="m-auto mr-2 h-4 w-4 animate-spin" />
                            <span>Loading ...</span>
                        </div>
                        :
                        <div className="text-white flex justify-center align-middle">
                            {/* <Loader2 className="m-auto mr-2 h-4 w-4 animate-spin" /> */}
                            <span>Sign up</span>
                        </div>

                }
            </Button>
            <small>Already having an account? <Link href='/signin' className="text-blue-800 font-semibold">Signin</Link></small>
            <p className="text-xs font-semibold text-center mt-6 absolute bottom-10">By clicking Continue, you agree to Lab-D’s <span className="text-[#006D77]">Privacy policy, Terms and conditions</span></p>
        </div>
    )
}

export default Form
