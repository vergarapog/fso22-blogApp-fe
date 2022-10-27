import React, { useState } from "react"

import { useDispatch } from "react-redux"
// import { setNotification } from "../reducers/notifReducer"
import { handleLoginReducer, setUser } from "../../reducers/userReducer"

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

  const handleLogin = async (e) => {
    e.preventDefault()

    dispatch(handleLoginReducer(username, password))
      .then(() => {
        setUsername("")
        setPassword("")
      })
      .catch((err) => console.log(err))
  }

  const enterCorrectDetails = () => {
    setUsername("user1")
    setPassword("user1")
  }

  return (
    <div>
      <button className="text-xs opacity-20" onClick={enterCorrectDetails}>
        DevCorrectDetails
      </button>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="border"
            type="text"
            id="username"
            value={username}
            onChange={({ target }) => {
              setUsername(target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="border"
            type="password"
            name=""
            id="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value)
            }}
          />
        </div>
        <button
          type="submit"
          className="rounded py-1 px-2 bg-slate-600 text-white"
          id="loginButton"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
