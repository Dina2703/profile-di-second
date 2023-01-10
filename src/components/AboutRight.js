import React from "react";

function AboutRight() {
  return (
    <div className="flex flex-1 w-full flex-col gap-5 items-center justify-center pb-4 flex-wrap  p-2 ">
      <code>
        <h2 className="text-slate-600  font-semibold">About Me</h2>
        <div>
          <ul className=" md:text-xs text-[14px] flex flex-col gap-1.5 text-slate-600 ">
            <li>
              My name is Dinara and I am front-end developer, based in Georgia,
              US.
            </li>
            <li>
              I have a passion for creating intuitive, interactive, and visually
              appealing websites that deliver the best possible user experience.
            </li>
            <li>
              I'm a positive person with a strong work ethic, who is always
              curious and with never-ending enthusiasm for solving problems and
              hardly working to improve my soft and technical skills.
            </li>
            <li>
              Completed Front-End Web + Mobile Developer Bootcamp in 2021.
              Comfortable working with various technologies and frameworks,
              including HTML, CSS, JavaScript, React. In my free time, you can
              find me tinkering with new technologies.
            </li>
            <li>
              In addition to my coding life, I'm a mom of two curious boys and a
              wife. We love spending time together as a family. There are many
              things that we enjoy doing together, hiking in nature, bike riding
              , having family movie nights, and more.
            </li>
            <li>
              Feel free to take a look at my portfolio to see some of my past
              work, or contact me if you have any questions or want to
              collaborate on a project. Thanks for visiting!
            </li>
          </ul>
        </div>
      </code>
    </div>
  );
}

export default AboutRight;
