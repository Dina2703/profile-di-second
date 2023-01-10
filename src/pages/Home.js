import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeImg from "../components/HomeImg";

function Home() {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-12 ">
      <div className="flex  flex-col-reverse items-center md:flex-row w-[80vw] overflow-hidden justify-center  md:gap-10">
        <div className=" flex flex-col justify-end gap-y-1 font-semibold text-gray-600 text-lg md:text-1xl lg:text-3xl p-3 md:p-6 ">
          <p className="text-gray-400 text-xs md:text-sm italic mb-1 md:mb-3 tag">{`<div>`}</p>
          <pre className="">
            <p>Hello!</p>

            <p>
              I'm <span className="font-semibold text-orange-500"> Dinara</span>
            </p>
            <p>
              I'm a <span>Front End Developer</span>
            </p>
            <p className="text-gray-400 text-xs md:text-sm italic mt-1 md:mt-3 tag">{`</div>`}</p>
          </pre>
        </div>

        <HomeImg />
      </div>
      <div className="flex md:flex-col flex-row justify-center items-center gap-2  p-2">
        <Link to={"/projects"}>
          <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-sm md:text-lg w-40 h-10 md:h-12 md:w-60 flex justify-center items-center gap-2 shadow-md shadow-gray-400">
            <pre className="w-36 flex justify-start">my portfolio</pre>{" "}
            <FaChevronRight />
          </button>
        </Link>
        <Link to={"/"}>
          <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full text-sm md:text-lg w-40 md:w-60 h-10 md:h-12 flex justify-center items-center gap-2 shadow-md shadow-gray-400">
            <pre className="w-36 flex justify-start"> my resume</pre>{" "}
            <FaChevronRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
