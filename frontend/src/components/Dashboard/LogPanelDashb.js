import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';

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
            <h1 className="text-left m-3">Monday, 16 November 2021</h1>
            <div className="items-center justify-center grid grid-cols-3 bg-white py-3 px-4 text-gray-400 rounded-lg m-3 bg-opacity-20 shadow-lg">
              <div className="col-span-2 uppercase tracking-wode text-left my-auto text-md font-semibold my-auto">  Breakfast </div>
               <div className="text-lg my-auto text-center"> {breakfastKcal}kcal </div>
            </div>
            
                <div className="items-center justify-center bg-white py-2 px-2 text-gray-700 rounded-lg m-3 bg-opacity-20 shadow-lg">
                Lunch {lunchKcal}kcal</div>
            
                <div className="items-center justify-center bg-white py-2 px-2 text-gray-700 rounded-lg m-3 bg-opacity-20 shadow-lg">
                Dinner {dinnerKcal}kcal</div>
         {/* <Tab.Group>
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
                   {breakfastKcal}
                        
                    </Tab.Panel>

                    <Tab.Panel >
                   {lunchKcal}
                        
                    </Tab.Panel>

                
                    <Tab.Panel >
                   
                       {dinnerKcal}
                      
                   
                        
                    </Tab.Panel>

                    <Tab.Panel >
                   {snackKcal}
                    </Tab.Panel>


                </Tab.Panels>
            </Tab.Group> */}
        </div>
    )
}

export default LogPanelDashb
