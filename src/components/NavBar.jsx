import React, { useState } from 'react';
import logo from '../assets/logo.png';
import menuBar from '../assets/menuBar.svg';

function NavBar() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    return (
        <nav className='flex items-center justify-between lg:h-[96px]'>
            <button><img src={logo} height={40} alt="" /></button>
            <hr className='text-red-700 lg:w-[473px] md:w-0'/>
            {menu ?
            <ul className='flex flex-col justify-evenly md:flex-row lg:gap-[2rem] md:gap-[1rem]  lg:w-[830px]'>
                <li>00 HOME</li>
                <li>01 DESTINATION</li>
                <li>02 CREW</li>
                <li>03 TECHNOLOGY</li>
            </ul>
            :
            <button onClick={toggleMenu}>
                <img src={menuBar} height={21} width={24} alt="" />
            </button>
            }
        </nav>
    );
}

export default NavBar;