import { createSlice } from "@reduxjs/toolkit"
import blogService from "../services/blogs"
import loginService from "../services/login"
import { setNotification } from "../reducers/notifReducer"

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export const getUserFromLocStorage = () => {
  return async (dispatch) => {
    const loggedInUser = window.localStorage.getItem("loggedBlogappUser")
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser)
      dispatch(setUser(user))
      blogService.setToken(user.token)
    }
  }
}

export const handleLoginReducer = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user))

      dispatch(setUser(user))
      blogService.setToken(user.token)
      dispatch(setNotification({ message: "Login Successful", time: 3 }))
    } catch (error) {
      dispatch(
        setNotification({
          message: "Wrong Credentials",
          type: "error",
          time: 3,
        })
      )
      throw error
    }
  }
}

export const handleLogoutReducer = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedBlogappUser")
    dispatch(setUser(null))
  }
}

export default userSlice.reducer
