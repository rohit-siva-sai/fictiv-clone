import React from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-30 bg-white">
      <div className="flex items-center py-4 md:py-3 space-x-3 shadow-md md:justify-evenly justify-between px-4 md:px-0" >
        <div className="flex md:space-x-8">
          <picture>
            <img
              src="https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/logos/fictiv-teal.svg"
              alt=""
            />
          </picture>
          <div className="md:flex hidden space-x-3 items-center ">
            <div className="flex hover:text-teal-500  items-center cursor-pointer ">
              <p className="font-semibold">Capabilities</p>
              <RiArrowDropDownLine className="text-gray-600 font-bold text-3xl " />
            </div>
            <div className="flex hover:text-teal-500  items-center cursor-pointer ">
              <p className="font-semibold">Solutions</p>
              <RiArrowDropDownLine className="text-gray-600 font-bold text-3xl " />
            </div>
            <div className="flex hover:text-teal-500 items-center cursor-pointer ">
              <p className=" font-semibold">Resources</p>
              <RiArrowDropDownLine className="text-gray-600 font-bold text-3xl " />
            </div>
            <div className="flex hover:text-teal-500 items-center cursor-pointer ">
              <p className=" font-semibold">Company</p>
              <RiArrowDropDownLine className="text-gray-600 font-bold text-3xl " />
            </div>
            <div className="flex items-center cursor-pointer ">
              <p className="hover:text-teal-500 font-semibold">Premium</p>
            </div>
            <div className="flex items-center cursor-pointer ">
              <p className="hover:text-teal-500 font-semibold">Plans</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-5" >
          <div className="cursor-pointer flex items-center hover:border-2 rounded-lg hover:border-black hover:p-2 bg-white" >
            {/* <input type="search" name="" id="" className="border-2" /> */}
            <AiOutlineSearch className="text-xl font-bold text-gray-400" />
          </div>
          <div className="font-semibold cursor-pointer hover:text-teal-500" >
            Log In
          </div>
          <div className="py-3 md:block hidden rounded-sm cursor-pointer px-12 bg-teal-500 hover:bg-teal-700 text-white font-semibold" >
            Get Instant Quote
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
