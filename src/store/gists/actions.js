import axios from 'axios';
import { GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE } from "./types";

const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST,
});

const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  gists
});

const getGistsFailure = (err) => ({
  type: GET_GISTS_FAILURE,
  error: err,
});

export const getGists = () => async (dispatch) => {
  try {
      dispatch(getGistsRequest());
      const res = await axios.get("https://api.github.com/gists/public");

      // if (!res.ok) {
      //   throw new Error('request failed with status: ' + res.status);
      // }

      // const result = await res.json();

      dispatch(getGistsSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(getGistsFailure(err));
    }
}
