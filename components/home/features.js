import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";


const Features = ({ title, imgUrl }) => {

    console.log(title,imgUrl);
    
  return (
    <div  className="flex justify-between w-72 border  cursor-pointer  items-center">
      
      <div className="flex items-center  bg-white justify-start space-x-4 " >
        <picture>
          <img src={imgUrl} alt="" className="w-24 h-20"  />
        </picture> 
        <p className="text-base font-semibold text-teal-500 " >{title}</p>
      </div>
      <MdKeyboardArrowRight className="mr-2" />
    </div>
  );
};

export default Features;
