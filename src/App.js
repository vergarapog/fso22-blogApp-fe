import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from "./reducers/notifReducer"

import blogService from "./services/blogs"
import loginService from "./services/login"

//components
import LoginForm from "./shared/LoginForm"
import BlogForm from "./shared/BlogForm"
import Notification from "./components/Notification"
import Toggleable from "./components/Toggleable"
import BlogList from "./components/BlogList"

//reducer
import { initializeBlogs } from "./reducers/blogReducer"
import { addBlogRedux } from "./reducers/blogReducer"
import { setUser } from "./reducers/userReducer"
import { getUserFromLocStorage } from "./reducers/userReducer"

const App = () => {
  const user = useSelector((state) => state.user)
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  // const [user, setUser] = useState(null)

  const addBlogRef = useRef()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFromLocStorage())
  }, [])

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [])

  const createBlog = async (newBlog) => {
    try {
      dispatch(addBlogRedux(newBlog))

      dispatch(
        setNotification({
          message: `${newBlog.title} by  ${newBlog.author} successfully added`,
          time: 3,
        })
      )

      addBlogRef.current.toggleVisibility()
    } catch (error) {
      dispatch(
        setNotification({
          message: "Adding Failed Please try again",
          type: "error",
          time: 3,
        })
      )
    }
  }

  // const handleDeletedBlog = async (id) => {
  //   try {
  //     await blogService.destroy(id)
  //     const newBlogs = blogs.filter((b) => {
  //       return b.id !== id
  //     })
  //     setBlogs(newBlogs)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleLike = async (id, blog) => {
  //   const res = await blogService.update(blog.id, {
  //     title: blog.title,
  //     author: blog.author,
  //     url: blog.url,
  //     likes: blog.likes + 1,
  //     user: blog.user.id,
  //   })
  //   setBlogs(
  //     blogs.map((blog) => {
  //       return blog.id === id ? res : blog
  //     })
  //   )
  // }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user))

      dispatch(setUser(user))
      blogService.setToken(user.token)
      setUsername("")
      setPassword("")

      dispatch(setNotification({ message: "Login Successful", time: 3 }))
    } catch (error) {
      dispatch(
        setNotification({
          message: "Wrong Credentials",
          type: "error",
          time: 3,
        })
      )
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogappUser")
    setUser(null)
  }

  return (
    <div>
      <Notification />
      {user ? (
        <div>
          <div>{user.name} logged in</div>
          <button
            onClick={handleLogout}
            className="py-1 px-3 bg-slate-600 rounded text-white"
          >
            Logout
          </button>
          <Toggleable buttonLabel={"Add Blog"} ref={addBlogRef}>
            <BlogForm createBlog={createBlog} />
          </Toggleable>
          <BlogList />
        </div>
      ) : (
        <Toggleable buttonLabel={"Login"}>
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </Toggleable>
      )}
    </div>
  )
}

export default App
