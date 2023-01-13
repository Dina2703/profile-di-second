import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import Switcher from "../components/Switcher";

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
    <div className="w-full shadow-md h-20 flex justify-center items-center  sticky top-0 z-100 bg-neutral-100  transition-all delay-100 dark:bg-slate-900 ">
      <div className="absolute right-2  lg:right-6 top-2 flex items-center w-16 justify-between flex-row-reverse">
        <div className="  hover:scale-125   transition ease-in-out delay-50">
          <Switcher />
        </div>
        <div className="  text-[26px] cursor-pointer hover:scale-125  transition ease-in-out delay-50">
          <a
            href="https://github.com/Dina2703"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-gray-500 dark:text-gray-100 transition-all delay-75 text-md " />
          </a>
        </div>
      </div>

      <nav className="w-full max-w-4xl  flex flex-col md:flex-row p-4   md:justify-between items-start md:items-end ">
        <NavLink
          to="/"
          className="text-3xl text-slate-600 transition-all delay-100 dark:text-gray-100 hidden md:block "
          id="logo-font"
        >
          Dinara Idrissova
        </NavLink>
        <div
          className="flex  gap-x-5 0 md:text-sm text-xs  md:pt-0 dark:text-gray-100 text-gray-500 font-semibold tracking-wide transition-all delay-75"
          id="navbar"
        >
          {navLinks.map((link) => (
            <NavLink
              to={link.navLink}
              key={link.id}
              className="hover:text-gray-800 dark:hover:text-gray-300 "
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
