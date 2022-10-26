import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

import { BrowserRouter as Router } from "react-router-dom"

import notifReducer from "./reducers/notifReducer"
import blogReducer from "./reducers/blogReducer"
import userReducer from "./reducers/userReducer"
import usersReducer from "./reducers/usersReducer"
import navMenuReducer from "./reducers/navMenuReducer"

const store = configureStore({
  reducer: {
    notification: notifReducer,
    blogs: blogReducer,
    user: userReducer,
    users: usersReducer,
    navMenu: navMenuReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
