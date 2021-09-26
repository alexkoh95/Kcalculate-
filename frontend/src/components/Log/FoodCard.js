import React from 'react'

const FoodCard = ({ name, calories, carbohydrates, protein, fats, weight, date, mealtype }) => {
    return (
        <div className='bg-white py-2 px-2 text-xs text-gray-700 flex grid grid-cols-6 rounded-md hover:bg-opacity-50 m-3 divide-x divide-white bg-opacity-40 shadow-lg transform hover:scale-105 transition duration-500 ease-in-out hover:animate-pulse'>
            <div className="my-auto leading-3"><p className='font-bold capitalize'>{name}</p></div>
            <div className="my-auto"><strong>C</strong> {carbohydrates}</div>
            <div className="my-auto"><strong>P</strong> {protein}</div>
            <div className="my-auto"><strong>F</strong> {fats}</div>
            <div className="my-auto"><p className='font-extralight text-lg'>{calories}</p></div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>

        </div>
    )
}

export default FoodCard
