import img from "../assets/img/dinara_idrissova2.jpg";
import { FaChevronRight } from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col gap-y-6 md:gap-y-12">
      <div className="flex  w-[80vw] justify-center gap-3 md:gap-10">
        <div className=" flex flex-col justify-end gap-y-1 font-semibold text-gray-600 text-lg md:text-3xl ">
          <p className="">Welcome!</p>
          <p>
            I'm <span className="font-semibold text-orange-500"> Dinara</span>
          </p>
          <p>
            I'm a <span>Front End Developer</span>
          </p>
        </div>

        <div>
          <img
            src={img}
            alt="Dinara Idrissova"
            className=" w-[230px] h-[230px]  md:w-[350] md:[300]  object-cover rounded-full object-top"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 ">
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full w-52 md:w-60 flex justify-center items-center gap-2">
          <span>my portfolio</span> <FaChevronRight />
        </button>
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full w-52 md:w-60 flex justify-center items-center gap-2">
          <span>my resume</span> <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Home;
