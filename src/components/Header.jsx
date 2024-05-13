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
        <header className='bg-red-400 relative flex items-center justify-between h-[5rem] pl-[1.5rem] pr-[1.5rem] md:pr-0 lg:h-[96px]'>
            <button><img src={logo} height={40} alt="" /></button>
                {/* {state.screenWidth> 768?
                <div className='flex'>
                    <hr className='text-red-700 w-[473px] md:w-0'/>
                    <NavItems/>
                </div>:
                    <button className='z-20' onClick={() => dispatch({type: "SET_CLICKED", payload: !state.clicked})}><img src={!state.clicked? menuBar:close} alt="" /></button>
                } */}
            <div className='flex hidden md:block'>
                    <hr className='text-red-700 lg:w-[473px] hidden'/>
                    <NavItems/>
                </div>
                <button className='z-20 md:hidden' onClick={() => dispatch({type: "SET_CLICKED", payload: !state.clicked})}><img src={!state.clicked? menuBar:close} alt="" /></button>
            {state.clicked?
            <div className={`z-10 absolute right-0 top-0 flex flex-col gap bg-[#1f232d] opacity-90 w-[70%] h-[100vh] pt-[7rem] pl-[2rem]`}>
                <NavItems />
            </div>:
            null}
        </header>
    );
}

export default Header;