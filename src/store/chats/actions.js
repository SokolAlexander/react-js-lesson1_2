import { ADD_CHAT } from "./types";

export const addChat = (newName) => ({
  type: ADD_CHAT,
  payload: newName,
});
