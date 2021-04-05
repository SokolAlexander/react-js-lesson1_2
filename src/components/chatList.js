import React from "react";
import { Link } from 'react-router-dom';
import { List, ListItem } from "@material-ui/core";

const chats = [
  {
    id: "id1",
    name: "Chat1",
  },
  {
    id: "id2",
    name: "Chat2",
  },
  {
    id: "id3",
    name: "Chat3",
  },
];

export const ChatList = () => {
  return (
    <List>
      {chats.map((chat) => (
        <ListItem key={chat.id}>
          <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};
