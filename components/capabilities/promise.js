import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Promise = ({ promise }) => {
  return (
    <div>
      {promise && <div 
         style={{
            backgroundImage: `url(${promise.imgUrl})`,
          }}
          className="group flex items-center justify-end   bg-cover w-full h-[580px]   bg-center bg-no-repeat "
      >
        <div className=" bg-black opacity-75 pl-6 py-6 w-full md:w-1/2 ">
          <div className="text-white md:text-6xl text-3xl pb-4 font-semibold ">Our Quality Promise</div>
          <div className="flex flex-col space-y-1" >
            {promise.subTitle.map((item) => {
              return (
                <div className="flex md:items-center items-baseline  space-x-2">
                  <FaRegCheckCircle className="text-white text-lg" />
                  <p className="text-white font-semibold text-lg md:text-base " >{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Promise;
