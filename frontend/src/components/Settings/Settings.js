import React, { useEffect, useState } from 'react';
import SideNavBar from "../SideNavBar";

const Settings = ({ user }) => {
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
            // console.log("checkuser: ", data.user)
            setUsername(user.username)
            // console.log("checkusername: ", user.username)
            setPassword(user.password)
            setCalories(user.targetCalories)
            setCarbohydrates(user.targetCarbohydrates)
            setProtein(user.targetProtein)
            setFats(user.targetFats)
            setCurrentWeight(user.currentWeight)
            setTargetWeight(user.targetWeight)
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
            // username: user.username,
            password: user.password,
            targetCalories: user.calories,
            targetCarbohydrates: user.carbohydrates,
            targetProtein: user.protein,
            targetFats: user.fats,
            currentWeight: user.currentWeight,
            targetWeight: user.targetWeight
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
        <div>
            <div className=""><SideNavBar /></div>
            <main className="mx-4 p-9 pl-64">
                <h1>this is Settings Page</h1>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Details</div>
                    <div>Current</div>
                    <div>New</div>
                </div>
                <div className="grid grid-cols-3 gap-2 place-content-center h-16">
                    <div>Username</div>
                    <div>{username}</div>
                    {/*}                    <input type="text" onChange={handleUsernameChange} />   */}
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
                <div>
                    <button type="submit" onClick={handleSubmit} >Save</button>
                </div>
            </main>
        </div>
    )
}

export default Settings
