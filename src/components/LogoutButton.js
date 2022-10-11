import React from "react"
import { useDispatch } from "react-redux"
import { handleLogoutReducer } from "../reducers/userReducer"

const LogoutButton = () => {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch(handleLogoutReducer())}
      className="py-1 px-3 bg-slate-600 rounded text-white"
    >
      Logout
    </button>
  )
}

export default LogoutButton
