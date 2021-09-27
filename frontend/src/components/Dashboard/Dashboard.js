import React from 'react'
import DisplayTracker from './DisplayTracker'

const Dashboard = () => {
    return (
        <div className="h-screen">
            <h1>this is Dashboard</h1>

            <div className="grid grid-cols-3 space-x-5">

                <div className="col-span-2 bg-white">
                <h1>left side of the dashboard</h1>
                </div>

                <div className='items-center justify-center bg-white py-2 px-2 text-gray-700 rounded-lg m-3 bg-opacity-40 shadow-lg '>
                    <div className="m-5"><DisplayTracker /></div>
                    <div>3300kcal</div>
                    <div></div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard
