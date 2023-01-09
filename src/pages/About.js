import React from "react";
import AboutLeft from "../components/AboutLeft";
import AboutRight from "../components/AboutRight";

function About() {
  return (
    <div className="w-screen px-2 overflow-x-hidden">
      <div className="flex flex-col gap-2   mx-4 md:mx-14 lg:mx-24 md:flex-row">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
}

export default About;
