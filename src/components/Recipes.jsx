import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Cooks from "./Cooks";
import Cooked from "./Cooked";

// Import local storage functions
import {
  saveCookListsToLocal,
  getCookListsFromLocal,
  saveCookedListsToLocal,
  getCookedListsFromLocal
} from "../utilities/local.js";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cookLists, setCookLists] = useState([]);
  const [cookedLists, setCookedLists] = useState([]);
  const [totalTimes, setTotalTimes] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  // Load recipes from localStorage when component mounts
  useEffect(() => {
    const savedCookLists = getCookListsFromLocal();
    const savedCookedLists = getCookedListsFromLocal();

    if (savedCookLists.length) {
      setCookLists(savedCookLists);
    }
    if (savedCookedLists.length) {
      setCookedLists(savedCookedLists);
    }

    // Load recipe data from file or server
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // handleCookLists: When a recipe is added to "Want to Cook"
  const handleCookLists = (cookList) => {
    const isAlreadyAdded = cookLists.some(
      (item) => item.name === cookList.name
    );

    if (isAlreadyAdded) {
      alert("This recipe is already being cooked!");
    } else {
      const newCookLists = [...cookLists, cookList];
      setCookLists(newCookLists);
      saveCookListsToLocal(newCookLists); // Save to localStorage
    }
  };

  // handlePreparing: When a recipe is being cooked
  const handlePreparing = (cookedList, time, calories) => {
    const timeInt = (time) => {
      let value = parseInt(time);
      if (time.includes("hour")) {
        return value * 60;
      } else {
        return value;
      }
    };

    const isAlreadyAdded = cookedLists.some(
      (item) => item.name === cookedList.name
    );

    if (isAlreadyAdded) {
      alert("This recipe is already being cooked!");
      if (cookLists.length > 1) {
        const updatedCookLists = cookLists.filter((item) => item.name !== cookedList.name);
        setCookLists(updatedCookLists);
        saveCookListsToLocal(updatedCookLists); // Save to localStorage
      }
    } else {
      const newCookedLists = [...cookedLists, cookedList];
      setCookedLists(newCookedLists);
      setTotalTimes(parseInt(totalTimes) + timeInt(time));
      setTotalCalories(parseInt(totalCalories) + parseInt(calories));
      saveCookedListsToLocal(newCookedLists); // Save to localStorage

      if (cookLists.length > 1) {
        const updatedCookLists = cookLists.filter((item) => item.name !== cookedList.name);
        setCookLists(updatedCookLists);
        saveCookListsToLocal(updatedCookLists); // Save to localStorage
      }
    }
  };

  // handleDone: When a recipe is marked as done cooking
  const handleDone = (cookedList, time, calories) => {
    const updatedCookedLists = cookedLists.filter(
      (item) => item.name !== cookedList.name
    );
    setCookedLists(updatedCookedLists);
    saveCookedListsToLocal(updatedCookedLists); // Save to localStorage

    const timeInt = (time) => {
      let value = parseInt(time);
      if (time.includes("hour")) {
        return value * 60;
      } else {
        return value;
      }
    };
    setTotalTimes(parseInt(totalTimes) - timeInt(time));
    setTotalCalories(parseInt(totalCalories) - parseInt(calories));
  };

  return (
    <div className="bg-slate-200">
      <h1 className="font-bold text-3xl pt-5">Our Recipes</h1>
      <p className="font-semibold text-xl py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, officiis
        rem commodi
      </p>
      {/* Main Section */}
      <div className="flex lg:flex-row md:flex-col flex-col">
        {/* Left Section [Recipe] */}
        <div
          className="m-auto grid lg:w-3/6  sm:grid-cols-[1fr,1fr] 
        lg:grid-cols-[1fr,1fr]  grid-cols-[1fr] px-2"
        >
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

        {/* Right Section [Cooks] */}
        <div className="lg:w-2/5 bg-white shadow-xl rounded-3xl">
          <h1 className="font-bold text-xl my-3">
            Want to cook:{" "}
            {cookLists.length < 10 ? `0${cookLists.length}` : cookLists.length}
          </h1>

          {/* Large Device Title Bar Start Cooks */}
          <div className="grid grid-cols-[repeat(5,1fr)]">
            <p className=""> </p>
            <p className="font-bold text-left">Name</p>
            <p className="font-bold text-left">Time</p>
            <p className="font-bold text-left">Calories</p>
            <p className="font-bold text-left"></p>
          </div>

          {/* Large Device Title Bar End Cooks */}

          {cookLists.map((cookList, index) => {
            return (
              <Cooks
                key={index}
                id={index}
                cookList={cookList}
                handlePreparing={handlePreparing}
              />
            );
          })}
          {/* Cooked Starts  */}
          <div className="">
            <h1 className="font-bold text-xl my-3">
              Currently cooking:{" "}
              {cookedLists.length < 10
                ? `0${cookedLists.length}`
                : cookedLists.length}
            </h1>

            {/* Large Device Title Bar Start */}
            <div className="grid grid-cols-[repeat(5,1fr)] ">
              <p className=""> </p>
              <p className="font-bold capitalize text-left">name</p>
              <p className="font-bold capitalize text-left">Time</p>
              <p className="font-bold capitalize text-left">Calories</p>
              <p className="font-bold capitalize text-left"></p>
            </div>
            {/* Large Device Title Bar End */}

            {cookedLists.map((cookList, index) => {
              return (
                <Cooked
                  key={index}
                  id={index}
                  cookList={cookList}
                  handleDone={handleDone}
                />
              );
            })}
            <p>Total time : {totalTimes} Minutes</p>
            <p>Total calories : {totalCalories} Calories</p>
          </div>
          {/* Cooked Ends  */}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
