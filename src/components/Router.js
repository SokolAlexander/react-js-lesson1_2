import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import App from "./app";
// import About from "./about";
// import Topics from "./topics";
import User from './User';
import "./router.scss";
// import ArticlesList from "./ArticlesList";

const chats = {
  id1: {
    name: "Name1",
    messages: [],
  },
  id2: {
    name: "Name2",
    messages: [],
  },
  id3: {
    name: "Name3",
    messages: [],
  },
};

export default function Routes() {
  const chatKeys = Object.keys(chats);
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            {/* {chatKeys.map(ck => (
              <Link to={`chat/${ck}`} />
            ))} */}
          </ul>

          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/articles">
              <ArticlesList />
            </Route> */}
            <Route exact path="/profile">
              <User />
            </Route>
            <Route path="/">
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

