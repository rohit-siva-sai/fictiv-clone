import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";


const CapabilityModel = ({ imgUrl, head, content }) => {
  return (
    <div className="bg-white border  hover:bg-teal-500 group cursor-pointer">
      <div className="">
        <picture>
          <img src={imgUrl} alt="" className="rounded-sm md:h-[240px] " />
        </picture>
      </div>
      <div className="px-6 pt-1">
        <p className="text-start py-3 flex items-center font-semibold text-base group-hover:text-white ">
          {head}
          <MdKeyboardArrowRight className="pt-1 text-xl" />
        </p>
        <p className="pb-4 leading-5  text-gray-400 text text-[13px] group-hover:text-white font-medium ">
          {content}
        </p>
      </div>
    </div>
  );
};

export default CapabilityModel;
