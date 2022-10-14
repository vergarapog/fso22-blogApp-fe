import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useMatch } from "react-router-dom"
import { getAllUsers } from "../reducers/usersReducer"

const Users = () => {
  const { users } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <div>
      Users
      <div className="flex justify-between px-8 py-4 max-w-sm ">
        <div className="font-bold">
          <h1>Name</h1>
          <ul>
            {users.map((user) => {
              return <div key={user.id}>{user.name}</div>
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
