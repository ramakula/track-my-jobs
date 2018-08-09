import { SubmissionError } from 'redux-form';

import axios from '../../../pkgs/axios';

import { root } from '../../../actions';

export const email = email => {
  return axios
    .post(`${root}/users/login/check`, email)
    .then()
    .catch(err => {
      throw new SubmissionError({
        email: err.response.data.message,
      });
    });
};

export const password = user => {
  return axios
    .post(`${root}/users/login`, user)
    .then(({ data }) => data)
    .catch(err => {
      throw new SubmissionError({
        password: err.response.data.message,
      });
    });
};
