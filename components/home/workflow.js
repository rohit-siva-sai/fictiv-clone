import React, { useState } from "react";

const Workflow = () => {
  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(false);
  const [video3, setVideo3] = useState(false);

  //     const videoChange = ()=>{
  //    setVideo(!video)
  //     }
  return (
    <div className="py-10" >
      <div className="grid md:grid-cols-2 grid-cols-1  justify-items-center gap-y-5 md:gap-y-0 px-4 md:px-0 ">
        <div className="flex flex-col md:w-2/3  ">
          <p className="text-teal-500 font-bold py-4 text-lg uppercase ">
            workflow automation
          </p>
          <p className="text-gray-700 text-3xl font-bold tracking-tight  md:tracking-wide md:font-semibold">
            One Easy-To-Use Platform From Quote to Delivery
          </p>
          <p className="text-base font-semibold py-6 text-gray-400 ">
            From pricing, to design feedback, to status updates, our platform
            makes custom part sourcing easy and hassle-free.
          </p>
          <div
            className={`py-2  md:mt-0 mt-4 px-4 ${
              video1 ? "bg-teal-100/40" : "bg-transparent"
            } hover:bg-teal-100/40  cursor-pointer `}
            onClick={() => {
              setVideo1(true);
              setVideo2(false);
              setVideo3(false);
            }}
          >
            <p className="text-base py-1 font-semibold">Quotes</p>
            <p className="text-[13px] text-gray-400 font-normal md:w-3/4  py-3">
              No more waiting days or weeks to get quotes back. Fictiv gives you
              pricing feedback within seconds or minutes.*
            </p>
          </div>
          <div
            className={`py-2 px-4 ${
              video2 ? "bg-teal-100/40" : "bg-transparent"
            } hover:bg-teal-100/40  cursor-pointer `}
            onClick={() => {
              setVideo1(false);
              setVideo2(true);
              setVideo3(false);
            }}
          >
            <p className="text-base py-1 font-semibold">Design Feedback</p>
            <p className="text-[13px] text-gray-400 font-normal md:w-3/4  py-3">
              Well analyze your parts for manufacturability, giving you full
              visibility into cost drivers and potential manufacturing risks.
            </p>
          </div>
          <div
            className={`py-2 px-4 hover:bg-teal-100/40 ${
              video3 ? "bg-teal-100/40" : "bg-transparent"
            }  cursor-pointer`}
            onClick={() => {
              setVideo1(false);
              setVideo2(false);
              setVideo3(true);
            }}
          >
            <p className="text-base py-1 font-semibold">Order Tracking</p>
            <p className="text-[13px] text-gray-400 font-normal md:w-3/4  py-3">
              Get on-demand production status updates for your orders, including
              access to part photos and inspection data before delivery.
            </p>
          </div>

          <p></p>
        </div>
        <div className="md:w-10/12 justify-self-start ">
          <video
            src={
              video1
                ? "/homepage-quote-loop-min.mp4"
                : video2
                ? "/homepage-dfm-loop-v2-min.mp4"
                : "/homepage-tracking-loop-min.mp4"
            }
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
