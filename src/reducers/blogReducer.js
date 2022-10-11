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

export const handleDeleteBlog = (id) => {
  return async (dispatch, getState) => {
    try {
      const { blogs } = getState()

      await blogService.destroy(id)
      const newBlogs = blogs.filter((b) => {
        return b.id !== id
      })
      dispatch(setBlogs(newBlogs))
    } catch (error) {
      console.log(error)
    }
  }
}

export const handleLikeRedux = (id, blog) => {
  return async (dispatch, getState) => {
    try {
      const { blogs } = getState()
      const res = await blogService.update(blog.id, {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes + 1,
        user: blog.user.id,
      })
      dispatch(
        setBlogs(
          blogs.map((blog) => {
            return blog.id === id ? res : blog
          })
        )
      )
    } catch (error) {
      console.log(error)
    }
  }
}

export default blogSlice.reducer
