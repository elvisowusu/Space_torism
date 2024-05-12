import logo from '../assets/logo.png';

function NavBar() {
    return (
        <nav className='flex items-center justify-between lg:h-[96px]'>
            <img src={logo} alt="" />
            <hr className='text-red-700 lg:w-[473px] md:w-0'/>
            <ul className='flex justify-evenly gap-[2rem]  lg:w-[830px]'>
                <li>00 HOME</li>
                <li>01 DESTINATION</li>
                <li>02 CREW</li>
                <li>03 TECHNOLOGY</li>
            </ul>
        </nav>
    );
}

export default NavBar;