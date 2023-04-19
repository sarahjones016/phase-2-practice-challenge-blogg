import React, {useState} from "react";

function NewPostForm({onSubmit}) {

const [title, setTitle] = useState("")
const [author, setAuthor] = useState("")
const [article, setArticle] = useState("")

function handleSubmit(e) {
  e.preventDefault();
  fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({title, author, article, isRead: false})
  })
  .then((res) => res.json())
  .then((data) => onSubmit(data))
}

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input 
          value={title} 
          type="text" 
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input 
          value={author} 
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <textarea 
          value={article} 
          rows="10" 
          cols="60" 
          placeholder="Write your post"
          onChange={(e) => setArticle(e.target.value)}
        ></textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewPostForm;
