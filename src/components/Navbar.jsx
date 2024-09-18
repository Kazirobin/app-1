import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/User_icon.svg";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl">Recipe Calories</h1>
        </div>
        <ul className="flex space-x-10 font-semibold text-gray-500">
          <li className="hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-black">
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <div className="flex">
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="pl-8 pr-4 py-2 rounded-3xl"
            />
            {/* Position the icon inside the input field */}
            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />

          </div>
          <button className="bg-lime-500 p-2 rounded-3xl"><img src={userIcon} alt="" srcset="" /></button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
