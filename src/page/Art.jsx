import React from "react";
import "./Art.css";

import JerseyOM from "../assets/art/OMJersey.jpg";
import Mountain from "../assets/art/art.jpg";
import Blop from "../assets/art/blop.JPG";
import Circle from "../assets/art/circle.JPG";
import Fish from "../assets/art/fish.JPG";
import Hermann from "../assets/art/Hermann.jpeg";
import Beach from "../assets/art/taf.JPG";

function Art() {
  return (
    <>
      <h2 className="text-3xl font-[400] lg:mb-16 mb-8 mt-8 text-center">
        My{" "}
        <span className="drop-shadow-[-2px_-2px_0px_rgba(237,180,196)] text-yellow font-[800]">
          arts
        </span>{" "}
        projects
      </h2>
      <div className="drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] items-center grid md:grid-cols-3 gap-4 md:w-[95%] w-[98%] mx-auto">
        <div className="img__wrap">
          <img
            className="border-4 border-silver"
            src={JerseyOM}
            alt="jerseyOM"
          />
          <p className="img__description text-center text-xl flex flex-col justify-center items-center font-[600]">
            Olympique de Marseille jersey - Made with photoshop in 2017
          </p>
        </div>
        <div className="img__wrap">
          <img
            className="border-4 border-silver"
            src={Mountain}
            alt="mountain"
          />
          <p className="img__description text-center text-xl flex flex-col justify-center items-center font-[600]">
            Mountain and a river - Made with acrylix paint in 2021
          </p>
        </div>
        <div className="img__wrap">
          <img className="border-4 border-silver" src={Blop} alt="blop" />
          <p className="img__description text-center text-xl flex flex-col justify-center items-center font-[600]">
            Art work - Made with acrylic paint in 2021
          </p>
        </div>
        <div className="img__wrap">
          <img className="border-4 border-silver" src={Circle} alt="circle" />
          <p className="img__description text-center text-xl flex flex-col justify-center items-center font-[600]">
            Mountains - Made with Procreate in 2019
          </p>
        </div>
        <div className="img__wrap">
          <img className="border-4 border-silver" src={Fish} alt="fish" />
          <p className="img__description text-center text-xl flex flex-col justify-center items-center font-[600]">
            Fish - Made with Procreate in 2020
          </p>
        </div>
        <div className="img__wrap">
          <img className="border-4 border-silver" src={Hermann} alt="hermann" />
          <p className="img__description text-center text-xl flex flex-col justify-center items-center font-[600]">
            My cat Hermann - Made with acrylix paint in 2021
          </p>
        </div>
        <div className="img__wrap">
          <img className="border-4 border-silver" src={Beach} alt="beach" />
          <p className="img__description text-center text-xl flex flex-col justify-center items-center font-[600]">
            Beach Kicks jersey - Made with photoshop in 2017
          </p>
        </div>
      </div>
    </>
  );
}

export default Art;
