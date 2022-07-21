import React from "react";
import { Link } from "react-router-dom";

let email = [
  { id: 1, letter: "t" },
  { id: 2, letter: "h" },
  { id: 3, letter: "e" },
  { id: 4, letter: "o" },
  { id: 5, letter: "." },
  { id: 6, letter: "m" },
  { id: 7, letter: "i" },
  { id: 8, letter: "c" },
  { id: 9, letter: "a" },
  { id: 10, letter: "l" },
  { id: 11, letter: "e" },
  { id: 12, letter: "t" },
  { id: 13, letter: "t" },
  { id: 14, letter: "i" },
  { id: 15, letter: "@" },
  { id: 16, letter: "i" },
  { id: 17, letter: "c" },
  { id: 18, letter: "l" },
  { id: 19, letter: "o" },
  { id: 20, letter: "u" },
  { id: 21, letter: "d" },
  { id: 22, letter: "." },
  { id: 23, letter: "c" },
  { id: 24, letter: "o" },
  { id: 25, letter: "m" },
];

function Contact() {
  return (
    <>
      <Link to="/">
        <div className="drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] bg-pink w-fit mx-auto p-4 border-4 border-silver hover:border-[#ffffff] cursor-pointer">
          Back to home page
        </div>
      </Link>
      <div className="text-center mt-40 text-2xl">
        <p className="mb-4">Click on the email send a message to me !</p>
        <a
          className="flex justify-center font-[600] text-5xl hover:text-yellow"
          href="mailto:theo.micaletti@icloud.com"
        >
          {email.map((first) => (
            <div className="flex-row hover:font-[800] hover:animate-waving-hand hover:text-pink">
              {first.letter}
            </div>
          ))}
        </a>
      </div>
    </>
  );
}

export default Contact;
