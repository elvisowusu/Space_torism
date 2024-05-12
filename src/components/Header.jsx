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
        <header className='relative flex items-center justify-between lg:h-[96px]'>
            <button><img src={logo} height={40} alt="" /></button>
            <>
                {state.screenWidth> 768?
                <div className='flex'>
                    <hr className='text-red-700 w-[473px] md:w-0'/>
                    <NavItems/>
                </div>:
                <>{
                    state.clicked?
                    null:
                    <button onClick={() => dispatch({type: "SET_CLICKED", payload: !state.clicked})}><img src={menuBar} alt="" /></button>
                }</>
            }
            </>
            {state.clicked?
            <div className='absolute right-0 top-0 flex flex-col gap'>
                <button><img src={close} onClick={() => dispatch({type: "SET_CLICKED", payload: !state.clicked})} alt="" /></button>
                <NavItems/>
            </div>:
            null}
        </header>
    );
}

export default Header;