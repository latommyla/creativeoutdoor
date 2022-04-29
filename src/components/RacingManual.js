import React from 'react'

import image1 from './imgs/racing129.png'

import pdf1 from './pdfs/manuals/racing129manual.pdf'

import heading from './imgs/headings/racingmanuals.png'

export default function RacingManual() {
    return (
        <div class="flex m-auto md:m-auto pt-4 md:pt-14">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <img src={heading} class="h-10 md:h-20 m-auto" alt="Racing Manuals" />
                </div>
                <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 md:grid-cols-3 m-auto">
                    <div class="m-auto">
                        <a href={pdf1} target="_blank" rel="noopener noreferrer">
                            <img src={image1} class="w-44 h-22 md:w-80 md:h-44 rounded-lg md:hover:opacity-80" alt="129 Racing Manual" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}