import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const name = useSelector(state => state.profile.name);

  return <h1 className="second-class">Hello React, {name}</h1>
};