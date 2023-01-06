import { useState } from "react";
import { NavLink } from "react-router-dom";

const logo =
  "https://see.fontimg.com/api/renderfont4/1G8vj/eyJyIjoiZnMiLCJoIjoxNjYsInciOjIwMDAsImZzIjo4MywiZmdjIjoiIzc4NDA4MyIsImJnYyI6IiM0NTNFM0UiLCJ0IjoxfQ/RGluYXJhIElkcmlzc292YQ/snow-puppets-personal-use-medium.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="  flex p-8 bg-neutral-50 text-primary-content text-center justify-between">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Dinara Idrissova" width="300px" />
          </NavLink>
        </div>
        <div className="flex text-center bg-blue-300 ">
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
