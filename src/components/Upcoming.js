import React from "react";
import { useNavigate } from "react-router-dom";

const Upcoming = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <div className="bg-gray-800 gap-4 text-white min-h-screen flex flex-row items-center justify-center ">
      <h1 className="pt-[10px] text-3xl">Coming Soon...</h1>
      <p
        id="back"
        onClick={handleClick}
        className="text-3xl font-semibold cursor-pointer"
      >
        Back to homepage
      </p>
    </div>
  );
};

export default Upcoming;
