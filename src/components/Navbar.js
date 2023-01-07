import { NavLink } from "react-router-dom";

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
    <div className="w-full shadow-md flex justify-center">
      <nav className="max-w-5xl w-full flex flex-col md:flex-row p-6   md:justify-between items-center md:items-end sticky top-0 z-[100]">
        <div className="">
          <NavLink to="/" className="text-4xl text-slate-600 " id="logo-font">
            Dinara Idrissova
          </NavLink>
        </div>
        <div
          className="flex gap-x-5 0 text-sm  pt-3  md:pt-0  text-slate-500 font-semibold tracking-wide "
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
