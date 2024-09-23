import React from "react";

const Cooked = ({ cookList, id ,handleDone}) => {
  const { name, calories, preparing_time } = cookList;
  return (
    <div className="flex flex-col">
      {/* Small Device Title ID Start */}
      <div className="lg:hidden md:hidden sm:hidden flex  border-b-4 border-t-4 border-lime-400">
        <p className="font-bold text-2xl m-auto">{id + 1}</p>
      </div>
      {/* Small Device Title ID End Cooked*/}

      <div className="flex justify-center gap-7">
        {/* Small Device Title Bar Start Cooked*/}
        <div className="lg:hidden md:hidden sm:hidden  space-y-3">
          <p className="mb-10"> </p>
          <p className="font-bold">Name</p>
          <p className="font-bold">Time</p>
          <p className="font-bold">Calories</p>
          <div className="block h-12"></div>
        </div>
        {/* Small Device Title Bar End */}
        <div className="overflow-hidden lg:grid md:grid md:grid-cols-[15px,4fr,2fr,2fr,3fr] md:gap-10 md:justify-items-start md:border-4 md:space-y-0 sm:space-y-0 sm:grid grid-cols-[14px,2fr,1fr,1fr,2fr] mt-4 space-y-3 flex flex-col justify-center items-center">
          {/*
        <>
        <p className='   font-bold  lg:grid md:grid sm:grid hidden'>{id+1}</p>
        <p className=''>{name}</p>
        <p className='text-left font-bold mb-2'>{preparing_time}</p>
        <p className='text-left font-bold mb-4'>{calories} calories</p>
        <button><h1 className='font-bold bg-lime-400 px-4 py-2 rounded-full lg:mt-5  '>Preparing</h1></button> 
        </>
        */}
          <p className="font-bold  lg:grid md:grid sm:grid hidden justify-self-center">
            {id + 1}
          </p>
          <p className="text-left">{name}</p>
          <p className="text-left">{preparing_time}</p>
          <p className="text-left">{calories} calories</p>
          <button className="">
            <h1 onClick={() => { handleDone(cookList) }} className="font-bold bg-lime-400  rounded-full lg:mt-2 py-1 px-4 ">
              Done
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cooked;
