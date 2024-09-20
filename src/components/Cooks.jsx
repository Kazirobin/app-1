import React from 'react'

const Cooks = ({cookList,id}) => {
    const {name,calories, preparing_time} = cookList
  return (
    <div className='grid items-start grid-cols-[40px,2fr,1fr,1fr,1fr,1fr] my-4 py-2 border-b-2 border-gray-500'>
        <p className='text-right place-self-end self-center font-bold p-2'>{id+1}</p>
        <p className='text-left pl-3'>{name}</p>
        <p>{preparing_time}</p>
        <p>{calories} calories</p>
        <button><h1 className='font-bold bg-lime-400 px-4 py-2 rounded-full'>Preparing</h1></button>
    </div>
  )
}

export default Cooks