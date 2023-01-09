import React from "react";
import paper_img from "../assets/img/family.JPG";

function AboutLeft() {
  return (
    <div>
      <div className="p-6  relative">
        <div className=" bg-orange-50  rounded-[2px] shadow-photoFrame absolute bottom-5 top-6 right-5 left-5 z-20 "></div>
        <div className=" w-full bg-orange-50 p-2.5 rounded-[2px] shadow-photoFrame -rotate-2 relative z-40">
          <div className=" border-orange-300">
            <img
              src={paper_img}
              layered-paper
              alt=""
              className="object-cover w-full  rounded-[2px]  warm"
            />
          </div>

          <div className=" flex justify-center items-center h-14 w-full ">
            <p className="tag  text-lg text-gray-700">Love Making Memories</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLeft;
