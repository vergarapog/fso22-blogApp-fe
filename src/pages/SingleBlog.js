import React from "react"

const SingleBlog = ({ singleBlog }) => {
  if (!singleBlog) {
    return <div>Loading....</div>
  }
  return (
    <div>
      <h1>{singleBlog.title}</h1>
      <p>{singleBlog.url}</p>
      <p>{singleBlog.likes} likes</p>
      <p>added by {singleBlog.author}</p>
    </div>
  )
}

export default SingleBlog
