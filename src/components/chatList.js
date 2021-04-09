import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import { selectChats } from "../store/chats/selectors";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../store/chats/actions";

export const ChatList = () => {
  const [chatName, setChatName] = useState('');
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setChatName(e.target.value);
  };

  const addNewChat = () => {
    dispatch(addChat(chatName));
    setChatName('');
  }

  return (
    <>
      <List>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </ListItem>
        ))}
      </List>
      <input type="text" value={chatName} onChange={handleChange} />
      <button onClick={addNewChat}>Add Chat</button>
    </>
  );
};
