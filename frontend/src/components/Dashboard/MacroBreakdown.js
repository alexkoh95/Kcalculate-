import React, { useState, useEffect, useHistory } from 'react';
import { Bar } from 'react-chartjs-2';

const MacroBreakdown = ({protein, carbs, fats }) => {

  const [meal, setMeal] = useState(null)
  let todayMeals

  const fetchAllData = () => {
    fetch("/nutrition")
        .then(res => res.json())
        .then(meal => setMeal(meal))
  }
  
  useEffect(() => {
    fetchAllData()

 }, []);

 useEffect(() => {
     if (meal) {      
     todayMeals = meal.filter((element) => moment(element.date).format("dddd MMMM Do YYYY") === today)
     }
 }, [meal])

    const moment = require("moment");
    const today = moment().format("dddd MMMM Do YYYY");
    
    const targetProtein = protein 
    let totalProtein = todayMeals.map(item => item.protein).reduce((prev, curr) => prev + curr, 0)
    
    const targetCarbs = carbs 
    let totalCarbs = todayMeals.map(item => item.carbohydrates).reduce((prev, curr) => prev + curr, 0)
    
    const targetFats = fats 
    let totalFats = todayMeals.map(item => item.fats).reduce((prev, curr) => prev + curr, 0)
    

    console.log(totalProtein);

    const data = {
        labels: ['Total Protein', 'Target Protein', 'Total Carbs', 'Target Carbs', 'Total Fats', 'Target Fats' ],
        datasets: [
          {
            label: 'Macronutrients',
            data: [totalProtein, targetProtein, totalCarbs, targetCarbs, totalFats, targetFats],
            backgroundColor: [
           
              'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              
              'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
      
              'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              
              'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            
          },
        ],
      };
      
      const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
                borderWidth: 2,
            },
            label: {
                display: false,
            },
        },
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: 'Protein',
          },
        },
      };

    
    return (
        <div className="">
             <Bar data={data} options={options} />
        </div>
    )
}

export default MacroBreakdown
