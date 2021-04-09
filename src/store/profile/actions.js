import { CHANGE_NAME } from "./types";

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  name: newName,
});

export const changeNamewithTimeout = (newName) => (dispatch, getState) => {
  console.log('hello thunk');

  setTimeout(() => {
    dispatch(changeName(newName))
  }, 2000);
}


export default (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
  }
  return next(action);
};
