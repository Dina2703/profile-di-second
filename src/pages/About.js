import React from "react";
import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";

function About() {
  return (
    <div className="overflow-x-hidden py-4 max-w-3xl px-2">
      <div className="flex flex-col gap-3  md:flex-row justify-center items-center">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
}

export default About;
