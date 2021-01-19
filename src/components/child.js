import React from "react";

const someArray = [
  { val: 3, id: "id2" },
  { val: 1, id: "id1" },
  { val: 10, id: "id3" },
];

export default class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("ChildConstructor");
    this.state = {
      top: 0,
    }
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

  renderElem = (el, i) => {
    return (
      <React.Fragment key={el.id}>
        <div>{el.val}</div>
      </React.Fragment>
    );
  }

  updateTop = () => {
    this.setState(state => ({
      top: state.top + 10
    }))
  }

  render() {
    console.log("Childrender");

    return (
      <>
        <div>
          CHILD: {this.props.counter}
          {someArray.map(this.renderElem)}
        </div>
        <button onClick={this.updateTop}>Click</button>
      </>
    );
  }
}

