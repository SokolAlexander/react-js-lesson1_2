import { CHANGE_NAME } from "./types";

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  name: newName,
});

export const changeNamewithTimeout = (newName) => async (dispatch, getState) => {
  console.log('hello thunk');
  const res = await fetch('https://api.github.com/gists/public');
  const re = await res.json();
  console.log(re);

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
