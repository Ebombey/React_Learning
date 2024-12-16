import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setBgColor("#1a1a1a");

    if (e.currentTarget.className === "ctn") {
      setShowInput(false);
      setBgColor("white");
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center h-screen transition duration-700 ease-in ctn"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search...." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
