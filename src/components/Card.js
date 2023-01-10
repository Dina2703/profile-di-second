import { Link } from "react-router-dom";

function Card({ projectData }) {
  console.log(projectData.url);
  return (
    <div className="shadow-md  bg-base-100 my-3 rounded-lg p-6 ">
      <div className="flex justify-around bg-orange-100 items-center ">
        <div>
          <div>title</div>
          <div>paragraph</div>
          <div>technology bar</div>
        </div>
        <div className="w-1/3 p-5">
          <img
            src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>

      <div className="ml-12 mt-2">
        <Link to={projectData.url}>
          <button class="rounded-lg px-4 py-2 border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 text-xs md:text-sm  ">
            <pre>visit site</pre>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
