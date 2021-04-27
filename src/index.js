import React, { useState } from "react";
import ReactDOM from "react-dom";
// import App from "./components/app";

const obj = {
  x: 1,
};

const App = ({ str }) => {
  const [value, setValue] = useState(5);

  const addPlusToString = () => {
    return `${str}+${value}`;
  };

  const updateValue = () => {
    setValue(value + 1);
  }

  return (
    <div>
      <h1>HELLO REACT: {addPlusToString()}</h1>
      <button onClick={updateValue}>Update</button>
    </div>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: 5,
//       count: 0
//     }
//   }

//   addPlusToString = () => {
//     return `${this.props.str}+${this.state.value} --- ${this.state.count}`;
//   };

//   updateValue = () => {
//     this.setState((previousState) => ({ value: previousState.value + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>HELLO REACT: {this.addPlusToString()}</h1>
//         <button onClick={this.updateValue}>Update</button>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App str="mystring" />, document.getElementById("app"));
