import React from "react";
import { TbBrandReact } from "react-icons/tb";
import { BsClipboard2Data } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";

const FeatureSection = () => {
  return (
    <div className="mt-2 sm:mt-12 pt-12">
      <div className="text-center flex justify-center">
        <div className="w-full sm:w-1/2">
          <h2 className="text-[#35323d] text-[2rem] sm:text-[3rem] font-black leading-[60px] sm:leading-[70px]">
            Advance statistics
          </h2>
          <p className="text-gray-500/60 mt-3 text-xl">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
      <div className="flex sm:text-left text-center items-start w-auto sm:h-[40vh] justify-between sm:flex-row flex-col mt-32 md:gap-4 sm:gap-4  gap-14  after:content-[] after:bg-red after:w-full">
        <div className="bg-white flex flex-col self-start items-center sm:items-start pt-16 px-7 pb-8 rounded-lg relative">
          <div className="bg-[#3a3052] rounded-full p-5 absolute -top-10">
            <TbBrandReact className="text-2xl text-[#4DEEEA]" />
          </div>
          <h5 className="text-[#35323d] text-lg sm:text-2xl font-black">
            Brand Recognition
          </h5>
          <p className="text-gray-500/60 mt-3 text-base">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="bg-white flex flex-col self-center items-center sm:items-start pt-16 px-7 pb-8 rounded-lg relative">
          <div className="bg-[#3a3052] rounded-full p-5 absolute -top-10">
            <BsClipboard2Data className="text-2xl text-[#4DEEEA]" />
          </div>
          <h5 className="text-[#35323d] text-lg sm:text-2xl font-black">
            Detailed Records
          </h5>
          <p className="text-gray-500/60 mt-3 text-base">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="bg-white flex flex-col self-end items-center sm:items-start pt-16 px-7 pb-8 rounded-lg relative">
          <div className="bg-[#3a3052] rounded-full p-5 absolute -top-10">
            <MdEditDocument className="text-2xl text-[#4DEEEA]" />
          </div>
          <h5 className="text-[#35323d] text-lg sm:text-2xl font-black">
            Fully Customizable
          </h5>
          <p className="text-gray-500/60 mt-3 text-base">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
