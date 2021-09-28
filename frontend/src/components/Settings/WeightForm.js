import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const WeightForm = () => {

    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('');

    const handleWeight = (e) => {
     setWeight(e.target.value) 
    }
    
    const handleDate = (e) => {
     setDate(e.target.value) 
    }
    

    return (
        <div className="bg-white rounded-lg bg-opacity-60">
            Current Weight: 78kg
            <form>
            <div >
          <label className="" >New Weight</label>
        </div>
        <div className="">
          <input className="m-1 p-1 rounded border-3 border-blue-800 text-center" type="text" onChange={handleWeight} />
        </div>
        <div className="mt-4">
          <label className="">date</label>
        </div>
        <div>
          <input className="m-1 p-1 rounded text-center" type="date" onChange={handleDate} />
        </div>

            </form>
            
        </div>
    )
}

export default WeightForm
