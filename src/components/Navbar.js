import React from 'react'
import Logo from './imgs/creativearcadeslogo.png'

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="px-2 sm:px-4 py-2.5 shadow m-auto">
            <div class="flex flex-wrap justify-between items-center mx-auto md:max-w-screen-lg">
                <Link to="/" class="flex items-center">
                    <img src={Logo} class="h-18 w-36" alt="Creative Arcades Logo" />
                </Link>
                <div class="flex md:order-2">
                    <a href="https://creative-arcades.com" target="_blank" rel="noopener noreferrer"><button type="button" class="text-black md:hover:text-white bg-sky-200 md:hover:bg-amber-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Back to Website</button></a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/" class="block py-2 pr-4 pl-3 md:p-0 md:hover:text-amber-500"> Game List</Link>
                        </li>
                        <li>
                            <Link to="manuals" class="block py-2 pr-4 pl-3 md:border-0 md:p-0 md:hover:text-amber-500"> Manuals </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}