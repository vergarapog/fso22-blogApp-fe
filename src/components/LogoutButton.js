import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleLogoutReducer } from "../reducers/userReducer"
import { useNavigate } from "react-router-dom"
import { setNavMenuFalse } from "../reducers/navMenuReducer"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)

  const handleLogout = () => {
    dispatch(handleLogoutReducer())
    dispatch(setNavMenuFalse())
    navigate("/")
  }

  return (
    <button
      onClick={handleLogout}
      className={`${user ? "block" : "hidden"}  text-right text-white`}
    >
      <span className="rounded bg-red-500 hover:bg-red-700 py-1 px-2">
        Logout
      </span>
    </button>
  )
}

export default LogoutButton
