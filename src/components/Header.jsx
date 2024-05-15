import { useEffect, useReducer } from 'react';
import logo from '../assets/shared/logo.svg';
import menuBar from '../assets/shared/menuHamburger.svg';
import NavItems from './NavItems';
import close from '../assets/shared/close.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SCREEN_WIDTH":
            return {...state, screenWidth: action.payload};
        case "SET_CLICKED":
            return {...state, clicked: action.payload};
        default:
            return state;
    }
}

function Header() {
    const [state, dispatch] = useReducer(reducer,{screenWidth: window.innerWidth, clicked: false});
    useEffect(() => {
        Aos.init({duration: 400});
        window.addEventListener("resize", () => {
            dispatch({type: "SET_SCREEN_WIDTH", payload: window.innerWidth});
        })
        return () => {
            window.removeEventListener("resize", () => {
                dispatch({type: "SET_SCREEN_WIDTH", payload: window.innerWidth});
            })
        }
    },[])
    
    
    return (
        <header className='relative flex items-center justify-between h-[4.5rem] md:h-[3rem] lg:h-[4rem] pl-[1.7rem] md:pl-[1.8rem] pt-3 md:pt-0  lg:pt-[0rem] lg:ml-[3rem]  pr-[1.7rem]  md:pr-0 '>
            <button className='lg:pt-[1rem]'  ><img src={logo} height={40} alt="" /></button>
            <hr className='absolute left-[7rem] border-none h-[0.2rem] opacity-30 bg-[#979797] z-20 lg:w-[473px] invisible lg:visible lg:mt-[1rem]'/>
            <div className='hidden md:block h-[100%]'><NavItems/></div>
            <button className='z-40 md:hidden' onClick={() => dispatch({type: "SET_CLICKED", payload: !state.clicked})}><img src={!state.clicked? menuBar:close} alt="" /></button>
            {state.clicked?
            <div style={{opacity:0.9}} data-aos="fade-left" className={`z-30 absolute right-0 top-0 flex flex-col gap bg-[#1f232d] opacity-90 w-[68%] h-[100vh] pt-[7rem] pl-[2rem]`}>
                <NavItems />
            </div>:
            null}
        </header>
    );
}

export default Header;