import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({blogs, onBlogDelete}) {

  const arrayOfBlogs = blogs.map((blog) => {
    return <BlogPost onBlogDelete={onBlogDelete} blog={blog} key={blog.title}/>
  })

  return (
    <div className="blog-container">
      {arrayOfBlogs}
    </div>
  );
}

export default BlogPostContainer;
