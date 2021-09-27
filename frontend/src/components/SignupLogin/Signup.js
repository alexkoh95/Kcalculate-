import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("")
  const history = useHistory()

  const handleUsernameChange = async (event) => {
    await setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = async (event) => {
    await setPassword(event.target.value)
    console.log(password)
  }

  const handleVerifyPasswordChange = async (event) => {
    await setVerifyPassword(event.target.value)
    console.log(verifyPassword)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === verifyPassword) {
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

      console.log(res)
      // GOT TO SOLVE THIS REDIRECT PROBLEM
      history.push('/settings')

    } else {
      console.log("Passwords do not match. Please try again")
    }
  }

  return (
    <div>
      <h1>This is Sign up page</h1>
      <a href="/signin">Already have an account? Sign in here</a>
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
          <label className="">Verify Password</label>
        </div>
        <div>
          <input className="m-1 p-1 rounded text-center" type="password" onChange={handleVerifyPasswordChange} />
        </div>
        <div className="mt-4">
          <button className="black border-3 border-white border-opacity-100" type="submit" onClick={handleSubmit} >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
