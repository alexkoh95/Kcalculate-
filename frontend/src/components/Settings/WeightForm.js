import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const WeightForm = () => {

    const [user, setUser] = useState([])

    const [values, setValues] = useState({
        weight: '',
        date: '',
    })

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    useEffect(() => {
        fetch("/nutrition/user/Alex")
            .then(res => res.json())
            .then(user => setUser(user))
    }, []);
    // console.log("hello")
    // console.log(user)
    // console.log(user.found[0].targetWeight)

    const handleSubmit = e => {
        e.preventDefault();
    
        fetch("/nutrition/weight", {
            method: "POST",
            headers: {'Content-type': "application/json"},
            body: JSON.stringify(values)
          })
            .then(res => res.json())
            .then(data => console.log(data))
            // history.go(-1) > to go back where they from
            // history.push('/')
    }

    // getting the latest weight

    const [allWeight, setAllWeight] = useState({})

    // useEffect(() => {
    //     fetch("/nutrition/weight/all")
    //         .then(res => res.json())
    //         .then(weight => setAllWeight(weight))
    // }, []);

    // console.log(allWeight)

    // let updatedData = allWeight.slice(-1)
    // console.log(updatedData)

    // let updatedWeight = updatedData[0].weight
    // console.log(updatedWeight)

        

    return (
<div>
       
        <div className="bg-white bg-opacity-40 shadow-lg rounded-xl px-8 pt-7 pb-8 mb-4 text-left">
        <h1 className="text-left text-2xl leading-tight font-bold pb-4">Update your weight.</h1>
                <form onSubmit={handleSubmit}>
                    
                <div className="mb-4">
                 <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-2">Weight</label>
               
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="weight" value={values.weight} onChange={handleChange} />
         </div>
        <div className="mt-4">
          <label className="block text-indigo-600 text-sm tracking-wider uppercase font-medium mb-2">date</label>
        </div>
        <div>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="date" value={values.date} onChange={handleChange} />
        </div>
<button type="submit" onSubmit={handleSubmit} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline">log new weight</button>
                </form>
                <div className="border-t-2 border-indigo-600 pt-4 mt-4 grid grid-cols-2">
                    <div className="text-left my-auto uppercase text-sm">Current Weight:</div> <div className="text-right text-2xl my-auto">{}kg</div>
                    </div>
        </div></div>
    )
}

export default WeightForm
