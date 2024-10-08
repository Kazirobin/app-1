import React from "react";
import bgImg from "../assets/Banner_img.png";
import Recipes from "./Recipes";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="banner lg:h-[480px] md:h-[600px] w-full relative flex justify-center items-center bg-cover bg-center p-8"
      >
        <div className="text-white  xl:w-3/5 flex flex-col justify-center px-4 gap-5 h-full">
          <h1 className="font-bold text-4xl leading-10">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="leading-2 my-4">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div>
            <button className="font-bold border-4 rounded-full lg:p-4 p-2 m-3 hover:bg-lime-300 hover:text-black">
              Explore Now
            </button>
            <button className="font-bold border-4 rounded-full lg:p-4 p-2  mb-3 hover:bg-lime-300 hover:text-black">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
      <Recipes/>
    </>
  );
};

export default Home;
