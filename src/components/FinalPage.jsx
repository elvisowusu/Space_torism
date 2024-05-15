import React,{useReducer} from "react"
import Header from "../components/Header"
import Home from "../components/Home"
import Destination from "./Destination"
export const UserContext = React.createContext()


const reducer=(state,action) => {
    switch (action.type) {
        case 'CLICKED':
            return { ...state, clicked:!state.clicked}
        case 'Destination':
            return {...state, destination:!state.destination}
        default:
            return state
    }
}



function FinalPage() {

    const [state, dispatch] =useReducer(reducer,{clicked:false,destination:false})

    const handleClick=()=>{
        dispatch({type:'CLICKED'})
    }
    const handleDestination=()=>{
        dispatch({type:'Destination'})
    }

    const content ={
         handleClick,
        exploreState:state.clicked,
            handleDestination,
        destinationState:state.destination,
    }

    return (
        <div className={`bg-[url(src/assets/home/background-home-mobile.jpg)] md:bg-[src/assets/home/background-home-tablet.jpg)] lg:bg-[url(src/assets/home/background-home-desktop.jpg)] bg-no-repeat  lg:bg-no-repeat bg-cover overflow-hidden h-screen lg:h-[100vh]`}>
            <UserContext.Provider value={content}>
                <Header/>
                {content.destinationState?<Destination/>: <Home/>}
            </UserContext.Provider>
        </div>
    );
}

export default FinalPage;