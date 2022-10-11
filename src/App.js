import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

//components
import LoginForm from "./shared/LoginForm"
import BlogForm from "./shared/BlogForm"
import Notification from "./components/Notification"
import Toggleable from "./components/Toggleable"
import BlogList from "./components/BlogList"

//reducer
import { initializeBlogs } from "./reducers/blogReducer"

import { getUserFromLocStorage } from "./reducers/userReducer"
import LogoutButton from "./components/LogoutButton"

const App = () => {
  const user = useSelector((state) => state.user)

  // const addBlogRef = useRef()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserFromLocStorage())
  }, [])

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [])

  return (
    <div>
      <Notification />
      {user ? (
        <div>
          <div>{user.name} logged in</div>
          <LogoutButton />
          <Toggleable buttonLabel={"Add Blog"}>
            <BlogForm />
          </Toggleable>
          <BlogList />
        </div>
      ) : (
        <Toggleable buttonLabel={"Login"}>
          <LoginForm />
        </Toggleable>
      )}
    </div>
  )
}

export default App
