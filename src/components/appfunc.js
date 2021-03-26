import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";

import Child from "./childfunc";
import "./app.scss";
import { usePrev } from "../utils/hooks";

const initalMessages = ["Hello", "I am a message", "HI!"];

export const App = ({ goal, name }) => {
  console.log("App render");
  const [messages, setMessages] = useState(initalMessages);
  const [showChild, setShowChild] = useState(true);

  const messagesToShow = useMemo(() => {
    console.log("filterMemo");
    return messages.filter((message) => message.length > 3);
  }, [messages]);

  const addMessage = useCallback(() => {
    console.log("--------", showChild);
    setMessages((prevMess) => [...prevMess, "New Message"]);
  }, [showChild]);

  const toggleChild = () => {
    setShowChild(!showChild);
  };

  const prevMessages = usePrev(messages);

  useEffect(() => {
    console.log("App did update messages", prevMessages, messages);
  }, [messages]);

  useEffect(() => {
    console.log("App did mount");
  }, []);

  useEffect(() => {
    console.log("App did update name");
  }, [name]);

  useEffect(() => {
    return () => console.log("App will unmount");
  }, []);

  return (
    <>
      <h1 className={`second-class`} style={{ top: "25px", color: "wheat" }}>
        Hello React
      </h1>

      {messagesToShow.map((text, i) => (
        <div key={i}>{text}</div>
      ))}
      <button onClick={addMessage}>Add</button>
      <button onClick={toggleChild}>Toggle child</button>
      {showChild && (
        <Child childName="child" goal={goal} addMessage={addMessage} />
      )}
    </>
  );
};
