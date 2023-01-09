import img from "../assets/img/dinara.png";

function HomeImg() {
  return (
    <div className="w-[220px] h-[220px] md:w-[330px] md:h-[330px] flex items-center justify-center ">
      <div className=" w-[180px] h-[170px] rounded-md md:w-[210px] md:h-[210px] lg:w-[260px] lg:h-[260px]  object-cover md:rounded-full object-top shadow-md shadow-neutral-400 bg-orange-300 relative">
        <img
          src={img}
          alt="Dinara Idrissova"
          className=" w-[200px] h-[200px] rounded-md md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]  object-cover md:rounded-full object-top  absolute bottom-[-1px] "
        />
      </div>
    </div>
  );
}

export default HomeImg;
