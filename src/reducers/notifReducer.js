import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  message: "",
  type: "",
  time: 0,
}

const notifSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      const { message, type, time } = action.payload
      return {
        ...state,
        message: message,
        type: type,
        time: time,
      }
    },
    resetNotification() {
      return { message: "", type: "", time: 0 }
    },
  },
})

export const { setNotification, resetNotification } = notifSlice.actions

export default notifSlice.reducer
