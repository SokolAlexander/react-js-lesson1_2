import { createStore, combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, profileReducer);
// export const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export const persistor = persistStore(store);

// ====== combineReducers and devtools ext =====
export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const store = createStore(
//   combineReducers({
//     profile: profileReducer,
//     chats: chatsReducer,
//   })
// );

// store.dispatch({type: 'CHANGE_NAME', payload: 'new name'});
