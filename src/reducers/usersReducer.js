import { createSlice } from "@reduxjs/toolkit"
import usersService from "../services/users"
import { setUser } from "./userReducer"

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions

export const getAllUsers = () => {
  return async (dispatch) => {
    const data = await usersService.getAll()
    dispatch(setUsers(data))
  }
}

export default usersSlice.reducer
