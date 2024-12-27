import SmallScreenNavbar from './SmallScreen';
import LargeScreenNavbar from './LargeScreen';


const Navbar = () => {

    return (
        <header className='fixed top-0 w-screen z-40'>
            <nav className='block lg:hidden'>
                <SmallScreenNavbar />
            </nav>
            <nav className='hidden lg:block'>
                <LargeScreenNavbar />
            </nav>
        </header >
    )
}

export default Navbar
