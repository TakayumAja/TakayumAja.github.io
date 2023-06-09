import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto flex justify-between items-center h-16">
        <h2 className="font-semibold text-xl">✨takayum's</h2>
        <div className="flex gap-10 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
