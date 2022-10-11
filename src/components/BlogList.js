import React from "react"
import { useSelector } from "react-redux"
import { sortBlogsByLikes } from "../reducers/blogReducer"

import Blog from "./Blog"

const BlogList = () => {
  const blogs = useSelector((state) => sortBlogsByLikes(state.blogs))
  const user = useSelector((state) => state.user)

  return (
    <div>
      <h2>All Blogs:</h2>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} user={user} />
      ))}
    </div>
  )
}

export default BlogList
