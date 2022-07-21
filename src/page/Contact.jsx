import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Link to="/">
        <div className="drop-shadow-[-4px_-4px_0px_rgba(160,160,160)] bg-pink w-fit mx-auto p-4 border-4 border-silver hover:border-[#ffffff] cursor-pointer">
          Back to home page
        </div>
      </Link>
      <div className="text-center mt-40 text-2xl">
        <p>You can send an email to :</p>
        <h3 className="mt-4 font-[600] text-4xl">theo.micaletti@icloud.com</h3>
      </div>
    </>
  );
}

export default Contact;
