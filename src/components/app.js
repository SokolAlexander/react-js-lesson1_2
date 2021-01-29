import React, { useEffect, useState, useCallback } from "react";

// import { Button } from "@material-ui/core";
import Message from "./message";
import Input from "./input";
import Button from './button';
import "./app.scss";

// function Button(props) {
//   return (
//     <div className="dummy" onClick={props.onClick}>
//       {props.text}
//     </div>
//   );
// }

// export default class App extends React.Component {
//   state = {
//     messages: [{ text: 'message1', author: 'me' }, { text: 'message2', author: 'me' }]
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timeout);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const lastAuthor = this.state.messages[this.state.messages.length - 1].author;

//     if (prevState.messages.length < this.state.messages.length && lastAuthor !== 'robot') {
//       this.timeout = setTimeout(() => {
//         this.handleAddMessage('Im a robot', 'robot');
//       }, 1500);
//     }
//   }

//   renderMessage = (message, i) => {
//     return (
//       <Message message={message} key={i} />
//     )
//   }

//   handleAddMessage = (text, author = 'me') => {
//     this.setState(state => ({
//       messages: [...state.messages, {text, author}]
//     }));
//   }

//   render() {
//     return (
//       <>
//         {this.state.messages.map(this.renderMessage)}
//         <Input onAddMessage={this.handleAddMessage} />
//       </>
//     );
//   }
// }

export default function App() {
  const [messages, setMessages] = useState([
    { text: "message1", author: "me" },
    { text: "message2", author: "me" },
  ]);
  const [messages2, setMessages2] = useState({
    'id1' : { text: "message1", author: "me" },
    'id2': { text: "message2", author: "me" },
  });

  const addMessage = useCallback((newid) => {
    setMessages2(oldMessages => ({...oldMessages, [newid]: {text: '', author: ''}}));
  }, []); 

  const [show, setShow] = useState(false);

  const renderMessage = useCallback((message, i) => {
    return <Message message={message} key={i} />;
  }, []);

  const changeShow = useCallback(() => {
    setShow(show => !show);
  }, []);

  const handleAddMessage = useCallback((text, author = "me") => {
    setMessages((oldMessages) => [...oldMessages, { text, author }]);
  }, []);

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1].author !== "robot") {
      timeout = setTimeout(() => {
        handleAddMessage("some answer", "robot");
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, handleAddMessage]);

  return (
    <>
      {/* {messages.map(renderMessage)} */}
      {/* <Input onAddMessage={handleAddMessage} /> */}
      {show ? <span>Show - true</span> : <div>Show - false</div>}
      <Button onClick={changeShow}>Default</Button>
      <Button>
        <span style={{ fontStyle: "italic" }}>text first</span>
      </Button>
      {/* <Button>Text second</Button> */}
      <Button>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          style={{ width: 100, height: 50 }}
          alt=""
        />
      </Button>
      <Button children={<span>Lalala</span>} />
      <Button render={(v) => <span>Lalala: {v}</span>} />
    </>
  );
}
