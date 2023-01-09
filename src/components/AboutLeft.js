import React from "react";
import paper_img from "../assets/img/family.JPG";

function AboutLeft() {
  return (
    <div>
      <div className="p-4">
        <h2>About Me</h2>
        <div className="w-72 h-82 bg-white p-2 pb-14  rounded-[2px] custom-shadow">
          <img src={paper_img} alt="" className="object-cover w-full " />
        </div>
      </div>
    </div>
  );
}

export default AboutLeft;
