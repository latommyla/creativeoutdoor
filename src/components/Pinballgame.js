import React from 'react'
import image1 from './imgs/327.png'
import image2 from './imgs/1080.png'
import image3 from './imgs/1306.png'
import image4 from './imgs/2030.png'
import image5 from './imgs/2558.png'


export default function Pinballgame() {
    return (
        <div id="home" class="flex m-auto md:m-auto pt-20">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <h1 class="font-roboto text-5xl text-amber-400 pb-6"> Pinball Game List </h1>
                </div>
                <div class="w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 md:grid-cols-4 m-auto">
                    <div>
                        <img src={ image1 } class="w-56 h-56 rounded-lg" alt="60games" />
                    </div> 
                    <div>
                        <img src={ image2 } class="w-56 h-56 rounded-lg" alt="412games" />
                    </div>
                    <div>
                        <img src={ image3 } class="w-56 h-56 rounded-lg" alt="750games" />
                    </div>
                    <div>
                        <img src={ image4 } class="w-56 h-56 rounded-lg" alt="1162games" />
                    </div>
                    <div>
                        <img src={ image5 } class="w-56 h-56 rounded-lg" alt="2448games" />
                    </div>
                </div>
            </div>
        </div>
    );
}