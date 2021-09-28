import React, { useState, useEffect, useHistory } from 'react';
import DisplayTracker from './DisplayTracker'
import LogPanelDashb from './LogPanelDashb';
import MacroBreakdown from './MacroBreakdown'
import SideNavBar from "../SideNavBar";
import WeightTracker from './WeightTracker';
import { Link } from "react-router-dom"
import axios from 'axios';

const Dashboard = () => {

    const [meal, setMeal] = useState([])
    const [user, setUser] = useState([])
    const [weight, setWeight] = useState([])
    // const history = useHistory();

    //fetch nutrition data
    useEffect(() => {
        fetch("/nutrition")
            .then(res => res.json())
            .then(meal => setMeal(meal))
        
        // fetch("/nutrition/user/Alex")
        //     .then(res => res.json())
        //     .then(user => setUser(user))
        
        fetch("/nutrition/weight/all")
            .then(res => res.json())
            .then(weight => setWeight(weight))
            
        
    }, []);

    //fetch user data
    // useEffect(() => {
    //     fetch("/nutrition/user/Alex")
    //         .then(res => res.json())
    //         .then(user => setUser(user))
    // }, []);
    // console.log("fetcing user")
    // console.log(user)
    // console.log(user.found[0].targetWeight)
    // console.log(user.found[0].username)

    console.log("fetching weight")
    console.log(weight)

    //getting the last 6 data from weight array
    // const weightForChart = weight.slice(-6)
    // console.log(weightForChart)
    


    //defining all the values i need for user
    // const userName = user.found[0].username
    // const userTargetWeight = user.found[0].targetWeight
    // const userProtein = user.found[0].targetProtein
    // const userFats = user.found[0].targetFats
    // const userCarbs = user.found[0].targetCarbohydrates


    const moment = require("moment");
    const today = moment().format("dddd MMMM Do YYYY");
    console.log(today);

    // today's nutrition
    const todayMeals = meal.filter(
        (element) => moment(element.date).format("dddd MMMM Do YYYY") === today
      );
    
    // const targetKcal = user.found[0].targetCalories
    const targetKcal = 2350
    // let totalKcal = meal.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
    let totalKcal = todayMeals.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
    const leftKcal = targetKcal - totalKcal


    console.log('hello');
    console.log(todayMeals);
    console.log(totalKcal);

    return (
        <div className="">
            <div className=""><SideNavBar /></div>
            <main className="mx-4 p-9 pl-64">
            <div className="grid grid-cols-3 space-x-5 my-auto">

                <div className="col-span-2">
                        <div className="h-52 bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 py-2 px-2 m-3 text-gray-700 rounded-lg bg-opacity-20 text-left pl-8 pt-12 
                        bg-cover bg-center filter brightness-105" style={{backgroundImage:`url('https://i.ibb.co/Fn5LVQB/dashboard-banner.jpg')`}}>
                            {/* <h1 className="text-4xl font-bold">Hello, {userName}</h1> */}
                            <h1 className="text-4xl font-bold">Hello, Alex</h1>
                            <h1 className="text-lg pb-4">{today}</h1>
                            <button className="text-xs border-2 border-indigo-600 uppercase spacing-widest text-xs px-6 py-2 rounded-full border-opacity-80 hover:bg-indigo-600 hover:text-white"><Link to ="/log">Log Meal</Link></button>
                            <button className="text-xs border-2 border-indigo-600 uppercase spacing-widest text-xs px-6 py-2 ml-3 rounded-full border-opacity-80 hover:bg-indigo-600 hover:text-white"><Link to ="/loghistory">Review Logs</Link></button>
                    </div>

                    <div className="grid grid-cols-2 space-x-5 pt-5">
                        
                            <div>
                        {/* <WeightTracker targetWeight={userTargetWeight} /> */}
                                {/* <WeightTracker weight={weightForChart}/> */}
                        </div>

                        <div>
                        <LogPanelDashb todayMeals={todayMeals} />
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
                        {/* <div className="m-3 border-t-2 pt-3"><MacroBreakdown todayMeals={todayMeals} protein={userProtein} carbs={userCarbs} fats={userFats}/></div> */}
                        <div className="m-3 border-t-2 pt-3"><MacroBreakdown todayMeals={todayMeals} /></div>
                    
                    <div></div>
                </div>


            </div>
            </main>
        </div>
    )
}

export default Dashboard
