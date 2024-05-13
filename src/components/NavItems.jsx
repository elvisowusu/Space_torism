


function NavItems() {
    const items = [' HOME', ' DESTINATION', ' CREW', ' TECHNOLOGY'];
    return (
        <nav className="h-full md:bg-[#979797]">
            <ul className='flex flex-col justify-evenly items-center md:flex-row gap-[2rem] text-[#FFFFFF] md:gap-[1rem] lg:gap-[2rem] md:w-[35rem] md:opacity-70 md:h-[100%] lg:w-[830px]'>
                {items.map((item, index) => (
                    <li key={index} className=''>
                        <span className="md:hidden font-bold tracking-widest mr-2 ">{index.toString().padStart(2, '0')}</span>{item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavItems;