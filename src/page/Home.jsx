import React from "react";
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
        <div className="text-whyte text-xl font-[200]">
          <h2 className="text-3xl font-[400] lg:mb-16 mb-8">
            And I'am a{" "}
            <span className="text-yellow font-[800]">front-end developer</span>
          </h2>
          <p>
            Currently in a web developer classroom (Wild Code School in
            Bordeaux), i'm specialised in ReactJS. During my training, I learn
            to use (in addition to React) NodeJS, expressJS, mySQL or even
            Docker. I have more affinities with front-end development (CSS3,
            Tailwind, Bootstrap, Figma,...). I also use GitHub and GitLab.
            However, I remain able to work on the back-side (server, API,
            databases,...).
          </p>
        </div>
        <Works />
      </div>
    </>
  );
}

export default Home;
