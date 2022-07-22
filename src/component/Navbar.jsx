import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] bg-gradient-to-r from-purple via-pink to-yellow p-1 pb-3 border-4 border-silver flex justify-around text-2xl w-[90%] mx-auto font-[400] mt-6 mb-20">
          <a href="https://github.com/TheoMicaletti" target="_blank">
            <li className="cursor-pointer px-12 mt-1.5 hover:text-[#ffffff]">
              <img
                className="drop-shadow-[-1px_-1px_0px_rgba(150,150,150)] sm:hidden block w-8"
                src={Github}
                alt="linkedin"
              />
              <span className="hidden sm:block">GitHub</span>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/theo-micaletti/" target="_blank">
            <li className="cursor-pointer px-12 mt-1.5 hover:text-[#ffffff]">
              <img
                className="drop-shadow-[-1px_-1px_0px_rgba(150,150,150)] sm:hidden block w-8"
                src={Linkedin}
                alt="github"
              />
              <span className="hidden sm:block">LinkedIn</span>
            </li>
          </a>
          <Link to="/contact">
            <li className="cursor-pointer px-12 mt-1.5 hover:text-[#ffffff]">
              <span className="drop-shadow-[-1px_-1px_0px_rgba(150,150,150)] sm:hidden block">
                ✉️
              </span>
              <span className="hidden sm:block">Contact</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
