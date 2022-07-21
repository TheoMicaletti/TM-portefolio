import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] bg-gradient-to-r from-purple via-pink to-yellow p-3 pb-4 border-4 border-silver flex justify-around text-2xl w-[90%] mx-auto font-[400] mt-6 mb-20">
          <a href="https://github.com/TheoMicaletti" target="_blank">
            <li className="cursor-pointer px-12 mt-1.5 hover:text-[#ffffff] md:inline">
              GitHub
            </li>
          </a>
          <a href="https://www.linkedin.com/in/theo-micaletti/" target="_blank">
            <li className="cursor-pointer px-12 mt-1.5 hover:text-[#ffffff] md:inline">
              LinkedIn
            </li>
          </a>
          <Link to="/contact">
            <li className="cursor-pointer px-12 mt-1.5 hover:text-[#ffffff] md:inline">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
