import React from 'react';

import StyledDiv from './StyledDiv';

export default (onClickHandler, text, backgroundColor, customStyle) => (
  <StyledDiv
    onClickHandler={onClickHandler}
    text={text}
    backgroundColor={backgroundColor}
    customStyle={customStyle}
  />
);
