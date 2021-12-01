import React, { useEffect } from "react";
import { useState } from "react";
// import BlogList from "./BlogList";

function Home() {
  // const [blog, setBlogs] = useState([
  //   { name: "osama", year: "second", id: 4 },
  //   { name: "sehrish", year: "third", id: 5 },
  //   { name: "hannan", year: "first", id: 6 },
  // ]);

  // const name = "sumair";
  // const [btn, setBtn] = useState(name);
  // const handleClick = () => {
  //   setBtn("ayan");
  // };

  useEffect(() => {
    console.log("use effect ran ");
  });

  return (
    <div>
      {/* <BlogList blog={blog} /> */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        consequuntur quia. Adipisci sequi voluptates alias libero quis optio
        explicabo obcaecati? Vitae, veniam repellendus natus perspiciatis
        delectus labore ut aspernatur suscipit? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Eligendi vel reiciendis hic provident,
        non omnis consectetur qui quod autem maiores dolore error. Unde
        accusantium eius excepturi aut sequi officia blanditiis. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Atque eius dolores delectus
        unde quo asperiores officiis quaerat ducimus molestias rerum sint ipsum
        rem vel, quod suscipit animi ullam eveniet voluptas? Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Est incidunt enim animi minima,
        consectetur officia ipsum aliquam voluptates voluptate harum
        voluptatibus consequatur quod! Iusto accusamus perferendis praesentium
        vitae ea rerum?
      </p>
      {/* <p>{btn}</p> */}
      {/* <button onClick={handleClick}>click me</button> */}
    </div>
  );
}

export default Home;
