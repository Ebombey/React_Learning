import React from "react";
import { FiHeart } from "react-icons/fi";
import "./Nav.css";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

type NavProps = {
  query: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

const Nav = ({ handleInputChange }: NavProps) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Shoes"
          onChange={handleInputChange}
        />
      </div>

      <div className="flex profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
