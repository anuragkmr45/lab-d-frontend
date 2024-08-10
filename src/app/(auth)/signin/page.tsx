import Image from 'next/image';
import SmallScreen from "@/section/(auth)/signin/SmallScreen";

const SignIn = () => {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen">
            <aside className="hidden lg:block bg-[#006D77] h-full">
                <div className="flex items-center w-fit space-x-2 bg-white px-4 rounded-lg m-8">
                    <Image src='/assets/logos/logo.png' alt='fad' height={50} width={50} />
                    <h1 className='font-bold text-xl text-[#006D77]'>LAB-D</h1>
                </div>
                <p className='absolute w-2/5 bottom-10 ml-4 text-sm text-white font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae ratione, possimus laborum officiis asperiores incidunt facere atque neque veritatis provident vitae saepe a itaque sint voluptatem quos ipsam quia.
                </p>
            </aside>
            <aside className="bg-transparent">
                <SmallScreen />
            </aside>
        </main>
    )
}

export default SignIn;
