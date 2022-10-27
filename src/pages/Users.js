import React from "react"

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Users = () => {
  const { users } = useSelector((state) => state)

  return (
    <div className="my-6">
      <h2 className="text-4xl">Users:</h2>
      <hr className="" />
      {/* <div className="flex justify-between px-8 py-4 max-w-sm ">
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
      </div> */}

      <section className="text-gray-600 body-font py-6">
        <div className="border-emerald-600">
          <div className=" w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-slate-700 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-slate-700 rounded-tr rounded-br">
                    Blogs Created
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => {
                  if (i === 0) {
                    return (
                      <tr key={user.id}>
                        <td className="px-4 py-3">{user.name}</td>
                        <td className="px-4 py-3">{user.blogs.length}</td>
                      </tr>
                    )
                  }
                  return (
                    <tr key={user.id}>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {user.name}
                      </td>
                      <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {user.blogs.length}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="flex px-4 mt-4 w-full mx-auto">
            <div className="flex ml-auto">
              <Link to="/">
                <button className="flex  text-white bg-slate-700 border-0 py-2 px-6 focus:outline-none hover:bg-slate-500 rounded">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Users
