import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <nav className=" flex p-8 text-white text-center justify-between bg-blue-200  w-10/12 ">
        <div className="">
          <NavLink to="/" className=" text-3xl" id="logo-font">
            Dinara Idrissova
          </NavLink>
        </div>
        <div className="flex gap-x-2.5 0 text-xs  items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
