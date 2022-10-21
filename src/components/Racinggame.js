import React from 'react'

import image1 from './imgs/107.png'
import image2 from './imgs/177.jpg'

import pdf107 from './pdfs/107racing.pdf'
import pdf177 from './pdfs/177racing.pdf'

import heading from './imgs/headings/racinggamelist.png'

export default function Pinballgame() {
    return (
        <div class="flex m-auto md:m-auto pt-4 md:pt-10 pb-4 md:pb-14">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <img src={heading} class="h-12 md:h-20 m-auto" alt="Racing Game List" />
                </div>
                <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 m-auto place-items-center">
                    <div>
                        <a href={pdf107} target="_blank" rel="noopener noreferrer">
                            <img src={image1} class="w-36 h-36 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1" alt="107games" title="107 Racing Games List" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf177} target="_blank" rel="noopener noreferrer">
                            <img src={image2} class="w-36 h-36 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1" alt="177games" title="177 Racing Games List" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}