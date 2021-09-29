import React, { useState, useEffect, useHistory } from 'react';
import { Doughnut } from 'react-chartjs-2'

const DisplayTracker = () => {

  const moment = require("moment");
  const today = moment().format("dddd MMMM Do YYYY");
  

  const [meal, setMeal] = useState([])
  let targetKcal, todayMeals, totalKcal, leftKcal 

    useEffect(() => {
      fetch("/nutrition")
      .then(res => res.json())
      .then(meal => setMeal(meal))
  }, []);

  
  todayMeals = meal.filter((element) => moment(element.date).format("dddd MMMM Do YYYY") === today)
  totalKcal = todayMeals.map(item => item.calories).reduce((prev, curr) => prev + curr, 0)
  leftKcal = 3500 - totalKcal

    const data = {
        labels: ['Total Kcal', 'Kcal left'],
        datasets: [
          {
            label: '# of Votes',
            data: [totalKcal, leftKcal],
            backgroundColor: [
    
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
           
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    
    return (
        <div className=''>
            <Doughnut data={data} />
        </div>
    )
}

export default DisplayTracker
