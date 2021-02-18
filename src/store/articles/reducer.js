import { REQUEST_STATUS } from "../../constants";
import { GET_ARTICLES_REQUEST, GET_ARTICLES_FAILURE, GET_ARTICLES_SUCCESS } from './actions';

const initialState = {
  items: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST: {
      return {
        ...state,
        request: {
          error: null,
          status: REQUEST_STATUS.LOADING
        }
      }
    }
    case GET_ARTICLES_SUCCESS: {
      return {
        ...state,
        items: action.payload.data,
        request: {
          error: null,
          status: REQUEST_STATUS.SUCCESS
        }
      }
    }
    case GET_ARTICLES_FAILURE: {
      return {
        ...state,
        request: {
          error: action.payload.error,
          status: REQUEST_STATUS.FAILURE,
        }
      }
    }
    default:
      return state;
  }
};

export default reducer;
