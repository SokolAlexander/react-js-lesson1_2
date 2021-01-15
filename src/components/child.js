import React from "react";


export default class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("ChildConstructor");
  }

  // static getDerivedStateFromProps(props) {
  //   console.log("ChildGetDerivedStateFromProps");
  //   return null;
  // }

  componentDidMount() {
    console.log("ChildDidMount");
  }

  // shouldComponentUpdate(prevProps) {
  //   // console.log("ChildShouldComponentUpdate");
  //   if (this.props === prevProps) {
  //     return false
  //   };

  //   return true;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("ChilddidUpdate");
  }

  componentWillUnmount() {
    console.log("ChildwillUnmount");
  }

  render() {
    console.log("Childrender");

    return (
      <div>
        CHILD: {this.props.counter}
      </div>
    );
  }
}
