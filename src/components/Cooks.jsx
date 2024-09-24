import React from "react";

const Cooks = ({ cookList, id,handlePreparing }) => {
  const { name, calories, preparing_time } = cookList;
  return (
    <div className="flex flex-col">
      {/* Small Device Title ID Start */}
      <div className="lg:hidden md:hidden sm:hidden flex  border-b-4 border-t-4">
        <p className="font-bold text-2xl m-auto">{id + 1}</p>
      </div>
      {/* Small Device Title ID End */}


      <div className="flex sm:flex-col sm:gap-0 justify-center gap-7">


        
        {/* Small Device Title Bar Start */}
        <div className="lg:hidden md:hidden sm:hidden space-y-3">
          <p className="mb-10"> </p>
          <p className="font-bold">Name</p>
          <p className="font-bold">Time</p>
          <p className="font-bold">Calories</p>
          <div className="block h-12"></div>
        </div>
   {/* Small Device Title Bar End */}


        
        <div className="lg:grid grid-cols-[repeat(5,1fr)] flex flex-col justify-between">
      


          <p className="font-bold  lg:grid md:grid sm:grid hidden justify-self-center">
            {id + 1}

          </p>
           <p className="lg:hidden"></p>
            <p className="lg:hidden"></p> 
          <p className="text-left">{name}</p>
          <p className="text-left">{preparing_time}</p>
          <p className="text-left">{calories} calories</p>
          <button className="">
            <h1 onClick={() => { handlePreparing(cookList,preparing_time,calories) }} className="font-bold bg-lime-400  rounded-full lg:mt-2 py-1 px-4 ">
              Preparing
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cooks;
