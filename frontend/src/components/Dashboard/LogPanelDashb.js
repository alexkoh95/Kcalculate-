import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const LogPanelDashb = ({ meal }) => {

 
     //getting breakfast data by date
    const breakfast = meal.filter(ele => ele.mealtype === 'Breakfast' && ele.date === '2020-02-14T16:00:00.000Z')
    const breakfastKcal = breakfast.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
    console.log(breakfastKcal)

     //getting lunch data by date
     const lunch = meal.filter(ele => ele.mealtype === 'Lunch' && ele.date === '2020-02-14T16:00:00.000Z')
     const lunchKcal = lunch.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
     console.log(lunchKcal)
 
 
     //getting dinner data by date
     const dinner = meal.filter(ele => ele.mealtype === 'Dinner' && ele.date === '2020-02-14T16:00:00.000Z')
     const dinnerKcal = dinner.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
     console.log(dinnerKcal)
     
     //getting snack data by date
     const snack = meal.filter(ele => ele.mealtype === 'Snack' && ele.date === '2020-02-14T16:00:00.000Z')
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
