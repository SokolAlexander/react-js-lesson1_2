import React from "react";

import Input from "./input";
import './messagefield.scss';

export const MessageField = ({ messages, onAddMessage }) => (
  <div className="messagefield">
    {messages?.map(({ text, author, id }) => (
      <div key={id}>
        {author}: {text}
      </div>
    ))}
    <Input onAddMessage={onAddMessage} />
  </div>
);
