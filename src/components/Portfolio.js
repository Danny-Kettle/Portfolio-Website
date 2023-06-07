import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DataContext } from "./DataContextProvider";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Portfolio = ({ handleClick }) => {
  const data = useContext(DataContext);

  const handleLinkClick = (event, url) => {
    event.stopPropagation(); // Prevents the event from propagating to the parent div
    console.log("Opening Link");
    window.open(url, "_blank"); // Opens the link in a new window
  };

  const handleTechClick = (event) => {
    event.stopPropagation(); // Prevents the event from propagating to the parent div
    const referenceElement = document.getElementById("tech-stack");
    referenceElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-40">
      <div className="max-w-5xl flex flex-col gap-20 text-white mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            id={item.id}
            onClick={(e) => handleClick(item.id, e)}
            className="cursor-pointer bg-[#ffffff07] rounded-3xl p-12 shadow-2xl gap-20 border border-[#ffffff2a] flex flex-col justify-center transition duration-500 ease-in-out hover:scale-105"
          >
            <div className="h-[275px] flex flex-row gap-12">
              <div className="flex-1 self-center h-full rounded-xl shadow-2xl">
                <img
                  src={`/Portfolio-Website/images/${item.id}.png`}
                  className="object-cover w-full h-full rounded-xl object-top"
                />
              </div>
              <div className="flex-1">
                <section className="max-w-md text-center h-full mx-auto flex flex-col gap-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="font-regular text-gray-300 leading-8">
                    {item.description}
                  </p>
                  <ul className="flex text-md mt-auto flex-row justify-center gap-4">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <a
                          onClick={(e) => handleLinkClick(e, link.url)}
                          className={`font-semibold flex flex-row gap-3 items-center text-${link.color}`}
                        >
                          {link.label}{" "}
                          <FontAwesomeIcon
                            className="text-xl"
                            icon={faGithub}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <ul className="flex flex-row gap-12 mt-auto justify-center h-6">
              {item.tech.map((tech) => (
                <li key={tech}>
                  <img
                    onClick={(e) => {
                      handleTechClick(e);
                    }}
                    className="z-50 h-full object-cover tech tech-click"
                    src={`/Portfolio-Website/images/${tech.toLowerCase()}.png`}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
