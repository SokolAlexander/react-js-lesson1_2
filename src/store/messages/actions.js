import { ADD_MESSAGE } from "./types";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { message, chatId },
});
