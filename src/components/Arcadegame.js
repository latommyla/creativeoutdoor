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


export default function Arcadegame() {
    return (
        <div id="home" class="flex m-auto md:m-auto pt-44">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
                <div class="text-center">
                    <h1 class="font-roboto text-5xl text-amber-400 pb-6"> Arcade Game List </h1>
                </div>
                <div class="w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 md:grid-cols-4 m-auto">
                    <div>
                        <img src={ image1 } class="w-56 h-56 rounded-lg" alt="60games" />
                    </div> 
                    <div>
                        <img src={ image2 } class="w-56 h-56 rounded-lg" alt="412games" />
                    </div>
                    <div>
                        <img src={ image6 } class="w-56 h-56 rounded-lg" alt="750games" />
                    </div>
                    <div>
                        <img src={ image3 } class="w-56 h-56 rounded-lg" alt="1162games" />
                    </div>
                    <div>
                        <img src={ image7 } class="w-56 h-56 rounded-lg" alt="2448games" />
                    </div>
                    <div>
                        <img src={ image4 } class="w-56 h-56 rounded-lg" alt="3000games" />
                    </div>
                    <div>
                        <img src={ image8 } class="w-56 h-56 rounded-lg" alt="3502games" />
                    </div>
                    <div>
                        <img src={ image9 } class="w-56 h-56 rounded-lg" alt="4539games" />
                    </div>
                    <div>
                        <img src={ image5 } class="w-56 h-56 rounded-lg" alt="4701games" />
                    </div>
                    <div>
                        <img src={ image10 } class="w-56 h-56 rounded-lg" alt="6296games" />
                    </div>
                    <div>
                        <img src={ image11 } class="w-56 h-56 rounded-lg" alt="9043games" />
                    </div>
                </div>
            </div>
        </div>
    );
}