import React from "react";
import Image from "../assets/theo.png";
import Image2 from "../assets/fond-theo.png";

function Portrait() {
  return (
    <>
      <div>
        <div className="absolute w-80 right-80 top-[130px]">
          <img src={Image2} alt="ombreMoi" />
        </div>
        <div className="absolute w-80 right-[340px]">
          <img src={Image} alt="moi" />
        </div>
      </div>
    </>
  );
}

export default Portrait;
