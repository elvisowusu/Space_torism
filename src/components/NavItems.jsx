


function NavItems() {
    const items = ['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY'];
    return (
        <nav>
            <ul className='flex flex-col justify-evenly md:flex-row lg:gap-[2rem] md:gap-[1rem]  lg:w-[830px]'>
                {items.map((item, index) => (
                    <li key={index} className=''>{item}</li>
                ))}
            </ul>
        </nav>
    );
}

export default NavItems;