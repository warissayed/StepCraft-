import React from "react";
import "./nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your scarch shoes"
        />
        <FaSearch />
      </div>
      <div className="profile-container">
        <a href="somthing.com">
          <FiHeart className="nav-icons" />
        </a>
        <a href="somthing.com">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="somthing.com">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
