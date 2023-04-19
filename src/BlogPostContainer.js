import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({blogs}) {

  const arrayOfBlogs = blogs.map((blog) => {
    return <BlogPost blog={blog} key={blog.title}/>
  })

  return (
    <div className="blog-container">
      {arrayOfBlogs}
    </div>
  );
}

export default BlogPostContainer;
