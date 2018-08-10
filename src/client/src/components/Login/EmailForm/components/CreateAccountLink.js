import React from 'react';

import StyledLink from '../../../meta/StyledLink/StyledLink';

import * as f from '../../../../css/meta/font';

export default _ => (
  <StyledLink
    uri="/signup"
    text="create an account"
    customStyle={JSON.stringify({
      color: 'blue',
      fontSize: f.textSizes.sm,
      margin: '10px 0',
      textAlign: 'left',
    })}
  />
);
