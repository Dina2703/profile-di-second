function Card({ projectData }) {
  console.log(projectData);
  return (
    <div className="shadow-md  my-3 rounded-md  ">
      <div className="flex p-2  items-center flex-row-reverse ">
        <div className="  w-32  text-xs flex flex-col  text-gray-600 text-start gap-3">
          <h3 className="font-semibold inline">
            {projectData.title} <span>{projectData.type}</span>
          </h3>
          <p>{projectData.info}</p>
          <div>
            <a href={projectData.url}>
              <button className="rounded-lg px-3 py-2 border-2 border-gray-500 text-gray-500 hover:bg-gray-600 hover:text-gray-100 duration-300 text-xs md:text-sm  ">
                <pre>visit site</pre>
              </button>
            </a>
          </div>
        </div>
        <div className="cursor-pointer p-3">
          <img
            src={projectData.img}
            alt={projectData.title}
            className="object-fill w-32  h-28 rounded-sm "
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
