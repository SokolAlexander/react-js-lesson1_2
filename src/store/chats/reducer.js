import { ADD_CHAT } from "./types";

const initialState = {
  chats: [
    {
      name: "Name1",
      id: "id0",
    },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        chats: [
          ...state.chats,
          { name: action.payload, id: `id${state.chats.length + 1}` },
        ],
      };
    }
    default:
      return state;
  }
};
