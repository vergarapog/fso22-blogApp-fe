import { useState } from "react"
import blogService from "../services/blogs"
const Blog = ({ blog, user, handleDeletedBlog }) => {
  const [isShowMore, setIsShowMore] = useState(false)
  const [currBlog, setCurrBlog] = useState(blog)

  const toggleShowMore = () => {
    setIsShowMore(!isShowMore)
  }

  const handleLike = async () => {
    const res = await blogService.update(blog.id, {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: currBlog.likes + 1,
      user: blog.user.id,
    })
    setCurrBlog(res)
  }

  const handleDelete = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      handleDeletedBlog(blog.id)
    }
  }
  // let doesUserOwnBlog
  const doesUserOwnBlog =
    blog.user.name === user.name ? { display: "" } : { display: "none" }

  // useEffect(() => {
  //   doesUserOwnBlog =
  //     blog.user.name === user.name ? { display: "" } : { display: "none" }
  // }, [])

  return (
    <div>
      {isShowMore ? (
        <div>
          <div className="p-1 border">
            <span className="font-bold">{currBlog.title}</span>{" "}
            <button
              onClick={toggleShowMore}
              className="text-sm text-white bg-slate-700 rounded py-1 px-2"
            >
              Hide
            </button>
            <div>Link: {currBlog.url}</div>
            <div>
              Likes: {currBlog.likes}{" "}
              <button
                className="py-1/2 px-2 bg-green-600 text-white rounded-md"
                onClick={handleLike}
              >
                like
              </button>
            </div>
            <div>Author: {currBlog.author}</div>
            <div>
              <button
                className="text-sm text-white bg-red-700 rounded py-1 px-2"
                style={doesUserOwnBlog}
                onClick={handleDelete}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-1 border ">
          <span className="font-bold">{currBlog.title}</span> by{" "}
          <span>{currBlog.author}</span>{" "}
          <button
            onClick={toggleShowMore}
            className="text-sm text-white bg-slate-700 rounded py-1 px-2"
          >
            View more
          </button>
          <div></div>
        </div>
      )}
    </div>
  )
}

export default Blog