import React from "react"
import { useSelector } from "react-redux"
import BlogList from "../components/BlogList"
import Toggleable from "../components/Toggleable"
import BlogForm from "../shared/BlogForm"
import LoginForm from "../shared/LoginForm"

const Home = () => {
  const user = useSelector((state) => state.user)

  return (
    <div className="py-5">
      <h2 className="text-4xl">All Blogs:</h2>
      <hr className="" />
      <div>
        {user ? (
          <div>
            <div className="py-4">
              <Toggleable buttonLabel={"Add Blog"}>
                <BlogForm />
              </Toggleable>
            </div>
            <BlogList />
          </div>
        ) : (
          <Toggleable buttonLabel={"Login"}>
            <LoginForm />
          </Toggleable>
        )}
      </div>
    </div>
  )
}

export default Home
