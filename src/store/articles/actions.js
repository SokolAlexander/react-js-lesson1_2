import { apiUrl } from "../../constants";

export const GET_ARTICLES_REQUEST = 'ARTICLES::GET_ARTICLES_REQUEST';
export const GET_ARTICLES_SUCCESS = 'ARTICLES::GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'ARTICLES::GET_ARTICLES_FAILURE';

const getArticlesRequest = () => ({
  type: GET_ARTICLES_REQUEST
});

const getArticlesSuccess = (data) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: {
    data
  }
});

const getArticlesFailure = (error) => ({
  type: GET_ARTICLES_FAILURE,
  payload: {
    error
  }
});

export const getArticles = () => (dispatch) => {
  dispatch(getArticlesRequest());

  // try {
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
  
  //   dispatch(getArticlesSuccess(data));
  // } catch (err) {
  //   dispatch(getArticlesFailure(err));
  // }

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => dispatch(getArticlesSuccess(data)))
    .catch(err => dispatch(getArticlesFailure(err)));
}