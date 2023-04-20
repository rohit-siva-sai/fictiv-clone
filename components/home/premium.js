import React from "react";

const Premium = () => {
  return (
    <div className="py-8" >
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-end md:px-0 px-4 gap-y-6 md:gap-y-0 ">
        <div className="md:w-10/12 " >
          <video
            src="Team-Workspaces-loop-Shadow-crop.mp4"
            loop
            muted
            autoPlay
            playsInline
          ></video>
        </div>
        <div  className="flex flex-col justify-start justify-self-start md:ml-32 md:w-1/2" >
          <p className="text-teal-500 font-bold pb-4 text-lg uppercase ">
            FICTIV PREMIUM
          </p>
          <p className="text-3xl tracking-tight  md:tracking-wide md:font-semibold font-bold text-gray-700">
            Collaborative,<br/> Team-Based Sourcing
          </p>
          <p className="text-base font-semibold py-6 text-gray-500">
            Fictiv enables you to coordinate custom part sourcing with high
            visibility and control—across projects, teams, and even your entire
            company.
          </p>
          <p className="font-semibold py-3 text-teal-500 hover:text-teal-600 cursor-pointer">
            Check it out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
