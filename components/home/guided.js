import React from "react";

const Guided = () => {
  return (
    <div className="py-16" >
      <div className="md:grid md:grid-cols-2 md:px-0 px-4 flex   flex-col-reverse space-y-reverse space-y-12 justify-items-end">
        <div className="flex flex-col justify-start md:px-6 md:mr-12 md:w-3/4  ">
          <p className="text-teal-500 font-bold  pb-4 text-lg uppercase ">
            GUIDED EXPERTISE
          </p>
          <div className="flex md:items-center items-start space-x-6  ">
            <picture className="" >
              <img
                src="https://www.fictiv.com/wp-content/uploads/2022/12/avatar.png"
                alt=""
               className="w-64 md:w-36 "
              />
            </picture>
            <p className="text-3xl tracking-tight md:tracking-wide md:font-semibold font-bold text-gray-700 ">
              AI and Human-Supported Guidance at Every Step
            </p>
          </div>
          <p  className="text-base text-justify font-semibold py-12 text-gray-500">
            Fictiv helps to guide your decisions with intelligent suggestions on
            how to optimize designs for manufacturability. Plus, Fictivs
            best-in-class technical talent is available to answer your questions
            on-demand via our chat system, as well as via Zoom conference for
            injection molding design consultations.
          </p>
          <p className="text-base hover:text-teal-600 text-teal-500 font-semibold cursor-pointer" >Talk to an expert</p>
        </div>
        <div className="md:w-4/5 justify-self-start" >
          <picture>
            <img
              src="https://www.fictiv.com/wp-content/uploads/2022/12/guided_expertise.png"
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Guided;
