import { useState } from "react";

function Home() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <div className=" flex flex-col mt-[2rem] items-center">
            <section className="text-center h-[276px] w-[327px]">
                <h2 className="text-[#D0D6F9] tracking-[2.7px] font-barlowCondensed font-normal text-[1rem]">
                    SO, YOU WANT TO TRAVEL TO 
                </h2>
                <h1 className="text-white font-bellefair text-[80px] mt-1 mb-5">
                    SPACE
                </h1>
                <p className="text-[#D0D6F9] leading-[25px] text-[15px] font-barlow">
                    Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
                </p>
            </section>
            <div className="group/item relative flex justify-center items-center  mt-[7rem] mb-[2.6rem]">
                <button onClick={handleClick} className={`group/edit ${clicked?'animate-ping':''} rounded-full z-20 font-bellefair tracking-[1.25px] text-[20px] h-[150px] w-[150px] bg-white text-[#0B0D17]`}>
                    EXPLORE
                </button>
                <div className={`group-hover/item:visible group-hover/item:animate-ping invisible absolute z-10 opacity-30 bg-[#979797] w-[12.5rem] h-[12.5rem] rounded-full`}></div>
            </div>
        </div>
    );
}

export default Home;