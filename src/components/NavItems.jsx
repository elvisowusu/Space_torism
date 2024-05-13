


function NavItems() {
    const items = [' HOME', ' DESTINATION', ' CREW', ' TECHNOLOGY'];
    return (
        <nav className="relative h-full lg:pl-[1rem] lg:pr-[5rem] lg:z-10">
            <div className="absolute invisible md:visible h-full w-full md:bg-[#979797] opacity-5"></div>
            <ul className='flex flex-col justify-evenly md:items-center md:flex-row gap-[2rem] text-[#FFFFFF] font-barlowCondensed md:gap-[1rem] lg:gap-[2rem] md:w-[32rem] md:opacity-70 md:h-[100%] lg:w-[830px]'>
                {items.map((item, index) => (
                    <li key={index} className='cursor-pointer hover:underline underline-offset-[1.5rem] tracking-[2.7px] md:tracking-[2.36px] md:test-[14px]'>
                        <span className="md:hidden lg:inline-flex font-bold  mr-2">{index.toString().padStart(2, '0')}</span>{item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavItems;