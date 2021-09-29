import React, { useState, useEffect, useHistory } from 'react';
import DisplayTracker from './DisplayTracker'
import LogPanelDashb from './LogPanelDashb';
import MacroBreakdown from './MacroBreakdown'
import SideNavBar from "../SideNavBar";
import WeightTracker from './WeightTracker';
import { Link } from "react-router-dom"
import axios from 'axios';

const Dashboard = () => {

    const [meal, setMeal] = useState(null)
    // const [user, setUser] = useState(null)
    // const [weight, setWeight] = useState(null)
    const moment = require("moment");
    const today = moment().format("dddd MMMM Do YYYY");
    const [loading, setLoading] = useState(true);
    // const history = useHistory();

    //from user data
    let userName, userTargetWeight, userProtein, userFats, userCarbs, targetKcal, weightForChart, todayMeals, totalKcal, leftKcal 
    
    const fetchAllData = () => {
        fetch("/nutrition")
            .then(res => res.json())
            .then(meal => setMeal(meal))
    
        // fetch("/nutrition/user/61540f9445702e1c982c79ed")
        //     .then(res => res.json())
        //     .then(user => setUser(user))
    
        // fetch("/nutrition/weight/all")
        //     .then(res => res.json())
        //     .then(weight => setWeight(weight))
    }

      useEffect(() => {
       fetchAllData()
    }, []);

    useEffect(() => {
        if (meal) {
        // userName = user.found[0].username
        // userTargetWeight = user.found[0].targetWeight
        // userProtein = user.found[0].targetProtein
        // userFats = user.found[0].targetFats
        // userCarbs = user.found[0].targetCarbohydrates
        // targetKcal = user.found[0].targetCalories
            
        todayMeals = meal.filter((element) => moment(element.date).format("dddd MMMM Do YYYY") === today)
        totalKcal = todayMeals.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
            leftKcal = targetKcal - totalKcal
            console.log(todayMeals)
            
        // weightForChart = weight.slice(-6)
            
        // console.log("this is :" , user)
        // console.log("this is :", userName)
        // console.log("this is :", totalKcal)
        // console.log("this is :", targetKcal)
        // console.log("this is :", meal)
        }
    }, [meal])
    
    
    
    // const targetKcal = user.found[0].targetCalories
    // const targetKcal = 2350
    // let totalKcal = todayMeals.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
    // const leftKcal = targetKcal - totalKcal

    return (
        <div className="">
            <div className=""><SideNavBar /></div>
            <main className="mx-4 p-9 pl-64">
            <div className="grid grid-cols-3 space-x-5 my-auto">

                <div className="col-span-2">
                        <div className="h-52 bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 py-2 px-2 m-3 text-gray-700 rounded-lg bg-opacity-20 text-left pl-8 pt-12 
                        bg-cover bg-center filter brightness-105" style={{backgroundImage:`url('https://i.ibb.co/Fn5LVQB/dashboard-banner.jpg')`}}>
                            <h1 className="text-4xl font-bold">Hello, { }</h1>
                            {/* <h1 className="text-4xl font-bold">Hello, Alex</h1> */}
                            <h1 className="text-lg pb-4">{today}</h1>
                            <button className="text-xs border-2 border-indigo-600 uppercase spacing-widest text-xs px-6 py-2 rounded-full border-opacity-80 hover:bg-indigo-600 hover:text-white"><Link to ="/log">Log Meal</Link></button>
                            <button className="text-xs border-2 border-indigo-600 uppercase spacing-widest text-xs px-6 py-2 ml-3 rounded-full border-opacity-80 hover:bg-indigo-600 hover:text-white"><Link to ="/loghistory">Review Logs</Link></button>
                    </div>

                    <div className="grid grid-cols-2 space-x-5 pt-5">
                        
                            <div>
                                {/* {weight && <WeightTracker targetWeight={userTargetWeight} />} */}
                                {/* <WeightTracker weight={weightForChart} targetWeight={userTargetWeight} /> */}
                        </div>

                        <div>
                                {/* <LogPanelDashb meal={meal} /> */}
                        </div>

                    </div>
                </div>

                <div className='items-center justify-center bg-white py-2 px-2 text-gray-700 rounded-lg m-3 bg-opacity-20 shadow-lg '>
                    <div className="pt-3">
                        <p className="tracking-widest uppercase text-xs text-yellow-500 text-opacity-70">Remaining calories:</p>
                        <h1 className="text-3xl font-medium">{leftKcal}kcal</h1>
                        <p className="tracking-wider uppercase text-sm text-indigo-500">Goal: {targetKcal}kcal</p>


                    </div>
                    <div className="m-3 pb-3"><DisplayTracker leftKcal={leftKcal} totalKcal={totalKcal}/></div>
                        {/* <div className="m-3 border-t-2 pt-3"><MacroBreakdown protein={userProtein} carbs={userCarbs} fats={userFats} /></div> */}
                        {/* <div className="m-3 border-t-2 pt-3"><MacroBreakdown todayMeals={todayMeals} /></div> */}
                    
                    <div></div>
                </div>


            </div>
            </main>
        </div>
    )
}

export default Dashboard
