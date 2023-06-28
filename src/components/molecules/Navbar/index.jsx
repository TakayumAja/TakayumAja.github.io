import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto md:px-0 flex justify-between items-center h-16 px-4">
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
          className={`absolute py-2 bg-gray-900 left-0 top-12 right-0 flex items-center justify-center flex-col gap-4 rounded-b-md  text-base shadow-md shadow-blue-500/50 transition-all ${
            open ? "block" : "hidden"
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
