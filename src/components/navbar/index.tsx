import SmallScreenNavbar from './SmallScreen';
import LargeScreenNavbar from './LargeScreen';

import { cookies } from "next/headers";


const Navbar = () => {

    const cookieStore = cookies();
    const isAuth = cookieStore.get("auth_token")?.value ? true : false;

    return (
        <header className='fixed top-0 w-screen z-40'>
            <nav className='block lg:hidden'>
                <SmallScreenNavbar isAuth={isAuth} />
            </nav>
            <nav className='hidden lg:block'>
                <LargeScreenNavbar isAuth={isAuth} />
            </nav>
        </header >
    )
}

export default Navbar
