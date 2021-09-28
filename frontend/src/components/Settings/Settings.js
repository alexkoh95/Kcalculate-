import React, { useEffect, useState } from 'react';

const Settings = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [calories, setCalories] = useState("")
    const [carbohydrates, setCarbohydrates] = useState("")
    const [protein, setProtein] = useState("")
    const [fats, setFats] = useState("")
    const [currentWeight, setCurrentWeight] = useState("")
    const [targetWeight, setTargetWeight] = useState("")

    const checkUser = async () => {
        try {
            const res = await fetch("http://localhost:5000/nutrition/user/find");
            const data = await res.json();
            console.log(data)
            // setUsername()
            // setPassword()
            // setCalories()
            // setCarbohydrates()
            // setProtein()
            // setFats()
            // setCurrentWeight()
            // setTargetWeight()
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        checkUser();
    }, [])

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value)
    }

    const handleCarbohydratesChange = (event) => {
        setCarbohydrates(event.target.value)
    }

    const handleProteinChange = (event) => {
        setProtein(event.target.value)
    }

    const handleFatsChange = (event) => {
        setFats(event.target.value)
    }

    const handleCurrentWeightChange = (event) => {
        setCurrentWeight(event.target.value)
    }

    const handleTargetWeightChange = (event) => {
        setTargetWeight(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const editUser = {
            username: username,
            password: password,
            targetCalories: calories,
            targetCarbohydrates: carbohydrates,
            targetProtein: protein,
            targetFats: fats,
            currentWeight: currentWeight,
            targetWeight: targetWeight
        }
        // console.log(editUser)

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editUser)
        }

        const res = await fetch("http://localhost:5000/nutrition/user/update", requestOptions)

    }

    return (
        <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2 min-h-screen">
          
            <main className="bg-white bg-opacity-40 shadow-lg rounded-xl px-8 pt-7 pb-8 mb-4 text-left grid grid-cols-2">
            <h1 className="text-left text-2xl leading-tight font-bold pb-4">Settings.</h1>
                <div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Details</div>
                    <div>Current</div>
                    <div>New</div>
                </div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Username</div>
                    <div>{username}</div>
                    <input type="text" onChange={handleUsernameChange} />
                </div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Password</div>
                    <div>*</div>
                    <input type="password" onChange={handlePasswordChange} />
                </div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Target Calories</div>
                    <div>{calories}</div>
                    <input type="number" onChange={handleCaloriesChange} />
                </div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Target Carbohydrates</div>
                    <div>{carbohydrates}</div>
                    <input type="number" onChange={handleCarbohydratesChange} />
                </div>
                </div>
                <div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Protein</div>
                    <div>{protein}</div>
                    <input type="number" onChange={handleProteinChange} />
                </div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Fats</div>
                    <div>{fats}</div>
                    <input type="number" onChange={handleFatsChange} />
                </div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Weight</div>
                    <div>{currentWeight}</div>
                    <input type="number" onChange={handleCurrentWeightChange} />
                </div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Target Weight</div>
                    <div>{targetWeight}</div>
                    <input type="number" onChange={handleTargetWeightChange} />
                </div>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit} >Save</button>
                </div>
            </main>
        </div>
    )
}

export default Settings