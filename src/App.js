// import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import React, {useState, useEffect} from "react";

function App() {

const [blogs, setBlogs] = useState([])
const [form, setForm] = useState(false)
const [searchValue, setSearchValue] = useState("")

useEffect(() => {
  fetch("http://localhost:3000/blogs")
  .then((res) => res.json())
  .then((data) => setBlogs(data))
}, [])

function handleClick() {
  setForm(!form)
}

function handleSubmit(newSubmission) {
  setBlogs([...blogs, newSubmission])
}

function handleSearch(newSearch) {
  setSearchValue(newSearch)
}

  return (
    <div className="App">
      <Header onSearch={handleSearch} searchValue={searchValue}/>

      <button onClick={handleClick} className="show-form">Show Form</button>
      {form ? <NewPostForm onSubmit={handleSubmit} /> : null}

      <BlogPostContainer searchValue={searchValue} blogs={blogs}/>
    </div>
  );
}

export default App;
