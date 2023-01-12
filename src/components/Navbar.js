import { NavLink } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const navLinks = [
  {
    id: 1,
    navLink: "/",
    name: "Home",
  },
  {
    id: 2,
    navLink: "/about",
    name: "About",
  },
  {
    id: 3,
    navLink: "/portfolio",
    name: "Portfolio",
  },
  {
    navLink: "/Contact",
    id: 4,
    name: "Contact",
  },
];

function Navbar() {
  return (
    <div className="w-full shadow-md  flex justify-center items-center sticky top-0 z-100 bg-neutral-100 ">
      <div className="absolute right-2  lg:right-6 top-2 flex items-center w-16 justify-between flex-row-reverse">
        <div className=" border rounded-full p-1 cursor-pointer hover:scale-125 hover:border-gray-500  transition ease-in-out delay-50">
          <BsFillMoonStarsFill className="text-gray-600 text-sm " />
        </div>
        <div className=" border rounded-full p-1 cursor-pointer hover:scale-125 hover:border-gray-500  transition ease-in-out delay-50">
          <a
            href="https://github.com/Dina2703"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-gray-600 text-md " />
          </a>
        </div>
      </div>

      <nav className="w-full max-w-4xl  flex flex-col md:flex-row p-4   md:justify-between items-center md:items-end ">
        <NavLink
          to="/"
          className="text-3xl text-slate-600 hidden md:block "
          id="logo-font"
        >
          Dinara Idrissova
        </NavLink>
        <div
          className="flex gap-x-5 0 text-xs  md:pt-0  text-slate-500 font-semibold tracking-wide "
          id="navbar"
        >
          {navLinks.map((link) => (
            <NavLink
              to={link.navLink}
              key={link.id}
              className="hover:text-gray-800 "
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
