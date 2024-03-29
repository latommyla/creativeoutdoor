import React from "react";

import image1 from "./imgs/327.png";
import image2 from "./imgs/1080.png";
import image3 from "./imgs/1306.png";
import image4 from "./imgs/2030.png";
import image5 from "./imgs/2558.png";
import image6 from "./imgs/7403.jpg";

import pb327 from "./pdfs/327pb.pdf";
import pb1080 from "./pdfs/1080pb.pdf";
import pb1306 from "./pdfs/1306pb.pdf";
import pb2030 from "./pdfs/2030pb.pdf";
import pb2558 from "./pdfs/2558pb.pdf";
import pb7043 from "./pdfs/7403pb.pdf";

export default function Pinballgame() {
  return (
    <div class="flex m-auto md:m-auto pt-4 md:pt-24">
      <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
        <div class="text-center mt-4">
          <h1 class="font-silkscreen text-4xl md:text-7xl md:mb-10 text-white">
            Pinball Game List
          </h1>
        </div>
        <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 m-auto place-items-center">
          <div>
            <a href={pb327} target="_blank" rel="noopener noreferrer">
              <img
                src={image1}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="327games"
                title="327 Pinball Games List"
              />
            </a>
          </div>
          <div>
            <a href={pb1080} target="_blank" rel="noopener noreferrer">
              <img
                src={image2}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="1080games"
                title="1080 Pinball Games List"
              />
            </a>
          </div>
          <div>
            <a href={pb1306} target="_blank" rel="noopener noreferrer">
              <img
                src={image3}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="1306games"
                title="1306 Pinball Games List"
              />
            </a>
          </div>
          <div>
            <a href={pb2030} target="_blank" rel="noopener noreferrer">
              <img
                src={image4}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="2030games"
                title="2030 Pinball Games List"
              />
            </a>
          </div>
          <div>
            <a href={pb2558} target="_blank" rel="noopener noreferrer">
              <img
                src={image5}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="2558games"
                title="2558 Pinball Games List"
              />
            </a>
          </div>
          <div>
            <a href={pb7043} target="_blank" rel="noopener noreferrer">
              <img
                src={image6}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="7043games"
                title="7043 Pinball Games List"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
