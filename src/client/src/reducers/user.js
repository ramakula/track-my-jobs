const initialState = {
  user: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'asdf':
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
