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
import { useSelector, useDispatch } from "react-redux";
import { selectMessages } from "../store/messages/selectors";
import { addMessage } from "../store/messages/actions";

// const initalMessages = [
//   { text: "Hello", author: AUTHORS.ME, id: "1" },
//   { text: "I am a message", author: AUTHORS.BOT, id: "2" },
// ];

// const initialMessages = {
//   id1: [{ text: "Hello", author: AUTHORS.ME, id: "id1-1" }],
//   id2: [],
//   id3: [{ text: "I am a message", author: AUTHORS.BOT, id: "id3-1" }],
// };

export const App = ({ goal, name }) => {
  const { chatId } = useParams();
  // const [messages, setMessages] = useState(initialMessages);
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const addNewMessage = useCallback(
    (newMessage) => {
      // setMessages((prevMess) => ({
      //   ...prevMess,
      //   [chatId]: [
      //     ...prevMess[chatId],
      //     { ...newMessage, id: prevMess[chatId].length + 1 },
      //   ],
      // }));
      dispatch(
        addMessage(chatId, {
          ...newMessage,
          id: `${chatId}-${(messages[chatId]?.length || 0) + 1}`,
        })
      );
    },
    [chatId, dispatch, messages]
  );

  useEffect(() => {
    const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];
    let timeout;
    if (lastMessage?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        addNewMessage({
          text: "Hi, i am bot",
          author: AUTHORS.BOT,
        });
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <>
      <div className="layout">
        <MessageField
          messages={messages[chatId]}
          onAddMessage={addNewMessage}
        />
      </div>
    </>
  );
};

const PureApp = React.memo(App);
