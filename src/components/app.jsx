import React, { useEffect, useState, useCallback } from "react";

// import Child from './child';
import "./app.scss";

// // const App = (props) => {
// //   const [counter, setCounter] = useState(0);

// //   useEffect(() => {
// //     console.log('----didMount');
// //   }, []);

// //   useEffect(() => {
// //     console.log("----didUpdate");
// //   });

// //   useEffect(() => {
// //     return () => {
// //       console.log('-----willUnmount')
// //     }
// //   }, []);

// //   const update = useCallback(() => {
// //     setCounter(counter + 1);
// //   }, [counter]);

// //   return (
// //       <div className="full-screen">
// //         <div>
// //           <h1>React Page </h1>
// //           <br />
// //           <a
// //             className="button-line"
// //             href="https://medium.com/javascript-in-plain-english/webpack-and-babel-setup-with-react-from-scratch-bef0fe2ae3e7"
// //             target="_blank"
// //           >
// //             Know more
// //           </a>
// //         </div>
// //         <Child counter={counter} />
// //         {/* <Child counter={1} /> */}

// //         <div onClick={update}>UPDATE</div>
// //       </div>
// //   );
// // };

// // export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("------------constructor");
//     this.state = {
//       messages: {
//         id1: {
//           author: 'Me',
//           text: 'Text'
//         }
//       }
//     }
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('---------------getDerivedStateFromProps');
//     return state;
//   }

//   componentDidMount() {
//     console.log("------------didMount");
//   }

//   shouldComponentUpdate() {
//     console.log('----------shouldComponentUpdate');
//     return true;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.counter !== this.state.counter) {
//       console.log('------------didUpdate');
//     }
//   }

//   componentWillUnmount() {
//     console.log('--------willUnmount');
//   }

//   render() {
//     console.log("--------------render");

//     return (
//       <div className="full-screen">
//         <div>
//           <h1>React e </h1>
//           <br />
//           <a
//             className="button-line"
//             href="https://medium.com/javascript-in-plain-english/webpack-and-babel-setup-with-react-from-scratch-bef0fe2ae3e7"
//             target="_blank"
//           >
//             Know more
//           </a>
//         </div>
//         <Child counter={this.state.counter} />
//         <Child counter={1} />

//         <div onClick={this.update}>UPDATE</div>
//       </div>
//     );
//   }

//   update = () => {
//     this.setState(({counter}) => ({counter: counter + 1}));
//     const newObj = {...this.state.obj};
//     newObj.somekey = '23';
//     this.setState({
//       obj: newObj
//     });
//   }
// }

// props = {
//   goal: { x: 1},
//   name: 'Me'
// }

const Child = ({ childName, goal }) => {
  return (
    <div>I Am A Child, {childName}</div>
  )
}

const App = ({ goal, name }) => {
  const className = "red";
  const [counter, setCounter] = useState(0);

  const increase = () => {
    debugger
    setCounter(counter + 1);
  }


  return (
    <>
      <h1 className={`${className} second-class`} style={{ top: "25px", color: "wheat" }}>
        Hello React
      </h1>
      <h2>{counter}</h2>
      <button onClick={increase}>Increase</button>
      <Child childName="child" goal={goal} />
    </>
  );
};

// class App extends React.Component {
//   state = {
//     counter: 0,
//   }

//   increase = () => {
//     this.setState(prevState => ({
//       counter: prevState.counter + 1
//     }));
//   }

//   render() {
//     const { goal } = this.props;
//     const { counter } = this.state;

//     return (
//       <>
//         <h1 className='red' style={{ top: "25px", color: "wheat" }}>
//           Hello React
//         </h1>
//         <h2>{counter}</h2>
//         <button onClick={this.increase}>Increase</button>
//         <Child childName="child" goal={goal} />
//       </>
//     );
//   }
// }

export default App;

