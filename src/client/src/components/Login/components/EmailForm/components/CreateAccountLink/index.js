import React from 'react';

import * as u from './utils';
import * as css from './css';

export default _ => (
  <u.StyledLink
    uri="/signup"
    text="create an account"
    customStyle={JSON.stringify(css.StyledLink())}
  />
);
