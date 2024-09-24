"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { authorise } from "@/lib/redux/slices/authSlice";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { Loader2, EyeOff, Eye } from "lucide-react"

const Form = () => {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPass] = useState('test@123');
    const [passToggle, setPassToggle] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();
    const isAuth = useSelector((state: RootState) => state.authStatus.isAuth);
    const dispatch = useDispatch();

    const handleTogglePass = () => {
        setPassToggle(!passToggle);
    }

    const handleSignin = async () => {
        setIsLoading(true)
        console.log('object1')
        try {
            const formData: string = JSON.stringify({
                email: email,
                password: password,
            });

            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const responseData = await res.json();

            console.log('responseData: ', responseData)

            if (responseData?.tokenStatus) {
                console.log('isAuth before dispatch:', isAuth);
                localStorage.setItem('authToken', responseData.token);
                dispatch(authorise());
                console.log('isAuth after dispatch:', isAuth);
                router.back();
            } else {
                toast("token not availabe")
            }

        } catch (error) {
            console.error('Error logging in:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (isAuth) {
            router.back();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col justify-around space-y-16 max-h-screen">
            <div className="space-y-5">
                <h1 className="font-bold text-2xl" >Sign In</h1>
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
            <div className="space-y-4">
                <Button disabled={isLoading} className='bg-[#006D77] w-full shadow-md text-lg font-semibold py-6' onClick={handleSignin}>
                    {
                        isLoading ?
                            <div className="text-white flex justify-center align-middle">
                                <Loader2 className="m-auto mr-2 h-4 w-4 animate-spin" />
                                <span>Loading</span>
                            </div>
                            :
                            <div className="text-white flex justify-center align-middle">
                                <span>Log In</span>
                            </div>
                    }
                </Button>
                <small className="">Lorem ipsum dolor sit  <Link href='/signup' className="text-blue-800 font-semibold">Sign Up</Link> </small>
            </div>
            <p className="text-xs font-semibold text-center absolute bottom-8">By clicking Continue, you agree to Lab-D’s <span className="text-[#006D77]">Privacy policy, Terms and conditions</span></p>
        </div>
    )
}

export default Form
