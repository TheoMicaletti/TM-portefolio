import React from "react";
import Content from "../component/Content";
import Works from "../component/Works";

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
        <Content />
        <Works />
      </div>
    </>
  );
}

export default Home;
