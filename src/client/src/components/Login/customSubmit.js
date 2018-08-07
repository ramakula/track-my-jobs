import axios from '../../pkgs/axios';
import { SubmissionError, startSubmit, stopSubmit } from 'redux-form';

import { formName } from './FormEmail';

const email = ({ email }) => {
  startSubmit(formName);

  return axios
    .post(`/api/users/login/check`, { email })
    .then(_ => stopSubmit(formName))
    .catch(err => {
      throw new SubmissionError({
        email: err.response.data.message,
      });
    });
};

export { email };
