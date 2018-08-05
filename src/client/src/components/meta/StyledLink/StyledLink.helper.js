import React from 'react';

import StyledLink from './StyledLink';

export default (uri, text, backgroundColor, customStyle) => (
  <StyledLink
    uri={uri}
    text={text}
    backgroundColor={backgroundColor}
    customStyle={customStyle}
  />
);
