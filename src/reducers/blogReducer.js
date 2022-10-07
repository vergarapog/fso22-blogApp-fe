import { createSlice } from "@reduxjs/toolkit"
import blogService from "../services/blogs"

export const sortBlogsByLikes = (blogs) => {
  let arrayForSorting = [...blogs]
  const sortedByLikes = arrayForSorting.sort((a, b) => {
    return b.likes - a.likes
  })
  return sortedByLikes
}

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload
    },
    appendBlog(state, action) {
      return [...state, action.payload]
    },
  },
})

export const { setBlogs, appendBlog } = blogSlice.actions

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()

    dispatch(setBlogs(blogs))
  }
}

export const addBlogRedux = (blog) => {
  return async (dispatch) => {
    const res = await blogService.create(blog)

    dispatch(appendBlog(res))
  }
}

export default blogSlice.reducer
