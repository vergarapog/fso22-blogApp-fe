import React from "react"

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Users = () => {
  const { users } = useSelector((state) => state)

  return (
    <div>
      Users
      <div className="flex justify-between px-8 py-4 max-w-sm ">
        <div className="font-bold">
          <h1>Name</h1>
          <ul>
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </div>
              )
            })}
          </ul>
        </div>
        <div className="font-bold">
          <h1>Blogs created</h1>
          <ul>
            {users.map((user) => {
              return <div key={user.id}>{user.blogs.length}</div>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Users
