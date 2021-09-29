import React, { useState, useEffect }from 'react';
import { Link } from "react-router-dom";

const LogPanelDashb = () => {

    const moment = require("moment");
    const today = moment().format("dddd MMMM Do YYYY");
    
  
    const [meal, setMeal] = useState([])
    let todayMeals
  
      useEffect(() => {
        fetch("/nutrition")
        .then(res => res.json())
        .then(meal => setMeal(meal))
    }, []);
  
    
    todayMeals = meal.filter((element) => moment(element.date).format("dddd MMMM Do YYYY") === today)
  
    
    //getting breakfast data
    const breakfast = todayMeals.filter(ele => ele.mealtype === 'Breakfast')
    const breakfastKcal = breakfast.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
    console.log(breakfastKcal)

     //getting lunch data by date
     const lunch = todayMeals.filter(ele => ele.mealtype === 'Lunch')
     const lunchKcal = lunch.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
     console.log(lunchKcal)
 
 
     //getting dinner data by date
     const dinner = todayMeals.filter(ele => ele.mealtype === 'Dinner')
     const dinnerKcal = dinner.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
     console.log(dinnerKcal)
     
     //getting snack data by date
     const snack = todayMeals.filter(ele => ele.mealtype === 'Snack')
     const snackKcal = snack.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
    console.log(snackKcal)
    
    return (
        <div className="">
            <h1 className="text-left m-3 font-bold text-gray-600">Overview</h1>
            <div className="items-center justify-center grid grid-cols-3 bg-white py-2 px-4 text-gray-700 rounded-lg m-3 bg-opacity-20 shadow-lg">
              <div className="col-span-2 uppercase tracking-wider text-left my-auto text-xs my-auto">  Breakfast </div>
               <div className="text-md my-auto text-right text-indigo-600"> {breakfastKcal}kcal </div>
            </div>
            
                <div className="items-center justify-center grid grid-cols-3 bg-white py-2 px-4 text-gray-700 rounded-lg m-3 bg-opacity-20 shadow-lg">
                <div className="col-span-2 uppercase tracking-wider text-left my-auto text-xs my-auto">  Lunch </div>
                <div className="text-md my-auto text-right text-indigo-600"> {lunchKcal}kcal </div></div>
            
                <div className="items-center justify-center grid grid-cols-3 bg-white py-2 px-4 text-gray-700 rounded-lg m-3 bg-opacity-20 shadow-lg">
                <div className="col-span-2 uppercase tracking-wider text-left my-auto text-xs my-auto">  Dinner </div>
                <div className="text-md my-auto text-right text-indigo-600"> {dinnerKcal}kcal </div></div>
            
                <div className="items-center justify-center grid grid-cols-3 bg-white py-2 px-4 text-gray-700 rounded-lg m-3 bg-opacity-20 shadow-lg">
                <div className="col-span-2 uppercase tracking-wider text-left my-auto text-xs my-auto">  Snack </div>
                <div className="text-md my-auto text-right text-indigo-600"> {snackKcal}kcal </div></div>
            
                <div className="items-center justify-center bg-base border-indigo-600 border-2 border-dashed py-2 px-4 text-indigo-600 rounded-md m-3 opacity-50 hover:opacity-100 hover:border-solid">
                <Link to="/log" className="col-span-2 uppercase tracking-wode text-center my-auto text-xs font-medium my-auto">  + Add Item </Link>
                </div>
        
        </div>
    )
}

export default LogPanelDashb
