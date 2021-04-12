import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { App } from "./appfunc";
import { Home } from "./home";
import { ChatList } from "./chatList";
import { Profile, ConnectedProfile } from "./profile";
import { Header } from "./header";
import { GistsList } from "./gists";

export const Routes = () => (
  <BrowserRouter>
    <Header />
    <ul>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/gists">Gists</Link>
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
      <Route path="/profile">
        <ConnectedProfile />
      </Route>
      <Route path="/gists">
        <GistsList />
      </Route>
    </Switch>
  </BrowserRouter>
);
