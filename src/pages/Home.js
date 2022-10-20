import React from "react"
import { useSelector } from "react-redux"
import BlogList from "../components/BlogList"
import LogoutButton from "../components/LogoutButton"
import Toggleable from "../components/Toggleable"
import BlogForm from "../shared/BlogForm"
import LoginForm from "../shared/LoginForm"

const Home = () => {
  const user = useSelector((state) => state.user)

  return (
    <div className="py-5">
      {user ? (
        <div>
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

export default Home
