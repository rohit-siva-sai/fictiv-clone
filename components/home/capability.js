import React from "react";
import CapabilityModel from "./capabilityModel";

const Capability = () => {
  return (
    <div className="py-24 bg-gray-100 grid md:grid-cols-5 grid-cols-1 justify-items-center  md:px-28 px-8 gap-6 ">
      <CapabilityModel
        imgUrl={
          "https://www.fictiv.com/wp-content/uploads/2023/04/image-01.jpg.webp"
        }
        head="CNC Machining"
        content="Tight tolerences and finishing capabalities, as fast as 2 days"
      />
      <CapabilityModel
        imgUrl={
          "https://www.fictiv.com/wp-content/uploads/2021/06/image-02.jpg"
        }
        head="3D Printing"
        content="FDM,SLS,SLA,PloyJet,MJP technologies"
      />
      <CapabilityModel
        imgUrl={
          "https://www.fictiv.com/wp-content/uploads/2021/06/image-03.jpg"
        }
        head="Urethane Casting"
        content="Production quality parts without the tooling investment"
      />
      <CapabilityModel
        imgUrl={
          "https://www.fictiv.com/wp-content/uploads/2023/03/Achieve-Sustainable-Management-Of-Research-Chemicals.jpg.webp"
        }
        head="Injection Molding"
        content="T1 samples as fast as 10 days with low minimum order quantities"
      />
      <CapabilityModel
        imgUrl={
          "https://www.fictiv.com/wp-content/uploads/2021/06/image-18.jpg"
        }
        head="Finishing Services"
        content="Add multiple finishes to your part such as anodizing or power coating"
      />
    </div>
  );
};

export default Capability;
