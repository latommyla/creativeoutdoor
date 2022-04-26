import React from 'react'
import image1 from './imgs/60.jpg'
import image2 from './imgs/412.jpg'
import image3 from './imgs/1162.jpg'
import image4 from './imgs/3000.png'
import image5 from './imgs/4701.png'


export default function Home() {
    return (
        <div id="home" class="flex m-auto md:m-auto pt-44">
            <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto">
                <div class="text-center">
                    <h1 class="font-roboto text-5xl text-amber-400 pb-6"> Arcade Game List </h1>
                </div>
                <div class="w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 md:grid-cols-4 m-auto">
                    <div>
                        <img src={ image1 } class="w-56 h-56 rounded-lg" />
                    </div> 
                    <div>
                        <img src={ image2 } class="w-56 h-56 rounded-lg" />
                    </div>
                    <div>
                        <img src={ image3 } class="w-56 h-56 rounded-lg" />
                    </div>
                    <div>
                        <img src={ image4 } class="w-56 h-56 rounded-lg" />
                    </div>
                    <div>
                        <img src={ image5 } class="w-56 h-56 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}