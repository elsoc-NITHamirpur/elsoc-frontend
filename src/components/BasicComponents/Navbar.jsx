import React, { useState } from "react";
import { data } from "../../data/navbarData";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between flex-wrap backdrop-blur-sm px-4 md:px-16 py-3 z-20">
      <div className="text-2xl font-semibold items-center flex-shrink-0 text-white ml-2">
        ELSOC
      </div>

      {/* Button for small screen */}
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Navbar items */}
      <div className={`${isExpanded ? `block` : `hidden`} w-full flex justify-center lg:flex lg:items-center lg:w-auto`}>
        <div className="lg:flex gap-x-8 font-k2d">
          {data.map(({id, title, path}) => (
          <a
            key={id}
            href={path}
            className="block mt-4 hover:font-black hover:drop-shadow-4xl hover:transition-all lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            {title}
          </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
