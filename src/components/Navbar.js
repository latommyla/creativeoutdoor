import React from 'react'
import Logo from './imgs/creativearcadeslogo.png'

export default function Navbar() {
    return (
        <nav class="px-2 sm:px-4 py-2.5 shadow m-auto">
            <div class="flex flex-wrap justify-between items-center mx-auto md:max-w-screen-xl">
                <a href="https://creative-arcades.com" class="flex items-center">
                    <img src={Logo} class="h-18 w-36" alt="Creative Arcades Logo" />
                </a>
                <div class="flex md:order-2">
                    <a href="https://creative-arcades.com" target="_blank" rel="noopener noreferrer"><button type="button" class="text-black hover:text-white bg-sky-200 hover:bg-amber-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Back to Website</button></a>
                </div>
                <div class=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a to="#" class="block py-2 pr-4 pl-3 md:p-0 md:hover:text-amber-500"> Game List</a>
                        </li>
                        <li>
                            <a to="./" class="block py-2 pr-4 pl-3 md:border-0 md:p-0 md:hover:text-amber-500"> Manuals </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}