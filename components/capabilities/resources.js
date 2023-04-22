import React from "react";

const Resources = ({ resources }) => {
  return (
    <div>
      {resources && (
        <div className="md:px-40 py-20 px-4  ">
          {resources[0].info != "injection" ? (
            <p className="text-lg text-gray-500 uppercase text-start py-2 font-semibold">
              You might  Also be Intrested in
            </p>
          ) : (
            <p className="text-3xl text-gray-700 text-center py-6 font-semibold">
              Injection Moulding Resources
            </p>
          )}
          <div className={` grid  ${resources[0].info == "injection" ?  "md:grid-cols-3" : "md:grid-cols-2"} gap-x-8  md:gap-y-0 gap-y-8 `}>
            {resources.map((item) => {
              return (
                <div className="bg-white border  flex flex-col  justify-start  group cursor-pointer">
                  <div className="flex flex-col">
                    <picture>
                      <img
                        src={item.imgUrl}
                        alt=""
                        className="rounded-sm h-80 w-full "
                      />
                    </picture>
                    <p className="text-start py-2 pt-4 px-6 pb-2 flex items-center font-bold text-gray-700 text-[14px] ">
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
        </div>
      )}
    </div>
  );
};

export default Resources;
