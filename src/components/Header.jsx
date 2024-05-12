import { useState } from 'react';
import logo from '../assets/logo.png';
import menuBar from '../assets/menuBar.svg';
import NavItems from './NavItems';

function Header() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    return (
        <header className='flex items-center justify-between lg:h-[96px]'>
            <button><img src={logo} height={40} alt="" /></button>
            <hr className='text-red-700 lg:w-[473px] md:w-0'/>
            {menu ?
            <NavItems/>
            :
            <button onClick={toggleMenu}>
                <img src={menuBar} height={21} width={24} alt="" />
            </button>
            }
        </header>
    );
}

export default Header;