import React from 'react'

import image1 from './imgs/107.png'
import image2 from './imgs/177.jpg'

import pdf107 from './pdfs/107racing.pdf'
import pdf177 from './pdfs/177racing.pdf'


export default function Pinballgame() {
    return (
        <div class="flex m-auto md:m-auto pt-6 md:pt-20">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <h1 class="font-raleway text-2xl md:text-5xl text-amber-400 md:pb-6"> RACING GAME LIST </h1>
                </div>
                <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-4 md:grid-cols-4 m-auto">
                    <div>
                        <a href={pdf107} target="_blank" rel="noopener noreferrer">
                            <img src={image1} class="w-20 h-20 md:w-56 md:h-56 rounded-lg md:hover:opacity-80" alt="60games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf177} target="_blank" rel="noopener noreferrer">
                            <img src={image2} class="w-20 h-20 md:w-56 md:h-56 rounded-lg md:hover:opacity-80" alt="412games" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}