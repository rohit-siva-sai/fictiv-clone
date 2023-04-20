import React from "react";

const Homepage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://www.fictiv.com/wp-content/uploads/2022/12/2022_hero_b_background-scaled.jpg)`,
      }}
      className="group relative md:bg-cover bg-none    w-full md:mx-6 bg-center bg-no-repeat "
    >
      <div className=" grid md:grid-cols-2 grid-cols-1 md:pt-0 pt-20 ">
        <div className="flex flex-col md:items-start items-center space-y-10 w-full mx-auto  md:pl-32 md:justify-center ">
          <div className="md:text-6xl text-2xl md:text-start text-center w-3/4 md:leading-[70px]   font-semibold text-black">
            Custom Manufacturing Made Simple.
          </div>
          <p className="font-semibold  text-lg md:px-0 px-2 md:text-start text-center text-gray-400 ">
            Fictiv makes it faster, easier, and more efficient to source the
            custom-manufactured parts you need, precisely when and how you need
            them.
          </p>
          <div className="py-4 md:block hidden rounded-sm cursor-pointer px-12 w-fit bg-teal-500 hover:bg-teal-700 text-white font-semibold">
            Get Instant Quote
          </div>
        </div>
        <div>
          <picture>
            <img
              src="https://www.fictiv.com/wp-content/uploads/2023/03/2023_hero_homepage_min_desk.webp"
              alt=""
              className="w-11/12"
            />
          </picture>
        </div>
        <div className="py-4 md:hidden block my-10 mx-auto rounded-sm cursor-pointer px-12 w-fit bg-teal-500 hover:bg-teal-700 text-white font-semibold">
          Get Instant Quote
        </div>
      </div>
    </div>
  );
};

export default Homepage;
