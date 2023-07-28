import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="text-white z-50 sticky top-0">
      <nav className="container mx-auto md:px-0 flex justify-between items-center h-16 px-4 md:bg-opacity-30 md:backdrop-filter md:backdrop-blur-md bg-gray-900">
        <Link to={"/"} className="font-semibold text-xl">
          ✨takayum's
        </Link>

        {open ? (
          <button className="text-xl " onClick={showMenu}>
            <i className="ri-close-line"></i>
          </button>
        ) : (
          <button className="text-xl block md:hidden" onClick={showMenu}>
            <i className="ri-menu-line"></i>
          </button>
        )}

        <div className="md:flex gap-10 font-medium hidden">
          <Link to={"/"}>Home</Link>
          <Link to={"about"}>About</Link>
          <Link to={"projects"}>Projects</Link>
        </div>

        <div
          className={`py-2 left-0 top-16 right-0 flex items-center justify-center flex-col gap-4 rounded-b-md text-base bg-gray-900 backdrop-filter ${
            open ? "absolute" : "hidden"
          }`}
        >
          <Link to={"/"} className="px-3 py-2" onClick={showMenu}>
            Home
          </Link>
          <Link to={"about"} className="px-3 py-2" onClick={showMenu}>
            About
          </Link>
          <Link to={"projects"} className="px-3 py-2" onClick={showMenu}>
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
