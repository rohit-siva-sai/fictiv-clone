import React from "react";

const Getstarted = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/background/background-02.jpeg)`,
      }}
      className="group relative md:bg-cover bg-cover  w-full flex justify-center items-start md:pt-12 h-[400px] bg-center bg-no-repeat"
    >
      <div className="flex flex-col items-center" >
        <p className="md:text-6xl text-4xl font-semibold text-gray-700 py-10">
          Let&#39;s Get Started
        </p>
        <div className="py-4 rounded-sm cursor-pointer px-12 w-fit bg-teal-500 hover:bg-teal-700 text-white font-semibold">
          Get Instant Quote
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
