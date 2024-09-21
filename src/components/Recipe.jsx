import React from 'react'

const Recipe = ({recipe,handleCookLists}) => {
    const {name, image, description, ingredients} = recipe
  return (
    <div className='mb-3'>
       <div className="bg-white shadow-xl rounded-3xl h-full flex justify-between flex-col mx-3 p-3">
  <figure className="">
    <img
      src={image}
      alt="Recipes"
      className="rounded-3xl bg-center h-56 w-full" />
  </figure>
  <div className="card-body items-left text-left">
    <h2 className="card-title font-bold">{name}</h2>
    <p className='text-slate-500 my-6'>{description}</p>
    <hr className='' />
    <hr className='border border-indigo-200' />
    <p className='font-bold p-3'>Ingredients: {ingredients.length}</p>
  
    {ingredients.map(ingredient => {return(
        <><ul className='ml-8'>
<li className='list-disc ml-6'>

        {ingredient}
</li>
        </ul>
        </>
    )})}
    <div className='w-full text-right'>

    <button className='bg-lime-400 px-6 py-2 self-end rounded-full cursor-pointer' onClick={() => { handleCookLists(recipe) }}>Want to Cook</button>
    </div>
  </div>
</div>
        </div>
  )
}

export default Recipe