import React, {useState} from "react";

function BlogPost({ blog }) {

  const [isRead, setIsRead] = useState(true)

  function handleClick() {

    setIsRead(!isRead)
    
    fetch(`http://localhost:3000/blogs/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify({
        isRead: isRead,
      })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{blog.title}</h3>
          <button onClick={handleClick} className="read-button">{isRead ? "Read" : "Unread"}</button>
        </div>
        <p>Author {blog.author}</p>
      </div>

      <p>
        {blog.article}
      </p>
    </div>
  );
}

export default BlogPost;
