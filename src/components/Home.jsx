import { useContext,useState,useEffect} from "react";
import { UserContext } from "./FinalPage";

function Home() {
    const exploreContent = useContext(UserContext)
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="flex flex-col lg:flex-row lg:justify-evenly lg:gap-0 mt-[2rem] lg:mt-[14rem] lg:h-[14rem] lg:mr-[11rem] lg:items-end items-center ">
            <section className="text-center lg:text-left h-[276px] w-[327px] md:mt-[2rem] lg:mt-0 lg:mr-[23rem] md:h-full md:w-[400px]">
                <h2 className="text-[#D0D6F9] tracking-[2.7px] md:tracking-[3px] lg:tracking-[4px] font-barlowCondensed font-normal text-[1rem] lg:text-[1.2rem]">
                    SO, YOU WANT TO TRAVEL TO 
                </h2>
                <h1 className="text-white font-bellefair text-[80px] md:text-[140px] lg:text-[140px] md:leading-[150px] lg:leading-[170px] mt-1 mb-5 md:mb-2">
                    SPACE
                </h1>
                <p className="text-[#D0D6F9] leading-[25px] md:leading-[28px] text-[15px] md:text-[15px] font-barlow">
                    Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
                </p>
            </section>
            <div className="group/item relative flex justify-center items-center  mt-[7rem] md:mt-[9.4rem] lg:mt-0 mb-[2rem] md:mb-0">
                <button onClick={ isMobile? exploreContent.handleClick:exploreContent.handleDestination} className={`md:absolute group/edit ${exploreContent.exploreState?'animate-ping duration-100':''} rounded-full z-20 font-bellefair tracking-[1.25px] md:tracking-[1.5px] text-[20px] md:text-[30px] h-[150px] md:h-[170px] lg:h-[200px] w-[150px] md:w-[170px] lg:w-[200px] bg-white text-[#0B0D17]`}>
                    EXPLORE
                </button>
                <div className={`group-hover/item:visible group-hover/item:animate-ping invisible absolute z-10 opacity-30 bg-[#979797] w-[12.5rem] lg:w-[13rem] h-[12.5rem] lg:h-[13rem] rounded-full`}></div>
            </div>
        </div>
    );
}

export default Home;