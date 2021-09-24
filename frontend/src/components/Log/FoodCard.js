import React from 'react'

const FoodCard = ({ name, calories, carbohydrates, protein, fats, weight, date, mealtype }) => {
    return (
        <div className='bg-white py-2 px-2 text-xs text-gray-700 flex grid grid-cols-5 rounded-md hover:bg-opacity-50 m-3 divide-x-2 divide-white bg-opacity-40 shadow-lg transform hover:scale-105 transition duration-500 ease-in-out hover:animate-pulse'>
            <div><p className='font-bold '>{name}</p></div>
            <div><p className='font-bold'>C</p> {carbohydrates}</div>
            <div><p className='font-bold'>P</p> {protein}</div>
            <div><p className='font-bold'>F</p> {fats}</div>
            <div><p className='font-extralight text-lg'>{calories}</p></div>

        </div>
    )
}

export default FoodCard
