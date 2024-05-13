

function Home() {
    return (
        <div className="bg-[url(src\assets\homeBackground.jpg)] flex flex-col items-center">
            <section className="text-center h-[276px] w-[327px]">
                <h2 className="text-[#D0D6F9] tracking-[2.7px] font-barlowCondensed font-normal text-[1rem]">
                    SO, YOU WANT TO TRAVEL TO 
                </h2>
                <h1 className="text-white font-bellefair text-[80px]">
                    SPACE
                </h1>
                <p className="text-[#D0D6F9] leading-[25px] text-[15px] font-barlow">
                    Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
                </p>
            </section>
            <button className="rounded-full mt-[9.35rem] mb-[2.6rem] font-bellefair tracking-[1.25px] text-[20px] h-[150px] w-[150px] bg-white text-[#0B0D17]">
                EXPLORE
            </button>
        </div>
    );
}

export default Home;