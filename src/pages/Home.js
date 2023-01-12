import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeImg from "../components/HomeImg";
import resume from "../assets/dinara_idrissova_resume.pdf";

function Home() {
  return (
    <div className="flex flex-col gap-y-2  mt-2 md:mt-6">
      <div className="flex flex-col-reverse items-center md:flex-row  overflow-hidden justify-center  md:gap-10">
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

      <div className="flex  flex-col md:flex-row  justify-center items-center gap-3  p-2 ">
        <Link to={"/portfolio"}>
          <button class="w-40 md:w-52 rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 text-xs md:text-sm flex items-center justify-center gap-3">
            <pre>my portfolio</pre>
            <FaChevronRight />
          </button>
        </Link>
        <a href={resume} target="_blank" rel="noreferrer">
          <button class=" w-40 md:w-52  rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 text-xs md:text-sm flex items-center justify-center gap-3">
            <pre> my resume</pre> <FaChevronRight />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
