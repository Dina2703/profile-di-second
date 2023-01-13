import React from "react";
import Cards from "../components/Cards";

function Projects() {
  return (
    <section>
      <div className=" py-4 px-2 max-w-3xl  pb-16 ">
        <div className="flex flex-col  items-center ">
          <h1 className="uppercase font-bold md:text-2xl text-lg ">
            My Portfolio
          </h1>
          <h2 className="text-[16px] ">
            A showcase of my projects and my abilities.
          </h2>
        </div>

        <Cards />
      </div>
    </section>
  );
}

export default Projects;
