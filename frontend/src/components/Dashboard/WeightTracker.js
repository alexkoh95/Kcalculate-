import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';

const WeightTracker = ({ targetWeight }) => {

    const [weight, setWeight] = useState({})
    const [user, setUser] = useState(null)

    let userTargetWeight, weightForChart

    const fetchAllData = () => {
    
        fetch("/nutrition/user/Alex")
            .then(res => res.json())
            .then(user => setUser(user))
    
        fetch("/nutrition/weight/all")
            .then(res => res.json())
            .then(weight => setWeight(weight))
    }


    //fetch all data
    useEffect(() => {
       fetchAllData()

    }, []);

    useEffect(() => {
        if (user && weight) {

        userTargetWeight = user.found[0].targetWeight

        }
    }, [user && weight])

    weightForChart = weight.slice(-6)

    const data = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Weight',
            data: [weightForChart[0].weight, weightForChart[1].weight, weightForChart[2].weight, weightForChart[3].weight, weightForChart[4].weight, weightForChart[5].weight],
            fill: false,
            backgroundColor: 'rgb(153, 102, 255)',
            borderColor: 'rgba(153, 102, 255, 0.2)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };


    return (
        <div>
            <h1 className="text-left m-3 font-bold text-gray-600 align-middle ">Weight Watch <button className="text-xs border-2 border-indigo-600 rounded-md px-3 ml-2 border-opacity-70 hover:bg-indigo-600 hover:text-white">update</button></h1>
            <Line data={data} options={options} />
            
            <div className="grid grid-cols-2 pt-2">
                <div className="text-left py-3 px-4 text-gray-700 rounded-lg m-3 border-2 border-indigo-600 border-opacity-60">
                <div className="text-xs"> Current Weight: </div>
                    <div className="text-2xl font-semibold">75kg</div>
                </div>

                <div className="text-left py-3 px-4 text-gray-700 rounded-lg m-3 border-2 border-indigo-600 border-opacity-60">
                <div className="text-xs"> Target Weight: </div>
                    <div className="text-2xl font-semibold">{targetWeight}kg</div>
                </div>

                </div>
        </div>
    )
}

export default WeightTracker
