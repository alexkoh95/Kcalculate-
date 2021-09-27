import React, { useState, useEffect, useHistory } from 'react';
import DisplayTracker from './DisplayTracker'
import LogPanelDashb from './LogPanelDashb';
import MacroBreakdown from './MacroBreakdown'
import SideNavBar from "../SideNavBar";

const Dashboard = () => {

    const [meal, setMeal] = useState([])
    // const history = useHistory();

    useEffect(() => {
        fetch("/nutrition")
            .then(res => res.json())
            .then(meal => setMeal(meal))
    }, []);
    
    const targetKcal = 5190 
    let totalKcal = meal.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
    const leftKcal = targetKcal - totalKcal

    console.log(totalKcal);

    return (
        <div className="">
            <div className=""><SideNavBar /></div>
            <main className="mx-4 p-9 pl-64">
            <div className="grid grid-cols-3 space-x-5 my-auto">

                <div className="col-span-2">
                    <div className='h-44 bg-white py-2 px-2 m-3 text-gray-700 rounded-lg m-3 bg-opacity-20 shadow-lg text-left pl-8 pt-5'>
                        <h1 className="text-3xl">Hello, Peter</h1>
                    </div>

                    <div className="grid grid-cols-2 space-x-5">
                        <div>
yumme banner here
                        </div>

                        <div>
                        <LogPanelDashb meal={meal} />
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
                    <div className="m-3 border-t-2 pt-3"><MacroBreakdown meal={meal} /></div>
                    
                    <div></div>
                </div>


            </div>
            </main>
        </div>
    )
}

export default Dashboard
