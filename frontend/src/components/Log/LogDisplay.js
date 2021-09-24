import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';
const dayjs = require('dayjs')

const LogDisplay = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/nutrition")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(data)

    const day = dayjs(data.date).format('dddd, MMMM D, YYYY' )
    console.log(day)


    return (
        <div className="relative space-y-10 pb-2">
            <h1 className='text-left font-bold'>{day}</h1>

            {data !== [] &&
                    data.map((itemNutrition) =>
                      <Link to={`/nutrition/${itemNutrition._id}`}><FoodCard  {...itemNutrition}
                        />
                        </Link>
                    )}
        </div>
    )
}

export default LogDisplay
