import React, { useState } from "react";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="pt-40">
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        <div className="tech-stack p-8 flex flex-col border border-[#ffffff2a] rounded-xl text-white">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold">Front End</h3>
            <div>
              <ul className="flex flex-row flex-wrap gap-10 italic">
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/html5.png" />
                  <p className="text-xs">HTML5</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/css3.png" />
                  <p className="text-xs">CSS3</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/javascript.png" />
                  <p className="text-xs">JavaScript</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/react.png" />
                  <p className="text-xs">React</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech tech" src="/images/nextjs.png" />
                  <p className="text-xs">Next.js</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/vue.png" />
                  <p className="text-xs">Vue</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/tailwindcss.png" />
                  <p className="text-xs">Tailwind</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/sass.png" />
                  <p className="text-xs">Sass</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/bootstrap.png" />
                  <p className="text-xs">Bootstrap</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/chartjs.png" />
                  <p className="text-xs">Chart.js</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/stripe.png" />
                  <p className="text-xs">Stripe</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`tech-stack p-8 flex flex-col rounded-xl border border-[#ffffff2a]  text-white `}
        >
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold">Back End</h3>
            <div>
              <ul className="flex flex-row italic gap-10">
                <li className="flex flex-col flex-wrap  gap-4 items-center">
                  <img className="h-8 tech" src="/images/nodejs.png" />
                  <p className="text-xs">Node</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/java.png" />
                  <p className="text-xs">Java</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/restapi.png" />
                  <p className="text-xs">Rest API</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/soap.png" />
                  <p className="text-xs">SOAP API</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/mvc.png" />
                  <p className="text-xs">MVC</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`tech-stack p-8 flex flex-col border border-[#ffffff2a] rounded-xl text-white`}
        >
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold">Tools</h3>
            <div>
              <ul className="flex flex-row flex-wrap gap-10 italic">
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/agile.png" />
                  <p className="text-xs">Agile</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/wordpress.png" />
                  <p className="text-xs">WordPress</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/adobexd.png" />
                  <p className="text-xs">Adobe XD</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/gimp.png" />
                  <p className="text-xs">Gimp</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/postman.png" />
                  <p className="text-xs">Postman</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/git.png" />
                  <p className="text-xs">Git</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/firebase.png" />
                  <p className="text-xs">Firebase</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/mongodb.png" />
                  <p className="text-xs">MongoDB</p>
                </li>
                <li className="flex flex-col gap-4 items-center">
                  <img className="h-8 tech" src="/images/cypress.png" />
                  <p className="text-xs">Cypress</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
