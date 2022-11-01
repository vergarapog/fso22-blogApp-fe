import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { menu, close } from "../assets"
import LogoutButton from "../components/LogoutButton"
import { setNavMenuFalse, toggleNavMenu } from "../reducers/navMenuReducer"
import { useGlobalContext } from "../context"

const Navbar = ({ user }) => {
  const navMenuState = useSelector((state) => state.navMenu)
  const dispatch = useDispatch()

  const { openSubMenu, closeSubMenu } = useGlobalContext()

  const displaySubMenu = (e) => {
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubMenu({ center, bottom })
  }

  const handleNavMouseOver = (e) => {
    if (!e.target.classList.contains("submenu")) {
      closeSubMenu()
    }
  }
  return (
    <nav className="flex justify-between py-2" onMouseOver={handleNavMouseOver}>
      <div>
        <h1 className="text-2xl ">
          <Link to="/">Blagg.</Link>
        </h1>
      </div>
      <div className="sm:flex hidden  space-x-4 items-center">
        <div onMouseOver={displaySubMenu}>
          {user ? <div className="submenu">Welcome, {user.name} </div> : ""}
        </div>
        <Link
          to="/"
          className="hover:bg-green-300 px-2 py-1 rounded border border-solid"
        >
          home
        </Link>
        <Link
          to="/users"
          className="hover:bg-green-300 px-2 py-1 rounded border border-solid"
        >
          users
        </Link>
      </div>

      <div className="sm:hidden flex">
        <img
          src={navMenuState ? close : menu}
          alt="menu"
          className="w-7 h-7"
          onClick={() => dispatch(toggleNavMenu())}
        ></img>
        <div
          className={`${
            navMenuState ? "top-12" : "invisible top-32 opacity-0 "
          } flex flex-col absolute right-5 p-4 bg-gray-600 text-white rounded-lg transition-all`}
        >
          <div>
            {user ? (
              <div>
                Welcome, {user.name}
                <hr className="py-2" />
              </div>
            ) : (
              ""
            )}
          </div>
          <Link
            to="/"
            className="hover:bg-dimWhite hover:text-black px-2 py-2 rounded "
            onClick={() => dispatch(setNavMenuFalse())}
          >
            Home
          </Link>
          <Link
            to="/users"
            className="hover:bg-dimWhite hover:text-black px-2 py-2 rounded "
            onClick={() => dispatch(setNavMenuFalse())}
          >
            Users
          </Link>
          <LogoutButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
