import React from 'react'
import bgImg from '../assets/Banner_img.png'
const Home = () => {
  return (
    <>
    <div className=" h-80  w-full relative flex justify-center items-center">
        <img src={bgImg} alt="" className='absolute z-0 top-0 left-0'/>
        <div className='text-white z-10 absolute mt-9 w-4/5 flex flex-col justify-end h-full'>

    <h1 className='font-bold text-4xl leading-10'>Discover an exceptional cooking class tailored for you!</h1>
    <p className='leading-2 my-4'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
    <div >
        <button className='font-bold border-4 rounded-full p-4 mx-3 hover:bg-lime-300 hover:text-black'>Explore Now</button>
        <button className='font-bold border-4 rounded-full p-4 mx-3 hover:bg-lime-300 hover:text-black'>Our Feedback</button>
    </div>
        </div>
    </div>
    </>
  )
}

export default Home