import React from "react";
import Cards from "../components/Cards";

function Projects() {
  return (
    <section>
      <div className="overflow-x-hidden py-4 max-w-3xl px-2 ">
        <div className="flex flex-col items-center ">
          <h1 className="uppercase font-bold md:text-2xl text-lg text-gray-600">
            My Portfolio
          </h1>
          <h2 className="text-[16px] text-gray-600">
            A showcase of my projects and my abilities.
          </h2>
        </div>
        <Cards />
      </div>
    </section>
  );
}

export default Projects;
