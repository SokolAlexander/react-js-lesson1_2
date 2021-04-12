import { GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE } from "./types"

const initialState = {
  list: [],
  request: {
    loading: false,
    error: null,
  }
}


export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_REQUEST: {
      return {
        ...state,
        request: {
          error: null,
          loading: true,
        },
      };
    }
    case GET_GISTS_SUCCESS: {
      return {
        ...state,
        list: action.gists,
        request: {
          error: null,
          loading: false,
        },
      };
    }
    case GET_GISTS_FAILURE: {
      return {
        ...state,
        request: {
          error: action.error,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
}