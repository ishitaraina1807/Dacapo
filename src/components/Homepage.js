import React from "react";
import sampleImage from "./sampleImage.jpg"

export default function Homepage() {
  return (
    <div className="flex">
      <div className="text-white pt-6 lg:pt-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 font-normal leading-normal h-full">
        <h1 className="text-white font-GillSans text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          MUSIC <br /> REDEFINED
        </h1>
        <p className="text-gray-400 font-poppins text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl w-full  pt-6">
          DaCapo is the first vetted and gamified AI music education platform
          designed to connect young musicians based on their abilities, while also
          endeavoring to better prepare them on their instruments within a band
          setting.
        </p>
        <div className="py-10 text-black flex flex-col sm:flex-row gap-4 sm:gap-16 text-lg sm:text-xl md:text-lg font-poppins font-bold">
          <button className="bg-[#A9FF5C] py-2 px-6 rounded-md flex items-center gap-2">
            Start Vetting Process
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM1 6.75H39V5.25H1V6.75Z" fill="#1F1F1F" />
            </svg>
          </button>
          <button className="bg-[#CB5CFF] rounded-md px-6 py-2 hover:cursor">
            Contact Us
          </button>
        </div>
      </div>
      {/*grid section */}
      <div className="pt-6 lg:pt-20 flex flex-col gap-8">
        <div className="flex justify-center gap-16 items-center ">
          <img className="rounded-3xl w-1/3" src={sampleImage} alt="sample img" />
          <img className="rounded-3xl w-1/3" src={sampleImage} alt="sample img" />
        </div>
        <div className="flex gap-16 overflow-hidden">
          <img className="rounded-3xl w-1/3" src={sampleImage} alt="sample img" />
          <img className="rounded-3xl w-1/3" src={sampleImage} alt="sample img" />
          <img className="rounded-3xl w-1/3" src={sampleImage} alt="sample img" />
        </div>
        <div className="flex justify-center gap-16 items-center ">
          <img className="rounded-3xl w-1/3" src={sampleImage} alt="sample img" />
          <img className="rounded-3xl w-1/3" src={sampleImage} alt="sample img" />
        </div>
      </div>
    </div>

  );
}
