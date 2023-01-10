import React from "react";

function Skills() {
  return (
    <section>
      <div className="bg-blue-100 ">
        <div className="text-center text-slate-600  font-semibold">
          <h2>My Skills</h2>
        </div>
        <div className="flex ">
          <div></div>
          <div className="w-1/2 ">
            <div className="text-center">
              <h2 className=" text-slate-600  font-semibold text-sm">
                Soft Skills
              </h2>
              <ul className="text-sm">
                <li>teamwork</li>
                <li>motivated</li>
                <li>problem-solving</li>
                <li>time management</li>
                <li>work-ethic</li>
                <li>adaptability</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-slate-600  font-semibold text-sm">
            <h2> Technical Skills</h2>
            <ul className="text-sm">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React </li>
              <li>Version Control/GitHub</li>
              <li>API</li>
              <li>Bootstrap </li>
              <li>Tailwind</li>
              <li>MUI</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
