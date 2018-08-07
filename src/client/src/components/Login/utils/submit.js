import { SubmissionError } from 'redux-form';

import axios from '../../../pkgs/axios';

// import * as u from './index';
// console.log(u.formNames);
// const formNames = u.formNames;

const email = ({ email }) => {
  // startSubmit(formName);

  return (
    axios
      .post(`/api/users/login/check`, { email })
      // .then(_ => stopSubmit(formName))
      .then(_ => _)
      .catch(err => {
        throw new SubmissionError({
          email: err.response.data.message,
        });
      })
  );
};

export { email };
