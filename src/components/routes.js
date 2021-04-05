import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { App } from "./appfunc";
import { Home } from "./home";
import { ChatList } from "./chatList";

export const Routes = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
    </ul>
    <ChatList />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/chats/:chatId">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>
);
