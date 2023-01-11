import { NavLink } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";

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
    navLink: "/projects",
    name: "Projects",
  },
  {
    id: 4,
    navLink: "/Contact",
    name: "Contact",
  },
];

function Navbar() {
  return (
    <div className="w-full shadow-md  flex justify-center items-center sticky top-0 z-100 bg-neutral-100 ">
      <div className="absolute right-4 top-2 border rounded-full p-1 cursor-pointer hover:scale-105 shadow-md">
        <BsFillMoonStarsFill className="text-slate-600 text-sm" />
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
              className="hover:text-gray-500 "
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
