import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] bg-gradient-to-r from-purple via-pink to-yellow p-1 pb-3 border-4 border-silver flex justify-around w-[90%] mx-auto font-[400] mt-6 mb-20">
          <a href="https://github.com/TheoMicaletti" target="_blank">
            <li className="cursor-pointer md:px-12 mt-1.5 hover:text-yellow md:text-2xl">
              GitHub
            </li>
          </a>
          <a href="https://www.linkedin.com/in/theo-micaletti/" target="_blank">
            <li className="cursor-pointer md:px-12 mt-1.5 hover:text-yellow md:text-2xl">
              LinkedIn
            </li>
          </a>
          <Link to="/">
            <li className="cursor-pointer md:px-12 mt-1.5 hover:text-yellow md:text-2xl font-[800]">
              Home
            </li>
          </Link>
          <Link to="/art">
            <li className="cursor-pointer md:px-12 mt-1.5 hover:text-purple md:text-2xl">
              Art
            </li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer md:px-12 mt-1.5 hover:text-pink md:text-2xl">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
