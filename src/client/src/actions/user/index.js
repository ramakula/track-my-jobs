import { root } from '../index';
import axios from 'axios';

export const USER_CHECK_START = 'USER_CHECK_START';
export const USER_CHECK_SUCCESS = 'USER_CHECK_SUCCESS';
export const USER_CHECK_ERROR = 'USER_CHECK_ERROR';
export const USER_CHECK_FINISH = 'USER_CHECK_FINISH';

export const checkIfEmailExists = email => {
  return dispatch => {
    dispatch({ type: USER_CHECK_START });

    axios
      .post(`${root}/users/login/check`, { email })
      .then(({ data }) => {
        dispatch({ type: USER_CHECK_SUCCESS, payload: data.email });
        dispatch({ type: USER_CHECK_FINISH });
      })
      .catch(err => {
        dispatch({
          type: USER_CHECK_ERROR,
          payload: err.response.data.message,
        });

        dispatch({ type: USER_CHECK_FINISH });
      });
  };
};
