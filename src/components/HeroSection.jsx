import React from "react";
import hero from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div class=" flex flex-col-reverse sm:flex-row mt-44 sm:mt-10 mb-20 sm:text-left text-center md:flex-col-reverse lg:flex-row h-[50vh] sm:h-[60vh] gap-8 sm:gap-20 items-center ">
      <div class="w-full lg:w-1/2">
        <h1 class="text-zinc-700 text-[3rem] sm:text-[4rem] font-black leading-[60px] sm:leading-[70px]">
          More than just <span className="text-np"> shorter links</span>
        </h1>
        <p class="text-gray-500/60 mt-3 text-xl">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div class="mt-6">
          <button
            class="bg-ng font-semibold text-xl text-white px-7 py-3 rounded-full hover:bg-np"
            type="button"
          >
            Get started
          </button>
        </div>
      </div>
      <div class="max-lg:hidden  w-full sm:w-1/2 flex justify-center">
        <img class="h-auto max-w-md" src={hero} alt="image" />
      </div>
    </div>
  );
};

export default HeroSection;
