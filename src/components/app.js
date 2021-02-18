import React, { useEffect, useState, useCallback } from "react";

// import { Button } from "@material-ui/core";
import MessageField from "./MessageField";
import EmptyField from "./EmptyField";
import Header from "./header";
import ChatList from "./ChatList";
import "./app.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";

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

// export default function App() {
//   const [messages, setMessages] = useState([
//     { text: "message1", author: "me" },
//     { text: "message2", author: "me" },
//   ]);
//   const [messages2, setMessages2] = useState({
//     'id1' : { text: "message1", author: "me" },
//     'id2': { text: "message2", author: "me" },
//   });

//   const addMessage = useCallback((newid) => {
//     setMessages2(oldMessages => ({...oldMessages, [newid]: {text: '', author: ''}}));
//   }, []); 

//   const [show, setShow] = useState(false);

//   const renderMessage = useCallback((message, i) => {
//     return <Message message={message} key={i} />;
//   }, []);

//   const changeShow = useCallback(() => {
//     setShow(show => !show);
//   }, []);

//   const handleAddMessage = useCallback((text, author = "me") => {
//     setMessages((oldMessages) => [...oldMessages, { text, author }]);
//   }, []);

//   useEffect(() => {
//     let timeout;
//     if (messages[messages.length - 1].author !== "robot") {
//       timeout = setTimeout(() => {
//         handleAddMessage("some answer", "robot");
//       }, 1500);
//     }

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [messages, handleAddMessage]);

//   return (
//     <>
//       {show ? <span>Show - true</span> : <div>Show - false</div>}
//     </>
//   );
// }

const initialChats = {
  id1: {
    id: "id1",
    name: "Name1",
    messages: [
      { text: "Hi", sender: "me" },
      { text: "Hello", sender: "Name1" },
    ],
  },
  id2: {
    id: "id2",
    name: "Name2",
    messages: [
      { text: "Hi2", sender: "me" },
      { text: "Hello2", sender: "Name2" },
    ],
  },
};

export default function Layout() {
  const [chatList, setChatList] = useState(initialChats);

  const match = useRouteMatch();

  return (
    <>
      <ChatList chatList={chatList} url={match.url} />
      <Switch>
        <Route path={`/chat/:chatId`}>
          <Header chatList={chatList} />
          <MessageField chats={chatList} />
        </Route>
        <Route path={`${match.path}/`}>
          <EmptyField />
        </Route>
      </Switch>
    </>
  );
}