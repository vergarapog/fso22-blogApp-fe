import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { menu } from "../assets"

const Navbar = ({ user }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="flex justify-between py-2">
      <div>
        <h1 className="text-2xl ">BlogzApp</h1>
      </div>
      <div className="sm:flex hidden  space-x-2 items-center">
        <div>{user ? <div>Welcome, {user.name} </div> : ""}</div>
        <Link to="/" className="hover:bg-green-300 px-2 py-1 rounded">
          home
        </Link>
        <Link to="/users" className="hover:bg-green-300 px-2 py-1 rounded">
          users
        </Link>
      </div>

      <div className="sm:hidden flex">
        <img
          src={menu}
          alt="menu"
          className="w-7 h-7"
          onClick={() => setToggle((prev) => !prev)}
        ></img>
        <div className={`${toggle ? "flex" : "hidden"}`}>
          <div>{user ? <div>Welcome, {user.name} </div> : ""}</div>
          <Link to="/" className="hover:bg-green-300 px-2 py-1 rounded">
            home
          </Link>
          <Link to="/users" className="hover:bg-green-300 px-2 py-1 rounded">
            users
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
