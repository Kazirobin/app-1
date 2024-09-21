import React from 'react'

const Cooks = ({cookList,id}) => {
    const {name,calories, preparing_time} = cookList
  return (
    <div className='flex flex-col justify-around items-center'>


      <div className='lg:hidden md:hidden sm:hidden flex'>
    <p>{id+1}</p>
      </div>
<div className='flex justify-center items-center gap-7'>

 <div className='grid-cols-[55px,1.6fr,1fr,1fr,2fr] lg:hidden md:hidden sm:hidden flex flex-col'>
        <p> </p>
        <p className='text-left font-bold mb-2'>Name</p>
        <p className='text-left font-bold mb-2'>Time</p>
        <p className='text-left font-bold mb-4'>Calories</p>
       <div className='block h-12'></div>
        </div>

    <div className='lg:grid md:grid sm:grid items-start grid-cols-[40px,2fr,1fr,1fr,1fr,1fr] my-4 py-2 border-b-2 border-gray-500 flex flex-col'>
        <p className='   font-bold  lg:grid md:grid sm:grid hidden'>{id+1}</p>
        <p className='text-left font-bold mb-2'>{name}</p>
        <p className='text-left font-bold mb-2'>{preparing_time}</p>
        <p className='text-left font-bold mb-4'>{calories} calories</p>
        <button><h1 className='font-bold bg-lime-400 px-4 py-2 rounded-full lg:mt-5  '>Preparing</h1></button>


        {/* <p className='text-left'>{name}</p>
        <p className='text-left font-bold mb-2'>{preparing_time}</p>
        <p >{calories} calories</p>
         */}
    </div>

</div>
    </div>
  )
}

export default Cooks