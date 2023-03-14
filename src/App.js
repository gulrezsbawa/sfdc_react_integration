import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/">Home</Link>{" "}
          <Link to={{ pathname: "/about" }}>About</Link>{" "}
          <Link to="/contact">Contact</Link>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" render={() => <h1>Contact Us</h1>} />
            <Route
              path="/blog"
              children={({ match }) => (
                <li className={match ? "active" : ""}>
                  <Link to="/blog">Blog</Link>
                </li>
              )}
            />
            <Route render={() => <h1>Page not found</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
