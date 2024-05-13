import { useEffect, useReducer } from 'react';
import logo from '../assets/logo.png';
import menuBar from '../assets/menuBar.svg';
import NavItems from './NavItems';
import close from '../assets/close.svg';
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
        <header className='relative flex items-center justify-between h-[4.5rem] pl-[1.5rem] lg:mt-[2rem] lg:ml-[3rem]  pr-[1.5rem]  md:pr-0 '>
            <button><img src={logo} height={40} alt="" /></button>
                <hr className='absolute left-[7rem] border-none h-[0.2rem] opacity-30 bg-[#979797] z-20 lg:w-[473px] hidden lg:block'/>
                <div className='hidden md:block h-[100%]'><NavItems/></div>
                <button className='z-20 md:hidden' onClick={() => dispatch({type: "SET_CLICKED", payload: !state.clicked})}><img src={!state.clicked? menuBar:close} alt="" /></button>
            {state.clicked?
            <div className={`z-10 absolute right-0 top-0 flex flex-col gap bg-[#1f232d] opacity-90 w-[67.5%] h-[100vh] pt-[7rem] pl-[2rem]`}>
                <NavItems />
            </div>:
            null}
        </header>
    );
}

export default Header;