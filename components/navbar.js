import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { GiCrossedSabres } from "react-icons/gi";
import Features from "./home/features";
import Link from "next/link";
import { useRouter } from "next/router";

const client = createClient({
  projectId: "m5g9pmc5",
  dataset: "production",
  useCdn: false,
});

const Navbar = ({ features }) => {
  const router = useRouter();

  // const [features,setFeatures] = useState([])

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `
  //     *[_type == "features"]
  //   `
  //     )
  //     .then((data) => {
  //       setFeatures(data);
  //     })
  //     .catch((err) => {
  //       console.log("Err from category:", err);
  //     });
  // }, []);

  const [show, setShow] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  return (
   <div>
    <div className="fixed w-full top-0  z-50 bg-white">
      <div className="flex items-center py-4 md:py-3 space-x-3 shadow-md md:justify-evenly justify-between px-4 md:px-0">
        <div className="flex md:space-x-8">
          <Link href={"/"}>
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/logos/fictiv-teal.svg"
                alt=""
              />
            </picture>
          </Link>
          <div className="md:flex hidden space-x-3 items-center ">
            <div
              onMouseOver={() => {
                setDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
              }}
              className="flex hover:text-teal-500   items-center cursor-pointer "
            >
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
        <div className="flex items-center space-x-5">
          <div className="cursor-pointer flex items-center hover:border-2 rounded-lg hover:border-black hover:p-2 bg-white">
            {/* <input type="search" name="" id="" className="border-2" /> */}
            <AiOutlineSearch className="text-xl font-bold text-gray-400" />
          </div>
          <div className=" md:block hidden  font-semibold cursor-pointer hover:text-teal-500">
            Log In
          </div>
          {!show && (
            <div
              onClick={() => {
                setShow(!show);
              }}
              className=" md:hidden block  font-semibold cursor-pointer hover:text-teal-500"
            >
              <FiAlignJustify className="text-3xl text-teal-500 " />
            </div>
          )}
          {show && (
            <div
              onClick={() => {
                setShow(!show);
              }}
              className=" md:hidden block  font-semibold cursor-pointer hover:text-teal-500"
            >
              <GiCrossedSabres className="text-2xl text-teal-500 " />
            </div>
          )}
          <div className="py-3 z-20 md:block hidden rounded-sm cursor-pointer px-12 bg-teal-500 hover:bg-teal-700 text-white font-semibold">
            Get Instant Quote
          </div>
        </div>
      </div>

      {show && (
        <div
         
          className="absolute top-14 py-4 border bg-white w-screen"
        >
          <div className="md:hidden divide-y-2 grid grid-cols-1 px-6   gap-y-6  md:space-x-3  ">
            <div  onClick={() => {
            setDropDown(!dropDown);
          }} className="flex   hover:text-teal-500   items-center cursor-pointer ">
              <p className="font-semibold">Capabilities</p>
              <RiArrowDropDownLine className="text-gray-600 font-bold text-3xl " />
            </div>
            {dropDown && (
              <div
                onMouseOver={() => {
                  setDropDown(true);
                }}
                onMouseLeave={() => {
                  setDropDown(false);
                }}
                className="flex flex-col py-6 md:hidden  w-full"
              >
                <div className="flex flex-col  space-y-4  w-full bg-white border-b md:py-12 md:px-36">
                  {features.map((item) => {
                    return (
                      <Link href={`/features/${item.slug.current}`}>
                        <Features title={item.title} imgUrl={item.imgUrl} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="flex   hover:text-teal-500  items-center cursor-pointer ">
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
            <div className="font-semibold cursor-pointer hover:text-teal-500">
              Log In
            </div>
            <div className="py-3  md:hidden block rounded-sm cursor-pointer px-24 w-fit bg-teal-500 hover:bg-teal-700 text-white font-semibold">
              Get A Quote
            </div>
          </div>
        </div>
      )}

      {dropDown && (
        <div
          onMouseOver={() => {
            setDropDown(true);
          }}
          onMouseLeave={() => {
            setDropDown(false);
          }}
          className="absolute hidden md:block md:top-12 z-10  w-full"
        >
          <div className="flex space-x-4  w-full bg-white border-b py-12 px-36">
            {features.map((item) => {
              return (
                <Link href={`/${item.slug.current}`}>
                  <Features title={item.title} imgUrl={item.imgUrl} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default Navbar;

export const getServerSideProps = async (context) => {
  const client = createClient({
    projectId: "m5g9pmc5",
    dataset: "production",
    useCdn: false,
  });


  const query = `*[_type == "features"]`

  const features = await client.fetch(query)

  return {
    props: {
      features
    },
  };
};
