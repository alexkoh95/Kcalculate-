import React, { useState, useEffect, useHistory } from 'react';
import { Doughnut } from 'react-chartjs-2'

const DisplayTracker = ({ totalKcal, leftKcal }) => {


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
