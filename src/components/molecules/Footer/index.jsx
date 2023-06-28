import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 h-14 flex justify-between items-center text-white text-sm">
      <div className="container mx-auto flex justify-center lg:justify-between font-medium items-center">
        <p className="hidden lg:block">Design &amp; Code with💙</p>
        <p>© takayum's 2023</p>
        <p className="hidden lg:block">
          Code on <span className="text-blue-600">Github</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
