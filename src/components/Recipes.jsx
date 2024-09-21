import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Cooks from "./Cooks";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cookLists, setCookLists] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const handleCookLists = (cookList) => {
    const newCookLists = [...cookLists, cookList];
    setCookLists(newCookLists);
    console.log(cookLists);
  };
  return (
    <div className="bg-slate-200">
      <h1 className="font-bold text-3xl pt-5">Our Recipes</h1>
      <p className="font-semibold text-xl py-5 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, officiis
        rem commodi
      </p>

      <div className="flex lg:flex-row md:flex-col flex-col">

        <div className="m-auto grid lg:w-3/5  sm:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr]  grid-cols-[1fr] px-2">
          {/* recipes map */}
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              indx={index}
              recipe={recipe}
              handleCookLists={handleCookLists}
            />
          ))}
        </div>

        <div className="lg:w-2/5 bg-white shadow-xl rounded-3xl">
          <h1 className="font-bold text-xl my-3">
            Want to cook:{" "}
            {cookLists.length < 10 ? `0${cookLists.length}` : cookLists.length}
          </h1>
          <div className="lg:grid-cols-[0.44fr,95px,90px,100px,10px] lg:grid md:grid md:grid-cols-[1.17fr,1fr,0.5fr,1fr,1fr] sm:grid hidden">
            {/* <p> </p>
            <p className="text-center font-bold ">name</p>
            <p className="text-center font-bold mb-3">Time</p>
            <p className="text-center font-bold mb-3">Calories</p> */}
            <p className=""> </p>
            <p className="font-bold capitalize text-left">name</p>
            <p className="font-bold capitalize text-left">Time</p>
            <p className="font-bold capitalize text-left">Calories</p>
            <p className="font-bold capitalize text-left"></p>

          </div>
          {cookLists.map((cookList, index) => {
            return (
              <>
                <Cooks key={index} id={index} cookList={cookList} />
              </>
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default Recipes;
