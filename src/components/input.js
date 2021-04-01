import React, { useState, useRef } from "react";
import { AUTHORS } from "../utils/constants";
import { TextField, Button } from '@material-ui/core';

export default function Input({ onAddMessage }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage({ text: value, author: AUTHORS.ME });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Message" value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
