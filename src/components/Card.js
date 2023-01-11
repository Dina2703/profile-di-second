import { Link } from "react-router-dom";

function Card({ projectData }) {
  console.log(projectData);
  return (
    <div className="shadow-md  my-3 rounded-lg p-4 ">
      <div className="flex  bg-orange-100 items-center justify-between ">
        <div className="text-sm ">
          <div className="uppercase">{projectData.title}</div>
          <div>{projectData.info}</div>
        </div>
        <div className=" p-5 bg-red-300 ">
          <img src={projectData.img} alt={projectData.title} />
        </div>
      </div>

      <div className="ml-12 mt-2">
        <Link to={projectData.url}>
          <button className="rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 text-xs md:text-sm  ">
            <pre>visit site</pre>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
