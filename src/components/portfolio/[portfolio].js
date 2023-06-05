import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../DataContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PortfolioPage = () => {
  const { id } = useParams();
  const data = useContext(DataContext);
  const portfolioItem = data.find((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <div className="pt-20 bg-gray-800 pb-20  min-h-screen">
      <div className="max-w-5xl text-white flex flex-col mx-auto">
        <button className="bg-[#ffffff07] mb-10 rounded-2xl w-fit self-end px-8 py-2 shadow-2xl border border-[#ffffff2a]">
          <p className="text-white text-xl ">Return to homepage</p>
        </button>
        <div className="bg-[#ffffff07] rounded-3xl p-12 shadow-2xl border border-[#ffffff2a]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">{portfolioItem.title}</h1>
              <p>{portfolioItem.introduction}</p>
            </div>
            <div className="h-[400px]">
              <div className="h-full">
                <img
                  src={`/images/${portfolioItem.id}.png`}
                  className="object-cover w-full object-top h-full rounded-xl"
                  alt="Project Screenshot"
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{portfolioItem.section1_title}</h2>
              <p className="text-gray-300 mt-4">
                {portfolioItem.section1_title}
              </p>
            </div>
            <ul className="flex flex-wrap mt-6">
              {portfolioItem.links.map((link) => (
                <li key={link.label} className="mr-4">
                  <a
                    href={link.url}
                    className="flex items-center text-white hover:text-gray-200"
                  >
                    {link.label}
                    <FontAwesomeIcon className="ml-2" icon={faGithub} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-wrap gap-4 mt-8">
            {portfolioItem.tech.map((tech) => (
              <li key={tech}>
                <img
                  className="h-6"
                  src={`/images/${tech.toLowerCase()}.png`}
                  alt={tech}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PortfolioPage;
