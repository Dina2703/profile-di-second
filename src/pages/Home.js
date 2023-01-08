import img from "../assets/img/dinara_idrissova2.jpg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-12 ">
      <div className="flex  flex-col-reverse items-center md:flex-row w-[80vw] overflow-hidden justify-center  md:gap-10">
        <div className=" flex flex-col justify-end gap-y-1 font-semibold text-gray-600 text-lg md:text-1xl lg:text-3xl p-3 md:p-6 ">
          <p className="text-gray-400 text-xs md:text-sm italic mb-1 md:mb-3">{`<div>`}</p>
          <pre className="">
            <p>Hello!</p>

            <p>
              I'm <span className="font-semibold text-orange-500"> Dinara</span>
            </p>
            <p>
              I'm a <span>Front End Developer</span>
            </p>
            <p className="text-gray-400 text-xs md:text-sm italic mt-1 md:mt-3">{`</div>`}</p>
          </pre>
        </div>

        <div className="w-[330px] h-[330px] flex items-center justify-center ">
          <img
            src={img}
            alt="Dinara Idrissova"
            className=" w-[200px] h-[200px] rounded-md md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]  object-cover md:rounded-full object-top shadow-md shadow-neutral-400  "
          />
        </div>
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
