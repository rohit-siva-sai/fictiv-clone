import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";

const Heading = ({ title, subTitle, bgImage }) => {
  return (
    <div className=" bg-[#f5f5f599] md:bg-transparent py-36 md:py-24 md:px-0 px-6 " >
      <div className="flex flex-col md:px-48  items-start ">
        <p className="uppercase text-gray-400 font-semibold md:text-xl text-lg  ">
          Capabilities
        </p>
        <p className="font-bold text-3xl md:text-6xl text-gray-700  ">{title}</p>
        <div className="flex flex-col space-y-2 py-6 ">
          {subTitle.map((item) => {
            return (
              <div className="flex space-x-2 items-baseline ">
                <FaRegCheckSquare className="text-teal-500 text-lg" />
                <p className="md:text-lg text-xl text-gray-500 font-bold">{item}</p>
              </div>
            );
          })}
        </div>
        <div className="py-3 w-fit md:block md:mx-0 mx-auto rounded-sm cursor-pointer px-12 bg-teal-500 hover:bg-teal-700 text-white font-semibold">
            Get Instant Quote
          </div>
      </div>
    </div>
  );
};

export default Heading;
