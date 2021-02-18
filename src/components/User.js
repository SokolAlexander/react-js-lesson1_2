import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectName } from '../store/user/selectors';
import { setName } from "../store/user/actions";

function User({ name, changeName }) {
  const [userName, setUserName] = useState(name);

  const handleChange = (e) => {
    setUserName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    changeName(userName);
  }

  return (
    <>
      <h2>{name}</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={userName} onChange={handleChange}/>
        <input type="submit" value="Press"/>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  name: selectName(state),
});

const mapDispatchToProps = {
  changeName: setName,
};

// export default connect(mapStateToProps, mapDispatchToProps)(User);
export default function UserNoStore() {
  return (<span>Profile</span>)
}