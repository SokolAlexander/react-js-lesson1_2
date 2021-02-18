import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

export default function Header({ chatList }) {
  const { chatId } = useParams();
  const selected = useMemo(
    () => Object.keys(chatList).find((id) => id === chatId),
    [chatId, chatList]
  );


  return <header>Header, chosen: {chatList[selected].name} </header>;
}
