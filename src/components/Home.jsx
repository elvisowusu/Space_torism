

function Home() {
    return (
        <div className="bg-[url(src\assets\homeBackground.jpg)] flex flex-col items-center ">
            <section className="text-center h-[276px] w-[327px]">
                <h2>
                    SO, YOU WANT TO TRAVEL TO 
                </h2>
                <h1 >
                    SPACE
                </h1>
                <p className="text-[#D0D6F9]">
                    Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
                </p>
            </section>
            <button className="rounded h-[150px] w-[150px]">
                EXPLORE
            </button>
        </div>
    );
}

export default Home;