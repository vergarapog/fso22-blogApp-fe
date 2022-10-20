import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"

import { handleNewComment } from "../reducers/blogReducer"

const SingleBlog = ({ singleBlog }) => {
  const [newComment, setNewComment] = useState("")
  const dispatch = useDispatch()

  const handleSubmitComment = async (e) => {
    e.preventDefault()
    try {
      dispatch(handleNewComment(singleBlog.id, singleBlog, newComment))
      setNewComment("")
    } catch (e) {
      console.log(e)
    }
  }

  if (!singleBlog) {
    return <div>Loading....</div>
  }

  return (
    <div>
      <h1 className="text-4xl">{singleBlog.title}</h1>
      <a href={singleBlog.url} className="text-blue-400">
        {singleBlog.url}
      </a>
      <p>{singleBlog.likes} likes</p>
      <p>added by {singleBlog.author}</p>

      <div className="my-4">
        <h1>Comments:</h1>
        <form onSubmit={handleSubmitComment}>
          <div className="flex space-x-2 max-w-sm">
            <input
              type="text"
              className="bg-gray-100 rounded border border-black"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gray-700 text-white rounded px-2 py-1"
            >
              Add Comment
            </button>
          </div>
        </form>
        <ul className="list-disc list-inside">
          {singleBlog.comments.map((c) => {
            return <li key={c}>{c}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default SingleBlog
