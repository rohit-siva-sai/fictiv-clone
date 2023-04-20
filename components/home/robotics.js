import React from "react";

const Robotics = () => {
  return (
    <div className="bg-gray-100 py-20 ">
      <div
        style={{
          backgroundImage: `linear-gradient(90deg, #3F3F3F 3.77%, rgba(0, 0, 0, 0.11) 72.36%), url(https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/background/background-01.jpg.webp`,
        }}
        className="group  hidden md:flex   justify-start bg-auto md:bg-cover h-[580px]  w-full  bg-center bg-no-repeat "
      >
        <div className="flex flex-col justify-center ml-48  w-1/3 space-y-6 ">
          <p className="text-2xl font-semibold text-white leading-9">
            “Our robot has a lot of unique and high tolerance parts. Finding a
            trustworthy partner that can make those parts reliably and quickly
            has been extremely helpful.”
          </p>
          <p className="text-2xl font-semibold text-white ">
            Dillon Jourde, Mechanical Engineer, Gecko Robotics
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(90deg, #3F3F3F 3.77%, rgba(0, 0, 0, 0.11) 72.36%), url(https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/background/background-01-mb.jpg.webp`,
        }}
        className="group  flex md:hidden   justify-start bg-contain  h-[540px]  w-full  bg-no-repeat bg-center"
      >
        <div className="flex flex-col justify-center md:ml-48  md:w-1/3  w-3/4 space-y-6 pl-6 ">
          <p className="text-2xl font-semibold text-white leading-9">
            “Our robot has a lot of unique and high tolerance parts. Finding a
            trustworthy partner that can make those parts reliably and quickly
            has been extremely helpful.”
          </p>
          <p className="text-2xl font-semibold text-white ">
            Dillon Jourde, Mechanical Engineer, Gecko Robotics
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Robotics;
