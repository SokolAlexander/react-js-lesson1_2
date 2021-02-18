import React from 'react';

import { Link, useRouteMatch } from "react-router-dom";
import { useCallback } from "react";

export default function ChatList({ chatList }) {
  const chatIds = Object.keys(chatList);

  const renderChatLink = useCallback((chatId) => {
    return (
      <Link to={`/chat/${chatId}`}>
        <div>{chatList[chatId].name}</div>
      </Link>
    )
  }, []);

  return chatIds.map(renderChatLink);
}