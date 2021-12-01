import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function BlogList({ blog }) {
  return (
    <div>
      {blog.map((blogs) => (
        <div className="blogs-preview" key={blogs.id}>
          <Link to= {`/blogs/${blogs.id}`}>
            <h3>Hello {blogs.name}</h3>
            <h4>Welcome to {blogs.year} year</h4>
          </Link>

          {/* <button className="btn" onClick={() => handleDelete(blogs.id)}>
            Delete
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
