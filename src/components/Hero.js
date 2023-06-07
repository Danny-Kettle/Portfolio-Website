import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
  const [envolpeOpen, setEnvolpeOpen] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setEnvolpeOpen(!envolpeOpen);
  };

  return (
    <div>
      <div className="min-h-screen -mb-60 relative min-w-full text-white flex justify-center flex-col">
        <div className="flex flex-col  gap-10 max-w-4xl mx-auto">
          <div className="flex text-center flex-col gap-4">
            <h1 className="text-4xl">
              Hi 👋 I'm <span className="font-semibold">Danny</span>
            </h1>
            <h3 className="text-3xl">
              A <span className="italic">passionate </span>
              <span className="font-semibold">Software Engineer .</span>
            </h3>
          </div>
          <div>
            <ul className="list-none absolute z-[99] cursor-pointer text-center text-4xl flex flex-row gap-8">
              <li>
                <FontAwesomeIcon
                  onClick={() => {
                    window.open("https://github.com/Danny-Kettle", "_blank");
                  }}
                  className="shake"
                  icon={faGithub}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  className="bob"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/danny-kettle-922954195/",
                      "_blank"
                    );
                  }}
                  icon={faLinkedin}
                />
              </li>
              <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <FontAwesomeIcon
                  onClick={() => {
                    window.open("mailto:danny.kettle@outlook.com", "_blank");
                  }}
                  icon={envolpeOpen === false ? faEnvelope : faEnvelopeOpen}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Hero;
