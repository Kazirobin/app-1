import React, { useState } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/User_icon.svg";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <nav className="p-4 flex space-y-4 lg:justify-between lg:items-center lg:flex-row flex-col ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-3xl">Recipe Calories</h1>
          </div>
          <div
            className="flex flex-col space-y-2 lg:hidden"
            onClick={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            <span className="block h-0.5 w-8 bg-gray-600 animate-pulse"></span>
            <span className="block h-0.5 w-8 bg-gray-600 animate-pulse"></span>
            <span className="block h-0.5 w-8 bg-gray-600 animate-pulse"></span>
          </div>
        </div>
        <div className={!isNavOpen ? "flex " : "hidden"}>
          <ul className="flex flex-col space-y-3 lg:space-y-0 w-full lg:space-x-10 lg:flex-row font-semibold text-gray-500 ">
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
        </div>
        <div
          className={
            !isNavOpen
              ? "flex xs:w-full justify-center items-center gap-5"
              : "hidden"
          }
        >
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="pl-8 pr-4 py-2 border-2 border-red-400 rounded-3xl"
            />
            {/* Position the icon inside the input field */}
            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"/>
          </div>
          <button className="bg-lime-500 size-10 p-2 rounded-3xl ">
            <img src={userIcon} alt="" srcset="" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
