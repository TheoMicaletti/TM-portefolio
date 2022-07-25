import React from "react";

function Content() {
  return (
    <>
      <div className="text-whyte text-xl font-[200]">
        <h2 className="text-3xl font-[400] lg:mb-16 mb-8">
          And I'am a{" "}
          <span className="text-yellow font-[800]">front-end developer</span>
        </h2>
        <p>
          Currently in a web developer classroom (Wild Code School in Bordeaux),
          i'm specialised in ReactJS. During my training, I learn to use (in
          addition to React) NodeJS, expressJS, mySQL or even Docker. I have
          more affinities with front-end development (CSS3, Tailwind, Bootstrap,
          Figma,...). I also use GitHub and GitLab. However, I remain able to
          work on the back-side (server, API, databases,...).
        </p>
      </div>
    </>
  );
}

export default Content;
