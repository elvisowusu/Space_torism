import { useEffect, useContext} from 'react';
import logo from '../assets/shared/logo.svg';
import menuBar from '../assets/shared/menuHamburger.svg';
import NavItems from './NavItems';
import close from '../assets/shared/close.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { UserContext } from './FinalPage';



function Header() {
    const exploreDisplay = useContext(UserContext)
    useEffect(() => {
        Aos.init({duration: 400});
    },[])
    
    
    return (
        <header className='relative flex items-center justify-between h-[4.5rem] md:h-[3rem] lg:h-[4rem] pl-[1.7rem] md:pl-[1.8rem] pt-3 md:pt-0  lg:pt-[0rem] lg:mt-7 lg:ml-[3rem]  pr-[1.7rem]  md:pr-0 '>
            <button className='lg:pt-[1rem]'  ><img src={logo} height={40} alt="" /></button>
            <hr className='absolute left-[7rem] border-none h-[0.2rem] opacity-30 bg-[#979797] z-20 lg:w-[473px] invisible lg:visible lg:mt-[1rem]'/>
            <div className='hidden md:block h-[100%]'><NavItems/></div>
            <button className='z-40 md:hidden' onClick={exploreDisplay.handleClick}><img src={exploreDisplay.exploreState? close:menuBar} alt="" /></button>
            {exploreDisplay.exploreState?
            <div style={{opacity:0.9,}} data-aos="fade-left" className={`z-30 absolute right-0 top-0 flex flex-col bg-white bg-opacity-10 backdrop-blur-lg w-[68%] h-[100vh] pt-[7rem] pl-[2rem]`}>
                <NavItems />
            </div>:
            null}
        </header>
    );
}

export default Header;