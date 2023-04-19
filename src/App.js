// import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import {useState, useEffect} from "react";

function App() {

const [blogs, setBlogs] = useState([])
const [showForm, setShowFrom] = useState("")
const [search, setSearch] = useState("")

useEffect(() => {
  fetch("http://localhost:3000/blogs")
  .then((res) => res.json())
  .then((data) => setBlogs(data))
}, [])

function handleForm() {
  setShowFrom(!showForm)
}

function handleSubmit(newBlog) {
  setBlogs([...blogs, newBlog])
}

function handleSearch(newSearch) {
  setSearch(newSearch)
}

const filteredBlogs = blogs.filter((blog) => {
  return blog.title.toLowerCase().includes(search.toLowerCase()) || blog.author.toLowerCase().includes(search.toLowerCase())
})

  return (
    <div className="App">
      <Header onSearch={handleSearch} search={search}/>

      <button onClick={handleForm} className="show-form">{showForm ? "Hide Form" : "Show Form"}</button>
      {showForm ? <NewPostForm onFormSubmit={handleSubmit}/> : null}

      <BlogPostContainer search={search} blogs={filteredBlogs}/>
    </div>
  );
}

export default App;
