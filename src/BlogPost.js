import React, {useState} from "react";

function BlogPost({ blog }) {

  const [read, setRead] = useState(blog.isRead)

  function handleClick() {
    setRead(!read)
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{blog?.title}</h3>
          <button onClick={handleClick} className="read-button">{read ? "Unread" : "Read"}</button>
        </div>
        <p>Author {blog?.author}</p>
      </div>

      <p>
        {blog?.article}
      </p>
    </div>
  );
}

export default BlogPost;
