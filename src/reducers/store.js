import { configureStore } from "@reduxjs/toolkit"

import notifReducer from "./notifReducer"
import blogReducer from "./blogReducer"
import userReducer from "./userReducer"
import usersReducer from "./usersReducer"
import navMenuReducer from "./navMenuReducer"

const store = configureStore({
  reducer: {
    notification: notifReducer,
    blogs: blogReducer,
    user: userReducer,
    users: usersReducer,
    navMenu: navMenuReducer,
  },
})

export default store
