import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'

const Navbar = ({loginOpen,setLoginOpen}) => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav class="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-transparent text-white shadow-[0px_4px_25px_0px_#0000000D] transition-all">

            <h1 className='text-4xl font-bold text-indigo-600'>CineSage</h1>

            <ul class="md:flex hidden items-center gap-10">
                <li><a class="hover:text-gray-500/80 transition" href="#">Home</a></li>
                <li><a class="hover:text-gray-500/80 transition" href="#">Movies</a></li>
                <li><a class="hover:text-gray-500/80 transition" href="#">Webseries</a></li>
            </ul>

            <button type="button" class="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full cursor-pointer hover:opacity-80 duraiton-150" onClick={()=>{
                    setLoginOpen(!loginOpen)
                }}>
                {loginOpen? "Logout":"Login"}
            </button>

            <button onClick={()=>{setOpenMenu(!openMenu)}} aria-label="menu-btn" type="button" class="menu-btn inline-block md:hidden active:scale-90 transition">
                <MdMenu />
            </button>

            {openMenu && 
                <div class="mobile-menu absolute top-[70px] left-0 w-full bg-black p-6 text-white md:hidden">
                <ul class="flex flex-col space-y-4 text-lg">
                    <li><a href="#" class="text-sm">Home</a></li>
                    <li><a href="#" class="text-sm">Movies</a></li>
                    <li><a href="#" class="text-sm">Webseries</a></li>
                </ul>

                <button type="button" class="bg-white  cursor-pointer text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full" onClick={()=>{
                    setLoginOpen(!loginOpen)
                }}>
                    {loginOpen? "Logout":"Login"}
                </button>
            </div>
            }
        </nav>
    )
}

export default Navbar