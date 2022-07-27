import React from "react";
import Content from "../component/Content";
import Works from "../component/Works";

import CV from "../assets/CV.png";

let firstName = [
  { id: 1, letter: "T" },
  { id: 2, letter: "h" },
  { id: 3, letter: "é" },
  { id: 4, letter: "o" },
];

let lastName = [
  { id: 1, letter: "M" },
  { id: 2, letter: "i" },
  { id: 3, letter: "c" },
  { id: 4, letter: "a" },
  { id: 5, letter: "l" },
  { id: 6, letter: "e" },
  { id: 7, letter: "t" },
  { id: 8, letter: "t" },
  { id: 9, letter: "i" },
];

function Home() {
  return (
    <>
      <div className="flex flex-col w-[80%] mx-auto cursor-default">
        <div className="flex flex-row text-whyte font-[400] mb-16">
          <div className="flex flex-col">
            <div className="text-3xl font-[400] mb-4">
              <p>Hello, my name is</p>
            </div>
            <div className="text-yellow xl:text-9xl sm:text-8xl text-7xl font-[800]">
              <div className="flex drop-shadow-[-5px_-5px_0px_rgba(0,0,0)]">
                {firstName.map((first) => (
                  <div className="flex-row hover:font-[800] hover:animate-waving-hand hover:text-pink">
                    {first.letter}
                  </div>
                ))}
              </div>
              <div className="flex text-pink drop-shadow-[-5px_-5px_0px_rgba(0,0,0)]">
                {lastName.map((last) => (
                  <div className="flex-row hover:font-[800] hover:animate-waving-hand hover:text-yellow">
                    {last.letter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center">
          <div className="lg:mr-16">
            <Content />
          </div>
          <div className="lg:ml-16 mt-16 lg:max-w-[300px] max-w-[600px] mx-auto">
            <img
              className="border-4 border-silver drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] hover:scale-[1.7]"
              src={CV}
              alt="CV"
            />
          </div>
        </div>
        <Works />
      </div>
    </>
  );
}

export default Home;
