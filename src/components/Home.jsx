import React from "react";
import bgImg from "../assets/Banner_img.png";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="banner h-[480px] w-full relative flex justify-center items-center bg-cover bg-center"
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
            <button className="font-bold border-4 rounded-full p-4 mx-3 hover:bg-lime-300 hover:text-black">
              Explore Now
            </button>
            <button className="font-bold border-4 rounded-full p-4 mx-3 hover:bg-lime-300 hover:text-black">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
