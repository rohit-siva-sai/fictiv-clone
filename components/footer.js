import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-12 px-8 md:px-0">
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-12 items-start md:justify-evenly ">
        <div className="flex flex-col space-y-6 w-48">
          <Link href="/">
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/logos/fictiv-teal.svg"
                alt=""
              />
            </picture>
          </Link>

          <ul className="text-xs text-gray-400 leading-4">
            <li className="text-teal-500 font-semibold">CALIFORNIA</li>
            <li>168 Welsh Street</li>
            <li>San Francisco, CA 94107</li>
          </ul>
          <ul className="text-xs text-gray-400 leading-4">
            <li className="text-teal-500 font-semibold">ARIZONA</li>
            <li>1001 N. Central, Suite 802</li>
            <li>Phoenix, AZ 85004</li>
          </ul>
          <ul className="text-xs text-gray-400 leading-4">
            <li className="text-teal-500 font-semibold">CHINA</li>
            <li>
              5-6 Building 11, Changhua Creative Park, Panyu District,
              Guangzhou, 511495
            </li>
          </ul>
          <ul className="text-xs text-gray-400 leading-4">
            <li className="text-teal-500 font-semibold">INDIA</li>
            <li>
              Pride House Office No.402, 4th Floor, Ganeshkhind Road, Pune
              411016
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-y-6 md:gap-y-0 md:grid-cols-6 gap-x-8">
          <ul className="text-gray-500 flex flex-col space-y-2 text-xs   ">
            <li className="font-bold text-black text-sm">Capabilities</li>
            <Link href={"/features/cnc-machining"}>
              <li className="cursor-pointer hover:text-teal-500">
                CNC Machining
              </li>
            </Link>
            <Link href={"/injection-molding-service"}>
              <li className="cursor-pointer hover:text-teal-500">
                Injection Molding
              </li>
            </Link>
            <Link href={"/3d-printing-service"}>
              <li className="cursor-pointer hover:text-teal-500">
                3D Printing
              </li>
            </Link>
            <Link href={"/urethane-casting-service"}>
              <li className="cursor-pointer hover:text-teal-500">
                Urethane Casting
              </li>
            </Link>
          </ul>
          <ul className="text-gray-500 flex flex-col space-y-2 text-xs">
            <li className="font-bold text-black text-sm">Industries</li>

            <li className="cursor-pointer hover:text-teal-500">CRobotics</li>

            <li className="cursor-pointer hover:text-teal-500">
              Consumer Products
            </li>
            <li className="cursor-pointer hover:text-teal-500">
              Medical Devices
            </li>
            <li className="cursor-pointer hover:text-teal-500">Automotive</li>
            <li className="cursor-pointer hover:text-teal-500">Aerospace</li>
          </ul>
          <ul className="text-gray-500 flex flex-col space-y-2 text-xs">
            <li className="font-bold text-black text-sm">Solutions</li>

            <li className="cursor-pointer hover:text-teal-500">Enterprise</li>

            <li className="cursor-pointer hover:text-teal-500">
              NPD Acceleration
            </li>
            <li className="cursor-pointer hover:text-teal-500">
              ETO Rapid Production
            </li>
            <li className="cursor-pointer hover:text-teal-500">
              MRO Digital Inventory
            </li>
          </ul>
          <ul className="text-gray-500 flex flex-col space-y-2 text-xs">
            <li className="font-bold text-black text-sm">Company</li>

            <li className="cursor-pointer hover:text-teal-500">Company</li>

            <li className="cursor-pointer hover:text-teal-500">Contact Us</li>
            <li className="cursor-pointer hover:text-teal-500">Careers</li>
            <li className="cursor-pointer hover:text-teal-500">Newsroom</li>
            <li className="cursor-pointer hover:text-teal-500 w-24 ">
              Supplier Code of Conduct
            </li>
          </ul>
          <ul className="text-gray-500 flex flex-col space-y-2 text-xs">
            <li className="font-bold text-black text-sm">Resources</li>

            <li className="cursor-pointer hover:text-teal-500">Articles</li>

            <li className="cursor-pointer hover:text-teal-500">Case Studies</li>
            <li className="cursor-pointer hover:text-teal-500">eBooks</li>
            <li className="cursor-pointer hover:text-teal-500">Webinars</li>
            <li className="cursor-pointer hover:text-teal-500">Master Class</li>
            <li className="cursor-pointer hover:text-teal-500">
              Customer Help Center
            </li>
          </ul>
          <ul className="text-gray-500 flex list-none flex-col space-y-2 text-xs">
            <li className="font-bold text-black text-sm">Why Fictiv</li>

            <li className="cursor-pointer hover:text-teal-500">Plans</li>

            <li className="cursor-pointer hover:text-teal-500">Premium</li>
            <li className="cursor-pointer hover:text-teal-500">
              Become a partner
            </li>
          </ul>
        </div>
      </div>
      <div className="flex md:flex-row flex-col pt-12 justify-center">
        <div className="flex flex-col">
          <div className="flex">
            <input
              type="email"
              name=""
              id=""
              placeholder="Business Email*"
              className="px-2 border border-teal-500 w-52 md:w-64 rounded-l-md focus:ring-4 focus:ring-teal-100 py-1"
            />
            <div className="py-1 px-5 cursor-pointer text-white bg-teal-500 font-bold ">
              SUBSCRIBE
            </div>
          </div>
          <p className="text-[10px] md:w-96 text-gray-400 px-4 py-3 ">
            By signing up, you agree to our{" "}
            <span className="text-teal-500 cursor-pointer">Terms of Use</span>{" "}
            and{" "}
            <span className="text-teal-500 cursor-pointer">Privacy Policy</span>
            . We may use the info you submit to contact you and use data from
            third parties to personalize your experience.
          </p>
        </div>
        <div className=" md:py-0 py-4 flex  space-x-3">
          <div className="bg-gray-100 px-6 h-fit py-2 cursor-pointer ">
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/icons/facebook.svg"
                alt=""
                width={12}
              />
            </picture>
          </div>
          <div className="bg-gray-100 h-fit px-5 py-3 cursor-pointer ">
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/icons/twitter.svg"
                alt=""
                width={20}
              />
            </picture>
          </div>
          <div className="bg-gray-100 px-5 h-fit py-3 cursor-pointer ">
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/icons/linkedin.svg"
                alt=""
                width={15}
              />
            </picture>
          </div>
          <div className="bg-gray-100 px-5 h-fit py-3 cursor-pointer ">
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/icons/youtube.svg"
                alt=""
                width={20}
              />
            </picture>
          </div>
          <div className="bg-gray-100 px-5 h-fit py-3 cursor-pointer ">
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/themes/fictiv-theme/assets/images/icons/tiktok.svg"
                alt=""
                width={15}
              />
            </picture>
          </div>
        </div>
      </div>
      <p className="font-bold text-center text-xs">
        Copyright © 2023 Fictiv. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
