export const SET_NAME = 'USER::SET_NAME';

export const setName = (name) => ({
  type: SET_NAME,
  payload: {
    name
  }
});
