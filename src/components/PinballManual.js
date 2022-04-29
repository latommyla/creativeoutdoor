import React from 'react'

import image1 from './imgs/manual322pb.png'
import image2 from './imgs/manual1306pb.png'
import image3 from './imgs/pinballarcade.png'

import pdf1 from './pdfs/manuals/pb322manual.pdf'
import pdf2 from './pdfs/manuals/pb1306manual.pdf'
import pdf3 from './pdfs/manuals/pinballarcadelayout.pdf'


export default function PinballManual() {
    return (
        <div class="flex m-auto md:m-auto pt-8 md:pt-14">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <h1 class="font-raleway text-2xl md:text-5xl text-amber-400 md:pb-6"> PINBALL MANUALS </h1>
                </div>
                <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 md:grid-cols-3 m-auto">
                    <div class="m-auto">
                        <a href={pdf1} target="_blank" rel="noopener noreferrer">
                            <img src={image1} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="60 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a href={pdf2} target="_blank" rel="noopener noreferrer">
                            <img src={image2} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="412 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a href={pdf3} target="_blank" rel="noopener noreferrer">
                            <img src={image3} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="412 Game Manual" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}