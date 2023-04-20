import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Dependable = () => {
  return (
    <div className="md:py-20 py-12 " >
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-4 md:gap-x-4 px-4 md:px-0 md:justify-items-end">
        <div className="  md:ml-24 ">
          <picture>
            <img
              src="https://www.fictiv.com/wp-content/uploads/2022/12/dependable-quality.png"
              alt=""
            />
          </picture>
        </div>
        <div className="flex flex-col md:pl-24 justify-center md:w-2/3  justify-self-start ">
          <p className="text-teal-500 font-bold py-4 text-lg uppercase ">
            DEPENDABLE QUALITY
          </p>
          <p className="text-3xl text-gray-700 md:tracking-wide tracking-tight md:font-semibold font-bold">
            Quality You Can See From Start to Finish
          </p>
          <p className="text-base font-semibold py-6 text-gray-500">
            The Fictiv team and digital platform ensure quality on your behalf,
            so you get parts delivered on-time and to-spec — every time.
          </p>
          <p className="flex py-1 items-center space-x-2 ">
            <BsFillCheckCircleFill className="text-teal-500 text-xl " />
            <span className="text-base text-gray-500 font-medium">
              On-site Fictiv quality engineers
            </span>
          </p>
          <p className="flex py-1 items-center space-x-2 ">
            <BsFillCheckCircleFill className="text-teal-500 text-xl " />
            <span className="text-base text-gray-500 font-medium">
              Inspection reports for every part
            </span>
          </p>
          <p className="flex py-1 items-center space-x-2 ">
            <BsFillCheckCircleFill className="text-teal-500 text-xl " />
            <span className="text-base text-gray-500 font-medium">
              On-demand access to quality photos & docs
            </span>
          </p>
          <p className="font-semibold py-6 text-teal-500 hover:text-teal-600 cursor-pointer" >Learn More</p>
          <div className="grid grid-cols-2 py-3 gap-x-8" >
            <div>
              <p className="text-2xl font-bold  text-teal-500 " >95.4%</p>
              <p className="text-[14px] font-medium py-1 text-gray-400" >Perfect orders*</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal-500 " >100M+</p>
              <p className="text-[14px] w-3/4 font-medium py-1 text-gray-400" >Inspection points analyzed</p>
            </div>
            
          </div>
          <p className="text-[10px] -mt-2 mb-3 text-slate-500 font-medium  " >*Perfect orders are defined as being delivered on-time and in-full.</p>
          <picture>
            <img src="https://www.fictiv.com/wp-content/uploads/2022/12/logos.png" alt=""  className="w-1/2" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Dependable;
