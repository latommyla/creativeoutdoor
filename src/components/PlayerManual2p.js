import React from 'react'

import image1 from './imgs/60manual.png'
import image2 from './imgs/412manual.png'
import image3 from './imgs/1162manual.png'
import image4 from './imgs/3000manual.png'
import image5 from './imgs/4500manual.png'
import image6 from './imgs/4701manual.png'
import image7 from './imgs/6296manual.png'

import pdf1 from './pdfs/manuals/manual2p60.pdf'
import pdf2 from './pdfs/manuals/manual2p412.pdf'
import pdf3 from './pdfs/manuals/manual2p1162.pdf'
import pdf4 from './pdfs/manuals/manual2p3000.pdf'
import pdf5 from './pdfs/manuals/manual2p4500.pdf'
import pdf6 from './pdfs/manuals/manual2p4701.pdf'

import heading from './imgs/headings/2playermanuals.png'

export default function PlayerManual2p() {
    return (
        <div class="flex m-auto md:m-auto pt-8 md:pt-10">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <img src={heading} class="h-10 md:h-20 m-auto" alt="2 Player Manuals" />
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
                            <img src={image3} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="1162 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a href={pdf4} target="_blank" rel="noopener noreferrer">
                            <img src={image4} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="3000 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a href={pdf5} target="_blank" rel="noopener noreferrer">
                            <img src={image5} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="4500 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a href={pdf6} target="_blank" rel="noopener noreferrer">
                            <img src={image6} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="4701 Game Manual" />
                        </a>
                    </div>
                    <div class="m-auto">
                        <a href={pdf6} target="_blank" rel="noopener noreferrer">
                            <img src={image7} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="6296 Game Manual" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}