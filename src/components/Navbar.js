import React from 'react'
import Logo from './imgs/creativearcadeslogo.png'

export default function Navbar() {
    return (
        <div class="shadow-md sm:fixed md:fixed z-10 w-full md:w-screen bg-white select-none">
            <div class="flex flex-col max-w-screen-lg md:max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div class="p-3 flex flex-row items-center m-auto justify-between">
                    <a to="home" class="text-md font-semibold tracking-widest text-black m-auto uppercase rounded-lg hover:text-black">
                        <img src={Logo} class="flex justify-center h-18 w-44" />
                    </a>
                </div>
            </div>
        </div>
    );
}