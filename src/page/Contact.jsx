import React from "react";

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
      <div className="text-center mt-40 text-2xl">
        <p className="mb-4">Click my email and send me a message !</p>
        <a
          className="flex sm:text-4xl justify-center font-[600] text-xl hover:text-yellow"
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
