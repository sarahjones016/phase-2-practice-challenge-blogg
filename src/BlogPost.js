import React, {useState} from "react";

function BlogPost({ blog, onBlogDelete }) {

  const [isRead, setIsRead] = useState(blog.isRead)
  const [data, setData] = useState(blog)

  function handleClick() {
    setIsRead(!isRead)

    fetch(`http://localhost:3000/blogs/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({isRead: isRead})
    })
    .then((res) => res.json())
    .then((data) => setData(data))
  }

  function handleDelete() {
    fetch(`http://localhost:3000/blogs/${blog.id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => onBlogDelete(blog.id))
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{blog.title}</h3>
          <button onClick={handleClick} className="read-button">{data.isRead ? "Unread" : "Read"}</button>
        </div>
        <p>Author {blog.author}</p>
      </div>

      <p>
        {blog.article}
      </p>

      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default BlogPost;
