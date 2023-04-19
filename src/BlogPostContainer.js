import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({blogs, searchValue}) {

  const filteredArrayOfBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(searchValue.toLowerCase()) || blog.author.toLowerCase().includes(searchValue.toLowerCase())
  })

  const arrayOfBlogs = filteredArrayOfBlogs.map((blog) => {
    return <BlogPost blog={blog} key={blog.title} />
  })

  return (
    <div className="blog-container">
      {arrayOfBlogs}
    </div>
  );
}

export default BlogPostContainer;
