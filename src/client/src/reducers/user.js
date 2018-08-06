import { u } from '../actions/index';

const initialState = {
  user: '',
  err: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case u.USER_CHECK_START:
      return {
        ...state,
      };

    case u.USER_CHECK_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case u.USER_CHECK_ERROR:
      return {
        ...state,
        err: action.payload,
      };

    case u.USER_CHECK_FINISH:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};
