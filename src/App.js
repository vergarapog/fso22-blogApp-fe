/* eslint-disable indent */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import { useMatch } from "react-router-dom"

import styles from "./styles"

import Home from "./pages/Home"
import Users from "./pages/Users"
import SingleUser from "./pages/SingleUser"

import Notification from "./components/Notification"

import { initializeBlogs } from "./reducers/blogReducer"
import { getUserFromLocStorage } from "./reducers/userReducer"
import { getAllUsers } from "./reducers/usersReducer"
import SingleBlog from "./pages/SingleBlog"
import Navbar from "./components/Navbar"
import Submenu from "./components/Submenu"
import { useGlobalContext } from "./context"

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const users = useSelector((state) => state.users)
  const blogs = useSelector((state) => state.blogs)

  useEffect(() => {
    dispatch(getUserFromLocStorage())
  }, [])

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const userMatch = useMatch("/users/:id")
  const singleUser = userMatch
    ? users.find((u) => {
        return u.id === userMatch.params.id
      })
    : null

  const blogMatch = useMatch("/blogs/:id")
  const singleBlog = blogMatch
    ? blogs.find((b) => {
        return b.id === blogMatch.params.id
      })
    : null

  const { closeSubMenu } = useGlobalContext()

  return (
    <div className="font-poppins">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar user={user} />
          <Submenu />
        </div>
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexStart}`}
        onMouseOver={closeSubMenu}
      >
        <div className={`${styles.boxWidth} `}>
          <Notification />
          <Routes>
            <Route
              path="/users/:id"
              element={<SingleUser singleUser={singleUser} />}
            />
            <Route
              path="/blogs/:id"
              element={<SingleBlog singleBlog={singleBlog} />}
            />
            <Route
              path="/users"
              element={<Users />}
              key={document.location.href}
            />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
