import { ADD_MESSAGE } from "./types";
import { AUTHORS } from "../../utils/constants";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { message, chatId },
});

export const addMessageWithBot = (chatId, message) => async (dispatch, getState) => {
  dispatch(addMessage(chatId, message));

  if (chatId === "id0") {
    const res = await fetch(
      `https://www.botlibre.com/rest/api/form-chat?instance=165&message="${message.text}"&application=2040298419200776370`
    );
    const response = await res.text();
    const answer = response.substring(
      response.lastIndexOf("<message>") + 9,
      response.lastIndexOf("</message>")
    );
    console.log(answer);

    const messLength = getState().messages.messages[chatId]?.length;

    dispatch(addMessage(chatId, {author: AUTHORS.BOT, text: answer, id: `${chatId}-${messLength + 1}`}));
  }
};
















// const p = new Promise(() => {
//   // async actions, requests, etc
//   return 'this goes as res into then';
// }).then((res) => {
//   // all good
// }).catch((err) => {
//   // all baaad
// });




