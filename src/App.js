import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from "./reducers/notifReducer"

//components
import LoginForm from "./shared/LoginForm"
import BlogForm from "./shared/BlogForm"
import Notification from "./components/Notification"
import Toggleable from "./components/Toggleable"
import BlogList from "./components/BlogList"

//reducer
import { initializeBlogs } from "./reducers/blogReducer"
import { addBlogRedux } from "./reducers/blogReducer"
import { getUserFromLocStorage } from "./reducers/userReducer"
import LogoutButton from "./components/LogoutButton"

const App = () => {
  const user = useSelector((state) => state.user)

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

  return (
    <div>
      <Notification />
      {user ? (
        <div>
          <div>{user.name} logged in</div>
          <LogoutButton />
          <Toggleable buttonLabel={"Add Blog"} ref={addBlogRef}>
            <BlogForm createBlog={createBlog} />
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
