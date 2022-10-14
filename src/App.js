import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Users from "./pages/Users"

import Notification from "./components/Notification"

import { initializeBlogs } from "./reducers/blogReducer"
import { getUserFromLocStorage } from "./reducers/userReducer"

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserFromLocStorage())
  }, [])

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [])

  return (
    <div>
      <Notification />
      <h1>Blogs</h1>
      {user ? <div>{user.name} logged in</div> : ""}
      <div className="space-x-2">
        <Link to="/" className="bg-green-300 px-2 py-1 rounded">
          home
        </Link>
        <Link to="/users" className="bg-green-300 px-2 py-1 rounded">
          users
        </Link>
      </div>

      <Routes>
        <Route path="/users" element={<Users />} key={document.location.href} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App
