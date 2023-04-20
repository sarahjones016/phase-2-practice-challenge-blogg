// import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import {useState, useEffect} from "react"

function App() {

  const [blogs, setBlogs] = useState([])
  const [showForm, setShowForm] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
    .then((res) => res.json())
    .then((data) => setBlogs(data))
  }, [])

  function handleClick() {
    setShowForm(!showForm)
  }

  function handleFormSubmit(newSubmission) {
    setBlogs([...blogs, newSubmission])
  }

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  const filteredBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(search.toLowerCase()) || blog.author.toLowerCase().includes(search.toLowerCase())
  })

  function handleDelete(id) {
    const filteredAndDeletedBlogs = filteredBlogs.filter((blog) => {
      return blog.id !== id
    })
    setBlogs(filteredAndDeletedBlogs);
  }

  return (
    <div className="App">
      <Header search={search} onSearch={handleSearch}></Header>

      <button onClick={handleClick} className="show-form">{showForm ? "Hide Form" : "Show Form"}</button>
      {showForm ? <NewPostForm onFormSubmit={handleFormSubmit}></NewPostForm> : null}
      

      <BlogPostContainer onBlogDelete={handleDelete} blogs={filteredBlogs}></BlogPostContainer>
    </div>
  );
}

export default App;