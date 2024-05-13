


function NavItems() {
    const items = [' HOME', ' DESTINATION', ' CREW', ' TECHNOLOGY'];
    return (
        <nav className="h-full md:bg-[#979797] opacity-45 lg:pl-[1rem] lg:pr-[5rem] lg:z-10">
            <ul className='flex flex-col justify-evenly md:items-center md:flex-row gap-[2rem] text-[#FFFFFF] md:gap-[1rem] lg:gap-[2rem] md:w-[35rem] md:opacity-70 md:h-[100%] lg:w-[830px]'>
                {items.map((item, index) => (
                    <li key={index} className='cursor-pointer hover:underline underline-offset-[1.75rem]'>
                        <span className="md:hidden lg:inline-flex font-bold tracking-widest mr-2 ">{index.toString().padStart(2, '0')}</span>{item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavItems;