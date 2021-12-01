import React from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";


function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory()

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id , {
      method : "DELETE"
    }).then(()=>{
     history.push('/')
    })
  };

  return (
    <div>
      <h1>Blog Details</h1>
      {isPending && <div>loading...</div>}
      <p>{id}</p>
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <div className="container">
            <h2>{blog.name}</h2>
            <h5>{blog.year}</h5>
            <p>{blog.body}</p>
            <button
              onClick={handleDelete}
              className="btn btn-primary"
              style={{ margin: "10px 20px 50px 0" }}
            >
              Delete Blog
            </button>
          </div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
