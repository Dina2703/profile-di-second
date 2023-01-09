import React from "react";
import paper_img from "../assets/img/family.JPG";

function AboutLeft() {
  return (
    <div>
      <div className="p-6  ">
        <div className=" w-full bg-orange-50 p-2.5 rounded-[2px] shadow-photoFrame -rotate-2 ">
          <div className=" ">
            <img
              src={paper_img}
              layered-paper
              alt=""
              className="object-cover w-full  rounded-[2px] "
            />
          </div>

          <div className=" flex justify-center items-center h-16 w-full ">
            <p className="tag  text-lg text-gray-700">Making Memories</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLeft;
