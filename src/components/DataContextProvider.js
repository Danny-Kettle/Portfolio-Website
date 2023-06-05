import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.classList.contains("tech-click")) {
        const referenceElement = document.getElementById("tech-stack");
        referenceElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    fetch("/data/casestudies.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
