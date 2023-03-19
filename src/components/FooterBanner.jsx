import React from "react";

const FooterBanner = () => {
  return (
    <div className=" text-center flex flex-col justify-center py-10 items-center gap-2">
      <h2 className="text-slate-100 px-2 text-[2rem] sm:text-[2rem] font-black leading-[60px] sm:leading-[70px]">
        Let's boost your links today
      </h2>
      <button
        className="bg-ng font-semibold text-xl text-white px-7 py-3 rounded-full hover:bg-np w-max"
        type="button"
      >
        Get started
      </button>
    </div>
  );
};

export default FooterBanner;
