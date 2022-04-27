import React from 'react'

import image1 from './imgs/60.jpg'
import image2 from './imgs/412.jpg'
import image3 from './imgs/1162.jpg'
import image4 from './imgs/3000.png'
import image5 from './imgs/4701.png'
import image6 from './imgs/750.png'
import image7 from './imgs/2448.png'
import image8 from './imgs/3502.jpg'
import image9 from './imgs/4539.png'
import image10 from './imgs/6296.png'
import image11 from './imgs/9043.png'

import pdf60 from './pdfs/60.pdf'
import pdf412 from './pdfs/412.pdf'
import pdf750 from './pdfs/750.pdf'
import pdf1162 from './pdfs/1162.pdf'
import pdf2448 from './pdfs/2448.pdf'
import pdf3000 from './pdfs/3000.pdf'
import pdf3502 from './pdfs/3502.pdf'
import pdf4539 from './pdfs/4539.pdf'
import pdf4701 from './pdfs/4701.pdf'
import pdf6296 from './pdfs/6296.pdf'
import pdf9043 from './pdfs/9043.pdf'


export default function Arcadegame() {
    return (
        <div class="flex m-auto md:m-auto pt-8 md:pt-44">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <h1 class="font-roboto text-2xl md:text-5xl text-amber-400 md:pb-6"> Arcade Game List </h1>
                </div>
                <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-4 md:grid-cols-4 m-auto">
                    <div>
                        <a href={pdf60} target="_blank" rel="noopener noreferrer">
                            <img src={image1} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="60games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf412} target="_blank" rel="noopener noreferrer">
                            <img src={image2} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="412games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf750} target="_blank" rel="noopener noreferrer">
                            <img src={image6} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="750games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf1162} target="_blank" rel="noopener noreferrer">
                            <img src={image3} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="1162games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf2448} target="_blank" rel="noopener noreferrer ">
                            <img src={image7} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="2448games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf3000} target="_blank" rel="noopener noreferrer ">
                            <img src={image4} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="3000games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf3502} target="_blank" rel="noopener noreferrer ">
                            <img src={image8} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="3502games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf4539} target="_blank" rel="noopener noreferrer ">
                            <img src={image9} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="4539games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf4701} target="_blank" rel="noopener noreferrer ">
                            <img src={image5} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="4701games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf6296} target="_blank" rel="noopener noreferrer ">
                            <img src={image10} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="6296games" />
                        </a>
                    </div>
                    <div>
                        <a href={pdf9043} target="_blank" rel="noopener noreferrer ">
                            <img src={image11} class="w-20 h-20 md:w-56 md:h-56 rounded-lg hover:opacity-80" alt="9043games" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}