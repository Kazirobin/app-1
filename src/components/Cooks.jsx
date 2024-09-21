import React from 'react'

const Cooks = ({cookList,id}) => {
    const {name,calories, preparing_time} = cookList
  return (
    <div className='flex justify-around items-center'>
 <div className='grid-cols-[55px,1.6fr,1fr,1fr,2fr] lg:hidden md:hidden sm:hidden flex flex-col'>
        <p> </p>
        <p className='text-left font-bold mb-3'>name</p>
        <p className='text-left font-bold mb-3'>Time</p>
        <p className='text-left font-bold mb-3'>Calories</p>
        
        </div>
    <div className='lg:grid md:grid sm:grid items-start grid-cols-[40px,2fr,1fr,1fr,1fr,1fr] my-4 py-2 border-b-2 border-gray-500 flex flex-col'>
        <p className='text-right place-self-end self-center font-bold p-2'>{id+1}</p>
        <p className='text-left'>{name}</p>
        <p className='text-left'>{preparing_time}</p>
        <p className='text-left'>{calories} calories</p>
        <button><h1 className='font-bold bg-lime-400 px-4 py-2 rounded-full'>Preparing</h1></button>
    </div>
    </div>
  )
}

export default Cooks