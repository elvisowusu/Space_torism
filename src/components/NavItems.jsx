


function NavItems() {
    const items = [' HOME', ' DESTINATION', ' CREW', ' TECHNOLOGY'];
    return (
        <nav className="relative h-full md:pb-5 lg:pb-0 lg:pl-[1rem] lg:pr-[5rem] lg:z-10">
            <div className="absolute invisible md:visible h-full w-full inset-0 bg-white bg-opacity-10 backdrop-blur-lg"></div>
            <ul className='flex flex-col justify-evenly md:items-center md:flex-row gap-[2rem] text-[#FFFFFF] font-barlowCondensed md:gap-[1rem] lg:gap-[2rem] md:w-[32rem] md:opacity-70 md:h-[100%] lg:w-[830px]'>
                {items.map((item, index) => (
                    <li key={index} className='cursor-pointer hover:text-[#D0D6F9] hover:underline underline-offset-[0.6rem] md:underline-offset-[1.5rem] tracking-[2.7px] md:tracking-[2.36px] md:test-[14px] transition ease-in-out delay-150'>
                        <span className="md:invisible lg:visible font-bold  mr-2">{index.toString().padStart(2, '0')}</span>{item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavItems;