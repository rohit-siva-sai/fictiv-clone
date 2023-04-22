import React from "react";
import { BsClock } from "react-icons/bs";

const CaseStudy = ({ caseStudy }) => {
  return (
    <div className="border pt-8 pb-16" >
        <p className="text-3xl py-6 text-gray-700 font-semibold text-center" >{caseStudy.info1}</p>
      <div className="grid md:grid-cols-2 grid-cols-1 bg-gray-100 ">
        <div className="flex flex-col items-start justify-center space-y-3 md:px-32  px-4 py-8 ">
          <p className="md:text-3xl text-2xl font-medium text-gray-700  ">
            {caseStudy.info2}
          </p>
          <div className="flex flex-col py-4">
            <p className="text-base font-medium ">{caseStudy.info3}</p>
            <p className="text-base font-medium text-gray-400 ">
              {caseStudy.info4}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <picture>
              <img src="https://www.fictiv.com/wp-content/uploads/2020/09/parts.png" alt="" width={40} />
            </picture>
            {/* <BsClock className="text-2xl text-indigo-700" /> */}
            <p className="text-base text-gray-700 font-bold">
              {caseStudy.info5}
            </p>
          </div>
          <div className="flex items-center space-x-2 pb-4 ">
          <picture>
              <img src="https://www.fictiv.com/wp-content/uploads/2020/09/clock.png" alt="" width={40} />
            </picture>
            {/* <BsClock className="text-2xl text-indigo-700" /> */}
            <p className="text-base text-gray-700 font-bold">
              {caseStudy.info6}
            </p>
          </div>

          <div className="py-3  rounded-sm cursor-pointer px-12 bg-teal-500 hover:bg-teal-700 text-white font-semibold">
            Read Case Study
          </div>
        </div>
        <div className="md:grid place-content-center hidden grid-cols-2  grid-rows-2">
          <picture className="" >
            <img src={caseStudy.imgUrl1} alt="" className="w-full " />
          </picture>
          <picture className="" >
            <img src={caseStudy.imgUrl2} alt="" className="w-full" />
          </picture  >
          <picture className="" >
            <img src={caseStudy.imgUrl3} alt="" className="w-full" />
          </picture>
          <picture className="" >
            <img src={caseStudy.imgUrl4} alt="" className="w-full" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
