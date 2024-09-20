import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="bg-slate-200">
      <h1 className="font-bold text-3xl">Our Recipes</h1>
      <p className="font-semibold text-xl mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, officiis
        rem commodi 
      </p>
      <div className="flex lg:flex-row md:flex-col flex-col">
        <div className="m-auto lg:w-3/5 grid sm:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr]  grid-cols-[1fr]">
         {/* recipes map */}
         {recipes.map((recipe,index) => 
          <Recipe key={index} indx={index} recipe={recipe}/>
        )}


        </div>
        <div className="lg:w-2/5 border-4 border-lime-800">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            quibusdam voluptatibus nam beatae consectetur dignissimos, sed ab
            voluptate reprehenderit amet ratione suscipit quis eveniet laborum
            ipsum nesciunt placeat debitis. Sunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
