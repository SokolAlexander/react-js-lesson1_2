import React from "react";

import { useParams } from "react-router-dom";
import { useCallback } from "react";

export default function MessageField({ chats }) {
  const { chatId } = useParams();
  console.log(chatId);

  const messages = chats[chatId].messages || [];

  const renderMessage = useCallback(
    (message) => (
      <div>
        {message.sender}: {message.text}
      </div>
    ),
    []
  );

  return messages.map(renderMessage);
}
