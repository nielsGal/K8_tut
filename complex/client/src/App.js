import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./fib";

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/"> Home </Link>
          <Link to="/otherpage"> otherpage </Link>
        </header>
        <Route exact path="/" component={Fib} />
        <Route exact path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
