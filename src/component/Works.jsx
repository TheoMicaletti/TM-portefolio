import React from "react";
import Knock from "../assets/kk.png";
import Mealme from "../assets/mealme.png";
import Apside from "../assets/apside.png";

function Works() {
  return (
    <>
      <div className="text-whyte text-xl font-[200] mt-12">
        <h2 className="text-3xl font-[400] lg:mb-16 mb-8">My projects</h2>
        <ul className="flex flex-col justify-around mb-24 lg:flex-row">
          <div>
            <li className="border-4 mx-4 border-pink w-fit h-fit drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] cursor-pointer hover:border-[#ffffff]">
              <a
                href="https://knock-knock.bordeaux-1.wilders.dev"
                target="_blank"
              >
                <img src={Knock} alt="knock-knock" />
              </a>
            </li>
            <h3 className="mb-8 mt-1 text-center font-[400]">
              Knock-Knock - Project 3
            </h3>
          </div>
          <div>
            <li className="border-4 mx-4 border-yellow w-fit h-fit drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] cursor-pointer hover:border-[#ffffff]">
              <a href="https://mealme.bordeaux-1.wilders.dev" target="_blank">
                <img src={Mealme} alt="knock-knock" />
              </a>
            </li>
            <h3 className="mb-8 mt-1 text-center font-[400]">
              Mealme - Project 2
            </h3>
          </div>
          <div>
            <li className="border-4 mx-4 border-purple w-fit h-fit drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] cursor-pointer hover:border-[#ffffff]">
              <img src={Apside} alt="knock-knock" />
            </li>
            <h3 className="mb-8 mt-1 text-center font-[400]">
              Apside Share In - Hackathon
            </h3>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Works;
