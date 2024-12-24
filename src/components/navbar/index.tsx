import SmallScreenNavbar from './SmallScreen';
import LargeScreenNavbar from './LargeScreen';

import { getServerToken } from '@/lib/auth';


const Navbar = () => {

    const token = getServerToken();
    const isAuth: boolean = token !== null ? true : false;

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
