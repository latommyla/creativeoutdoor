import React from "react";

import image1 from "./imgs/60.jpg";
import image2 from "./imgs/412.jpg";
import image3 from "./imgs/1162.jpg";
import image4 from "./imgs/3000.png";
import image5 from "./imgs/4701.png";
import image6 from "./imgs/750.png";
import image7 from "./imgs/2448.png";
import image8 from "./imgs/3500.jpg";
import image9 from "./imgs/4500.jpg";
import image10 from "./imgs/6296.png";
import image11 from "./imgs/9043.png";
import image12 from "./imgs/5100.png";
import image13 from "./imgs/516.png";

import pdf60 from "./pdfs/60.pdf";
import pdf412 from "./pdfs/412.pdf";
import pdf516 from "./pdfs/516.pdf";
import pdf750 from "./pdfs/750.pdf";
import pdf1162 from "./pdfs/1162.pdf";
import pdf2448 from "./pdfs/2448.pdf";
import pdf3000 from "./pdfs/3000.pdf";
import pdf3502 from "./pdfs/3516.pdf";
import pdf4539 from "./pdfs/4539.pdf";
import pdf4701 from "./pdfs/4701.pdf";
import pdf5100 from "./pdfs/5100.pdf";
import pdf6296 from "./pdfs/6296.pdf";
import pdf9043 from "./pdfs/9043.pdf";

export default function Arcadegame() {
  return (
    <div class="flex m-auto md:m-auto pt-4 md:pt-10">
      <div class="w-screen md:w-screen md:max-w-screen-2xl m-auto md:m-auto select-none">
        <div class="text-center mt-4">
          <p class="font-silkscreen text-4xl md:text-7xl md:mb-10 text-white drop-shadow-2xl">
            {" "}
            Arcade Game List{" "}
          </p>
        </div>
        <div class="p-4 md:p-0 w-screen md:max-w-screen-lg flex grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 m-auto place-items-center">
          <div>
            <a href={pdf60} target="_blank" rel="noopener noreferrer">
              <img
                src={image1}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="60games"
                title="60 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf412} target="_blank" rel="noopener noreferrer">
              <img
                src={image2}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="412games"
                title="412 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf516} target="_blank" rel="noopener noreferrer">
              <img
                src={image13}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="412games"
                title="412 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf750} target="_blank" rel="noopener noreferrer">
              <img
                src={image6}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="750games"
                title="750 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf1162} target="_blank" rel="noopener noreferrer">
              <img
                src={image3}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="1162games"
                title="1162 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf2448} target="_blank" rel="noopener noreferrer ">
              <img
                src={image7}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="2448games"
                title="2448 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf3000} target="_blank" rel="noopener noreferrer ">
              <img
                src={image4}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="3000games"
                title="3000 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf3502} target="_blank" rel="noopener noreferrer ">
              <img
                src={image8}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="3502games"
                title="3502 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf4539} target="_blank" rel="noopener noreferrer ">
              <img
                src={image9}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="4539games"
                title="4539 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf4701} target="_blank" rel="noopener noreferrer ">
              <img
                src={image5}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="4701games"
                title="4701 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf5100} target="_blank" rel="noopener noreferrer ">
              <img
                src={image12}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="6296games"
                title="6296 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf6296} target="_blank" rel="noopener noreferrer ">
              <img
                src={image10}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="6296games"
                title="6296 Games List"
              />
            </a>
          </div>
          <div>
            <a href={pdf9043} target="_blank" rel="noopener noreferrer ">
              <img
                src={image11}
                class="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-lg md:hover:opacity-80 transition ease-in-out hover:-translate-y-1"
                alt="9043games"
                title="9043 Games List"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
