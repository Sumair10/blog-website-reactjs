import React, { useState, } from "react";
import "../index.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Blog() {

  const {data: blog  ,isPending ,error} =useFetch("http://localhost:8000/blogs")
  const [year, setYear] = useState("second");

  //   const handleDelete = (id) => {
  //     const newBlog = blog.filter((blogs) => blogs.id !== id);
  //     setBlog(newBlog);
  //   };

  
  return (
    <div className="blog">
      {/* ------------------conditional error message -------------------- */}
      {error && <div>Could not fetch the data</div> }
      {/* ------------------conditional loading message -------------------- */}
      {isPending && <div>Loading....</div>}
      {blog && <BlogList blog={blog} />}
      <button className="btns" onClick={() => setYear("third")}>
        Change
      </button>
      <h1>Blog of those who are in {year} year</h1>
      {/* <BlogList handleDelete={handleDelete} blog={blog.filter((blog) => blog.year === "second") } />     */}
    </div>
  );
}

export default Blog;
