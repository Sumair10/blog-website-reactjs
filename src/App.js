import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create";
import Contact from "./Components/Contact";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";

function App() {
  const title = "Welcome User";
  // const person = { name: "sumaie", age: 20 };

  return (
    <Router>
      <div className="App ">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <div className="content">
              <h1>{title}</h1>
              {/* <p>{person.name}</p> */}
            </div>
            <Home />
            <Blog />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
