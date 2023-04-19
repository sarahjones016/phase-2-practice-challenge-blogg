import React, {useState} from "react";

function NewPostForm({onFormSubmit}) {

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
      body: JSON.stringify({title, author, article, isRead: false}),
    })
    .then((res) => res.json())
    .then((data) => onFormSubmit(data))
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text" 
          placeholder="Title"
        ></input>
        <input 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text" 
          placeholder="Author"
        ></input>
        <textarea 
          value={article}
          onChange={(e) => setArticle(e.target.value)}
          rows="10" 
          cols="60" 
          placeholder="Write your post"
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
