import { createSlice } from "@reduxjs/toolkit"
import blogService from "../services/blogs"

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

export default userSlice.reducer
