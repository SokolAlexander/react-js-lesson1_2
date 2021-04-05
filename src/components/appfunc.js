import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { Link, useParams } from "react-router-dom";

import "./app.scss";
import { usePrev } from "../utils/hooks";
import { AUTHORS } from "../utils/constants";
import { ChatList } from "./chatList";
import { Header } from "./header";
import { MessageField } from "./messagefield";
import { Switch } from "../../../gbreact/node_modules/@material-ui/core";

// const initalMessages = [
//   { text: "Hello", author: AUTHORS.ME, id: "1" },
//   { text: "I am a message", author: AUTHORS.BOT, id: "2" },
// ];

const initialMessages = {
  id1: [{ text: "Hello", author: AUTHORS.ME, id: "id1-1" }],
  id2: [],
  id3: [{ text: "I am a message", author: AUTHORS.BOT, id: "id3-1" }],
};

export const App = ({ goal, name }) => {
  const { chatId } = useParams();
  console.log(chatId);
  const [messages, setMessages] = useState(initialMessages);

  const addMessage = useCallback((newMessage) => {
    setMessages((prevMess) => ({
      ...prevMess,
      [chatId]: [
        ...prevMess[chatId],
        { ...newMessage, id: prevMess[chatId].length + 1 },
      ],
    }));
  }, [chatId]);

  useEffect(() => {
    const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];
    let timeout;


    if (lastMessage?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        console.log('effect', chatId);
        addMessage({
          text: "Hi, i am bot",
          author: AUTHORS.BOT,
          id: `${chatId}-${messages[chatId].length + 1}`
        });
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <>
      <Header />
      <Link to="/">Home</Link>
      <div className="layout">
        <ChatList />
        <MessageField messages={messages[chatId]} onAddMessage={addMessage} />
      </div>
    </>
  );
};

const PureApp = React.memo(App);
