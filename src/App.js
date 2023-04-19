// import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import {useState, useEffect} from "react";

function App() {

const [blogs, setBlogs] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/blogs")
  .then((res) => res.json())
  .then((data) => setBlogs(data))
}, [])

  return (
    <div className="App">
      <Header/>

      <button className="show-form">Show Form</button>
      {/* Condionally hide/unhide form on button click */}
      <NewPostForm/>

      <BlogPostContainer blogs={blogs}/>
    </div>
  );
}

export default App;
