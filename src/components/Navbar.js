import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { menu, close } from "../assets"

const Navbar = ({ user }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="flex justify-between py-2">
      <div>
        <h1 className="text-2xl ">BlogzApp</h1>
      </div>
      <div className="sm:flex hidden  space-x-4 items-center">
        <div>{user ? <div>Welcome, {user.name} </div> : ""}</div>
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
          src={toggle ? close : menu}
          alt="menu"
          className="w-7 h-7"
          onClick={() => setToggle((prev) => !prev)}
        ></img>
        <div
          className={`${
            toggle ? "top-12" : "invisible top-32 opacity-0"
          } flex flex-col absolute right-5 p-4 bg-gray-500 text-white rounded-lg transition-all`}
        >
          <div>{user ? <div>Welcome, {user.name} </div> : ""}</div>
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
      </div>
    </nav>
  )
}

export default Navbar