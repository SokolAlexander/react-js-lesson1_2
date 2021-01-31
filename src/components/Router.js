import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import App from "./app";
import About from "./about";
import Topics from "./topics";
import "./router.scss";

export default function Routes() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/topicstoo">TopicsToo</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route exact path="/">
              <App />
            </Route>
            <Route>
              <div>No such page</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

