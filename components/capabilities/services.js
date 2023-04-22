import React from "react";

const Services = ({ services }) => {
  return (
    <div>
      {services && <div className="md:px-40 px-4 py-20  ">
        {services[0].info == "cnc" ? 
          <p className="text-3xl text-gray-700 text-center py-6 font-semibold">
            CNC Machining Services
          </p> :  services.info[0] == "3d" ? <p className="text-3xl text-gray-700 text-center py-6 font-semibold">
            3D Modeling Services 
          </p> : <p className="text-3xl text-gray-700 text-center py-6 font-semibold">
            Injection Moulding Processes 
          </p>
        }
        <div className=" flex md:flex-row flex-col items-center justify-center  md:space-x-3 md:space-y-0 space-y-8  ">
          {services.map((item) => {
            return (
              <div className="bg-white border md:w-64 flex flex-col space-y-6 justify-start  group cursor-pointer">
                <div className="flex flex-col">
                  <picture>
                    <img
                      src={item.imgUrl}
                      alt=""
                      className="rounded-sm md:h-40 h-64 w-full "
                    />
                  </picture>
                  <p className="text-start md:py-2 pt-4 px-6 md:pb-2 flex items-center font-bold text-gray-700 text-[14px] ">
                    {item.title}
                  </p>
                </div>
                <div className="px-6 flex flex-col justify-stretch ">
                  <p className="pb-2 leading-5  text-gray-400 text text-[14px]  font-medium ">
                    {item.matter}
                  </p>
                  {item.info != "injection" && (
                    <p className="text-base pb-4 text-teal-500 font-semibold  group-hover:text-teal-700 ">
                      Learn More
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>}
    </div>
  );
};

export default Services;
