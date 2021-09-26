import React, { useState } from 'react'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = async (event) => {
    await setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = async (event) => {
    await setPassword(event.target.value)
    console.log(password)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      username: username,
      password: password
    }
    // console.log(newUser)

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    }
    const res = await fetch("http://localhost:5000/nutrition/user", requestOptions)
    const data = await res.json()
    console.log(data)

  }

  return (
    <div>
      <h1>This is Sign up page</h1>
      <form>
        <div className="mt-12">
          <label className="" >Username</label>
        </div>
        <div className="">
          <input className="m-1 rounded border-3 border-blue-500" type="text" onChange={handleUsernameChange} />
        </div>
        <div className="mt-4">
          <label className="">Password</label>
        </div>
        <div>
          <input className="m-1 rounded" type="text" onChange={handlePasswordChange} />
        </div>
        <div className="mt-4">
          <button className="black border-3 border-white border-opacity-100" type="submit" onClick={handleSubmit} >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
