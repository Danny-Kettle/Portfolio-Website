import React, { useState, useEffect } from "react";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");
      const portfolioSection = document.getElementById("portfolio");
      const contactSection = document.getElementById("contact");
      const techStackSection = document.getElementById("tech-stack");

      const scrollPosition = window.scrollY + 100;

      if (
        scrollPosition >= heroSection.offsetTop &&
        scrollPosition < portfolioSection.offsetTop
      ) {
        setActiveSection("hero");
      } else if (
        scrollPosition >= portfolioSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveSection("portfolio");
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < techStackSection.offsetTop
      ) {
        setActiveSection("about");
      } else if (
        scrollPosition >= techStackSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveSection("tech-stack");
      } else if (scrollPosition >= contactSection.offsetTop - 10) {
        setActiveSection("contact");
      }
    };

    const handleClick = (event) => {
      if (event.target) {
        const targetId = event.target.id;

        if (targetId === "nav-about") {
          const aboutSection = document.getElementById("about");
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        if (targetId === "nav-hero") {
          const heroSection = document.getElementById("hero");
          heroSection.scrollIntoView({ behavior: "smooth" });
        }
        if (targetId === "nav-portfolio") {
          const portfolioSection = document.getElementById("portfolio");
          portfolioSection.scrollIntoView({ behavior: "smooth" });
        }
        if (targetId === "nav-techstack") {
          const techStackSection = document.getElementById("tech-stack");
          techStackSection.scrollIntoView({ behavior: "smooth" });
        }
        if (targetId === "nav-contact") {
          const contactSection = document.getElementById("contact");
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="fixed flex flex-start items-center h-full z-[100] left-5">
      <ul
        id="nav"
        className="font-thin text-xl cursor-pointer flex flex-col py-4 gap-12 text-white  border-gray-50 pl-6"
      >
        <li>
          <p
            id="nav-hero"
            className={
              activeSection === "hero" ? "nav-effect font-semibold scale-105" : "nav-effect"
            }
          >
            Hero
          </p>
        </li>
        <li>
          <p
            id="nav-portfolio"
            className={
              activeSection === "portfolio"
                ? "nav-effect font-semibold"
                : "nav-effect"
            }
          >
            Portfolio
          </p>
        </li>
        <li>
          <p
            id="nav-about"
            className={
              activeSection === "about" ? "nav-effect font-semibold" : "nav-effect"
            }
          >
            About
          </p>
        </li>
        <li>
          <p
            id="nav-techstack"
            className={
              activeSection === "tech-stack"
                ? "nav-effect font-semibold"
                : "nav-effect"
            }
          >
            Tech Stack
          </p>
        </li>
        <li>
          <p
            id="nav-contact"
            className={
              activeSection === "contact"
                ? "nav-effect font-semibold"
                : "nav-effect"
            }
          >
            Contact
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Layout;
