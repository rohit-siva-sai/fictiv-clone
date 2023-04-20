import React from "react";

const Global = () => {
  return (
    <div className="py-8">
      <div className="py-10">
        <p className="text-center text-4xl font-bold text-gray-700 py-3 md:font-semibold ">
          Trusted by Industry Leaders Nationwide
        </p>
        <ul className="list-none flex flex-col md:flex-row items-center font-light md:py-0 py-4 md:space-x-20 space-y-8 md:space-y-0 justify-center ">
          <li>
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/uploads/2022/10/spacex.svg"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/uploads/2022/12/Lyft-Grey-Logo.svg"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/uploads/2022/10/Honeywell.svg"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/uploads/2022/10/Google.svg"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/uploads/2022/10/Medtronic.svg"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://www.fictiv.com/wp-content/uploads/2022/10/Ford.svg"
                alt=""
              />
            </picture>
          </li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 align-middle justify-items-center" >
        <div className="md:w-10/12 w-fulll md:px-0 px-4" >
        <video src="/Globe-min.mp4"  playsInline  loop muted autoPlay></video>
        </div>
        <div className="flex flex-col md:px-0 md:py-0 pt-6 px-4 justify-center" >
          <p className="text-teal-500 font-bold py-4 text-lg" >GLOBAL PARTNER NETWORK</p>
          <p className="text-3xl tracking-wide font-semibold" >Your Parts. Our Network.</p>
          <p className="text-base font-semibold py-6 text-gray-400 md:w-2/3" >Fictiv operates a network of highly vetted and managed partners around the globe, giving you access to virtually unlimited low-volume manufacturing capacity through a single trusted partner.</p>
          <ul className="list-none grid gap-y-5 md:gap-y-0  gap-x-2 grid-cols-2 md:grid-cols-4 md:w-3/4 py-5 " >
            <li className="w-full" >
              <p className="text-2xl  font-bold text-teal-500 ">20M+</p>
              <p className="text-[13px] font-medium py-2 text-gray-400" >Parts manufactured through our network</p>
            </li>
            <li  className="md:w-10/12">
              <p className="text-2xl font-bold text-teal-500 ">10,000+</p>
              <p className="text-[13px] font-medium py-2 text-gray-400" >Hours of monthly machine capacity, on-demand</p>
            </li>
            <li  className="md:w-10/12">
              <p className="text-2xl font-bold text-teal-500 ">2,000+</p>
              <p className="text-[13px] font-medium py-2 text-gray-400" >Combinations of material, process, finish options</p>
            </li>
            <li  className="md:w-10/12">
              <p className="text-2xl font-bold text-teal-500 ">3</p>
              <p className="text-[13px] font-medium py-2 text-gray-400" >Supply regions for reduced risk: U.S., China, and India.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Global;
