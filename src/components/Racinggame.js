import React from "react";

import image1 from "./imgs/107.png";
import image2 from "./imgs/177.jpg";
import image3 from "./imgs/205.png";

import pdf107 from "./pdfs/107racing.pdf";
import pdf177 from "./pdfs/177racing.pdf";
import pdf205 from "./pdfs/205racing.pdf";

export default function Pinballgame() {
  return (
    <div class="flex m-auto md:m-auto pt-4 md:pt-24 pb-4 md:pb-14">
      <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
        <div class="text-center mt-4">
          <h1 class="font-silkscreen text-4xl md:text-7xl md:mb-10 text-white">
            {" "}
            Racing Game List{" "}
          </h1>
        </div>
        <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 m-auto place-items-center">
          <div>
            <a href={pdf107} target="_blank" rel="noopener noreferrer">
              <img
                src={image1}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="107games"
                title="107 Racing Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf177} target="_blank" rel="noopener noreferrer">
              <img
                src={image2}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="177games"
                title="177 Racing Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf205} target="_blank" rel="noopener noreferrer">
              <img
                src={image3}
                class="w-44 h-44 md:w-56 md:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="177games"
                title="177 Racing Games List"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
