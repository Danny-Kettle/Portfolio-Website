/* eslint-disable */
import Hero from "../components/Hero.js";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout.js";
import Portfolio from "../components/Portfolio.js";
import Aboutme from "../components/Aboutme.js";
import Contact from "../components/Contact.js";
import Skills from "../components/Skills.js";
import React, { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/upcoming`);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.classList.contains("tech-click")) {
        event.preventDefault();
        event.stopPropagation();
        const referenceElement = document.getElementById("tech-stack");
        referenceElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="bg-gray-800 pb-20 flex">
      <div className="flex flex-col w-10/12 mx-auto">
        <div id="hero" className="z-[99]">
          <Hero />
        </div>
        <div id="portfolio" className="z-[99]">
          <Portfolio handleClick={handleClick} />
        </div>
        <div id="about">
          <Aboutme />
        </div>
        <div id="tech-stack">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Layout />
      </div>
    </div>
  );
};

export default Home;
