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
            <li className="hover:text-black">
              <Link to="/page">Page</Link>
            </li>
          </ul>
        </div>
        <div className={!isNavOpen ? "flex justify-center gap-2" : "hidden"}>
          <div className="flex items-center border-lime-400 border-4 p-2 rounded-full ">
            <CiSearch className=" text-gray-500 mx-2" />
            <input
              type="text"
              name="search"
              placeholder="Search"
              className=" w-8/12"
            />
            {/* Position the icon inside the input field */}
          </div>
          <button className="flex items-center border-lime-400 border-4  rounded-full p-2 hover:bg-lime-400">
            <img src={userIcon} alt="" className="size-8"/>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
