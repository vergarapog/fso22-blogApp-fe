import { createSlice } from "@reduxjs/toolkit"

const navMenuSlice = createSlice({
  name: "navMenu",
  initialState: false,
  reducers: {
    setNavMenuTrue(state, action) {
      return true
    },
    setNavMenuFalse(state, action) {
      return false
    },
    toggleNavMenu(state, action) {
      return !state
    },
  },
})

export const { setNavMenuTrue, setNavMenuFalse, toggleNavMenu } =
  navMenuSlice.actions

export default navMenuSlice.reducer
