import React from 'react';

import StyledButton from './StyledButton';

export default (text, customStyle, disabled) => (
  <StyledButton text={text} customStyle={customStyle} disabled={disabled} />
);
