import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";

import "./app.scss";
import { usePrev } from "../utils/hooks";
import Input from "./input";
import { AUTHORS } from "../utils/constants";

const initalMessages = [
  { text: "Hello", author: AUTHORS.ME, id: "1" },
  { text: "I am a message", author: AUTHORS.BOT, id: "2" },
];

export const App = ({ goal, name }) => {
  console.log("App render");
  const [messages, setMessages] = useState(initalMessages);

  const addMessage = useCallback((newMessage) => {
    setMessages((prevMess) => [
      ...prevMess,
      { ...newMessage, id: prevMess.length + 1 },
    ]);
  }, []);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timeout;

    if (lastMessage?.author !== AUTHORS.BOT) {
      timeout = setTimeout(() => {
        addMessage({
          text: "Hi, i am bot",
          author: AUTHORS.BOT,
          id: messages.length + 1,
        });
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <>
      <h1 className="second-class">
        Hello React
      </h1>

      {messages.map(({ text, author, id }) => (
        <div key={id}>
          {author}: {text}
        </div>
      ))}
      <Input onAddMessage={addMessage} />
    </>
  );
};

const PureApp = React.memo(App);