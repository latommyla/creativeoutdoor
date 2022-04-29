import React from 'react'

import image1 from './imgs/327.png'
import image2 from './imgs/1080.png'
import image3 from './imgs/1306.png'
import image4 from './imgs/2030.png'
import image5 from './imgs/2558.png'

import pb327 from './pdfs/327pb.pdf'
import pb1080 from './pdfs/1080pb.pdf'
import pb1306 from './pdfs/1306pb.pdf'
import pb2030 from './pdfs/2030pb.pdf'
import pb2558 from './pdfs/2558pb.pdf'


export default function Pinballgame() {
    return (
        <div class="flex m-auto md:m-auto pt-6 md:pt-20">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <h1 class="font-raleway text-2xl md:text-5xl text-amber-400 md:pb-6"> PINBALL GAME LIST </h1>
                </div>
                <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-4 md:grid-cols-4 m-auto">
                    <div>
                        <a href={pb327} target="_blank" rel="noopener noreferrer">
                            <img src={image1} class="w-20 h-20 md:w-56 md:h-56 rounded-lg md:hover:opacity-80" alt="327games" />
                        </a>
                    </div>
                    <div>
                        <a href={pb1080} target="_blank" rel="noopener noreferrer">
                            <img src={image2} class="w-20 h-20 md:w-56 md:h-56 rounded-lg md:hover:opacity-80" alt="1080games" />
                        </a>
                    </div>
                    <div>
                        <a href={pb1306} target="_blank" rel="noopener noreferrer">
                            <img src={image3} class="w-20 h-20 md:w-56 md:h-56 rounded-lg md:hover:opacity-80" alt="1306games" />
                        </a>
                    </div>
                    <div>
                        <a href={pb2030} target="_blank" rel="noopener noreferrer">
                            <img src={image4} class="w-20 h-20 md:w-56 md:h-56 rounded-lg md:hover:opacity-80" alt="2030games" />
                        </a>
                    </div>
                    <div>
                        <a href={pb2558} target="_blank" rel="noopener noreferrer">
                            <img src={image5} class="w-20 h-20 md:w-56 md:h-56 rounded-lg md:hover:opacity-80" alt="2558games" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}