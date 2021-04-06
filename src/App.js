import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import { Routes } from "./components/routes";

export const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
