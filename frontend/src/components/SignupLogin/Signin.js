import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()

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

    const existingUser = {
      username: username,
      password: password
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(existingUser)
    }

    try {
      const res = await fetch("http://localhost:5000/nutrition/user/login", requestOptions)
      const data = await res.json()
      console.log(data.status)
      if (data.status === "ok") {
        history.push("/main")
      } else {
        console.log("passwords not match")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>This is Sign in page</h1>
      <a href="/signup">Don't have an account? Create one here</a>
      <form>
        <div className="mt-12">
          <label className="" >Username</label>
        </div>
        <div className="">
          <input className="m-1 p-1 rounded border-3 border-blue-800 text-center" type="text" onChange={handleUsernameChange} />
        </div>
        <div className="mt-4">
          <label className="">Password</label>
        </div>
        <div>
          <input className="m-1 p-1 rounded text-center" type="password" onChange={handlePasswordChange} />
        </div>
        <div className="mt-4">
          <button className="black border-3 border-white border-opacity-100" type="submit" onClick={handleSubmit} >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signin
