import React from 'react'

import image1 from './imgs/60manual.png'
import image2 from './imgs/412manual.png'
import image3 from './imgs/1162manual.png'
import image4 from './imgs/3000manual.png'
import image5 from './imgs/4500manual.png'
import image6 from './imgs/4701manual.png'


export default function PlayerManual2p() {
    return (
        <div class="flex m-auto md:m-auto pt-8 md:pt-10">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                <h1 class="font-raleway text-2xl md:text-5xl text-amber-400 md:pb-6"><span class="font-roboto"> 2 </span> PLAYER MANUALS </h1>
                </div>
                <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 md:grid-cols-3 m-auto">
                    <div class="m-auto">
                        <a target="_blank" rel="noopener noreferrer">
                            <img src={image1} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="60 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a target="_blank" rel="noopener noreferrer">
                            <img src={image2} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="412 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a target="_blank" rel="noopener noreferrer">
                            <img src={image3} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="1162 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a target="_blank" rel="noopener noreferrer">
                            <img src={image4} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="3000 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a target="_blank" rel="noopener noreferrer">
                            <img src={image5} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="4500 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a target="_blank" rel="noopener noreferrer">
                            <img src={image6} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="4701 Game Manual" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}