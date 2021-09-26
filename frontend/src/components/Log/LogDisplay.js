import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';
import { Tab } from '@headlessui/react'

const dayjs = require("dayjs");

const LogDisplay = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/nutrition")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    console.log(data)

    // getting date to display day 
    // const day = dayjs(data[0].date).format('dddd, MMMM D, YYYY')
    // console.log(day)

    // getting all meals data
    const mealtype = data.map(meal => meal.mealtype)
    console.log(mealtype)

    //getting breakfast data 
    const breakfast = data.filter(ele => ele.mealtype === 'Breakfast')
    console.log(breakfast)

    //getting lunch data 
    const lunch = data.filter(ele => ele.mealtype === 'Lunch')
    console.log(lunch)

    //getting dinner data 
    const dinner = data.filter(ele => ele.mealtype === 'Dinner')
    console.log(dinner)
    
    //getting snack data 
    const snack = data.filter(ele => ele.mealtype === 'Snack')
    console.log(dinner)
    
    return (
        <div className="relative space-y-10 pb-2 p-4 rounded-lg border-2 border-white">
            <Tab.Group>
                <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                <Tab className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"> Breakfast</Tab>
               
                <Tab className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60" >Lunch</Tab>
               
                <Tab className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60">Dinner</Tab>
                
                <Tab className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg
                  focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60">Snack</Tab>
                </Tab.List>
                
                <Tab.Panels>
                   
                    <Tab.Panel >
                    {mealtype !== breakfast && breakfast.map((itemNutrition) =>
                      <Link to={`/log/${itemNutrition._id}`}><FoodCard  {...itemNutrition}
                        />
                        </Link>
                    )}
                        
                    </Tab.Panel>

                    <Tab.Panel >
                    {mealtype !== lunch && lunch.map((itemNutrition) =>
                      <Link to={`/log/${itemNutrition._id}`}><FoodCard  {...itemNutrition}
                        />
                        </Link>
                    )}
                        
                    </Tab.Panel>

                
                    <Tab.Panel >
                    {mealtype !== dinner && dinner.map((itemNutrition) =>
                      <Link to={`/log/${itemNutrition._id}`}><FoodCard  {...itemNutrition}
                        />
                        </Link>
                    )}
                        
                    </Tab.Panel>

                    <Tab.Panel >
                    {mealtype !== snack && snack.map((itemNutrition) =>
                      <Link to={`/log/${itemNutrition._id}`}><FoodCard  {...itemNutrition}
                        />
                        </Link>
                    )}
                        
                    </Tab.Panel>


                </Tab.Panels>
            </Tab.Group>

            {/* <h1 className='text-left font-bold pl-3 text-white'>{day}</h1> */}
            <div className="">
                
                {/* {data !== [] &&
                    data.map((itemNutrition) =>
                      <Link to={`/nutrition/${itemNutrition._id}`}><FoodCard  {...itemNutrition}
                        />
                        </Link>
                    )} */}
                </div>
            <div className="grid grid-cols-4">
                <div></div>
                <div className="col-span-2 ">
                    <h1 className="text-left text-xs font-medium">total carbohydrates: {data.map(item => item.carbohydrates).reduce((prev, curr) => prev + curr, 0)}g</h1>
                    <h1 className="text-left text-xs font-medium">total protein: {data.map(item => item.protein).reduce((prev, curr) => prev + curr, 0)}g</h1>
                    <h1 className="text-left text-xs font-medium">total fats: {data.map(item => item.fats).reduce((prev, curr) => prev + curr, 0)}g</h1>
                    </div>
            <div>
                <h1 className="text-right pr-5 text-3xl font-bold">{data.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)}</h1>
            </div>
        </div></div>
    )
}

export default LogDisplay
