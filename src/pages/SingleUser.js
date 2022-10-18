import React from "react"

const SingleUser = ({ singleUser }) => {
  // const { name, blogs } = singleUser

  if (!singleUser) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Name: {singleUser.name}</h1>
      <div className="py-2">
        <h1>Added blogs</h1>
        <ul>
          {singleUser.blogs.map((i) => {
            return <li key={i.id}>{i.title}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default SingleUser
