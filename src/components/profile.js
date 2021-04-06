import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { changeName } from "../store/profile/actions";

export const Profile = (props) => {
  console.log(props);
  const [value, setValue] = useState("");
  // const name = useSelector((state) => state.profile.name);

  // const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch(changeName(value));
    props.setNewName(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h3>Profile</h3>
      <h4>{props.name}</h4>
      <input type="text" onChange={handleChange} value={value} />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.profile.name
});

const mapDispatchToProps = {
  setNewName: changeName,
};

export const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);




function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function withLogger(fun) {
  return (...args) => {
    console.log(args);
    fun(...args);
  };
}

const addWithLogger = withLogger(add);

const Button = (props) => (
  <div onClick={props.onClick} anyAttr={props.anyAttr}>
    {props.label}
  </div>
);

function withAnyAttr(Component) {
  const data = localStorage.getItem("any");
  return (props) => {
    return <Component anyAttr={data} {...props} />;
  };
}

function withLocalStorage(key) {
  return function (Component) {
    const data = localStorage.getItem(key);
    return (props) => {
      return <Component anyAttr={data} {...props} />;
    };
  };
}

const withLSCat = withLocalStorage("cat");
const withLSDog = withLocalStorage("dog");

const ButtonWithCat = withLSCat(Button);
const ButtonWithDog = withLSDog(Button);

{
  /* <Button label="label" onClick={() => {}} anyAttr="string" />;
<ButtonRed label="label2" onClick={() => {}} anyAttr="string" />; */
}
