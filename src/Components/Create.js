import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [year, setYear] = useState("First");

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { year, body, name };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-Type": " application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("data added successful");
      setIsPending(false);
      history.push('/')
    });
  };

  return (
    <div className="create container">
      <h1>New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Blog Content</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Year
          </label>
          <div className="col-12">
            <label className="visually-hidden">Preference</label>
            <select
              className="form-select"
              id="inlineFormSelectPref"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Forth">Forth</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          {!isPending && <button className="btn btn-primary">Add Blog</button>}
          {isPending && <button className="btn btn-primary">Adding....</button>}
        </div>
      </form>
    </div>
  );
}

export default Create;
