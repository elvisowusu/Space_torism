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
        <header className='flex items-center justify-between lg:h-[96px]'>
            <button><img src={logo} height={40} alt="" /></button>
            <hr className='text-red-700 lg:w-[473px] md:w-0'/>

            <section>
                {state.screenWidth> 768?
                <NavItems/>:
                <>{
                    state.clicked?
                    null:
                    <button onClick={() => dispatch({type: "SET_CLICKED", payload: !state.clicked})}><img src={menuBar} alt="" /></button>
                }</>
            }
            </section>
            {state.clicked?
            <>
            <button><img src={close} onClick={() => dispatch({type: "SET_CLICKED", payload: !state.clicked})} alt="" /></button>
            <NavItems/>
            </>:
            null}
        </header>
    );
}

export default Header;