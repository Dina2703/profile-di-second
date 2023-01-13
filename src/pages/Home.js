import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeImg from "../components/HomeImg";
import resume from "../assets/Dinara_Idrissova_Resume_upd.pdf";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex flex-col justify-around h-[calc(100vh-200px)]">
      <div className="flex flex-col-reverse items-center md:flex-row  justify-center  md:gap-0">
        <div className=" flex flex-col justify-end gap-y-1 font-semibold   text-lg md:text-1xl lg:text-3xl p-3 md:p-6 ">
          <p className="text-gray-400  text-xs md:text-sm italic mb-1 md:mb-3 tag">{`<div>`}</p>
          <pre>
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
          <Button>
            <pre>my portfolio</pre>
            <FaChevronRight />
          </Button>
        </Link>
        <a href={resume} target="_blank" rel="noreferrer">
          <Button>
            <pre> my resume</pre> <FaChevronRight />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Home;
