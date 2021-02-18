import React from 'react';
import { Provider } from 'react-redux';
import Routes from './components/Router';
import store from './store';

export default function App() {
  return (
    // <Provider store={store}>
      <Routes />
    // </Provider>
  )
}