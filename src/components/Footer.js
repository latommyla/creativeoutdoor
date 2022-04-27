import React from 'react'
import Logo from './imgs/creativearcadeslogo.png'

export default function Footer() {
    return (
        <div class="p-4 rounded-lg md:px-6 md:py-8 dark:bg-gray-800 mt-20 shadow">
            <div class="md:max-w-screen-xl m-auto">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://creative-arcades.com" class="flex items-center mb-4 sm:mb-0">
                    <img src={Logo} class="mr-3 h-12" alt="Creative Arcades Logo" />
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <span class="block text-sm sm:text-center">© 2022 <a href="https://creative-arcades.com" class="">Creative Arcades</a></span>
            </div>
        </div>
    );
}