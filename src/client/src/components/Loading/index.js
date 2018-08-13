import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as css from './css';

const c = css.colors();

export default _ => {
  return (
    <div className="Loading" style={css.Loading()}>
      <FontAwesomeIcon color={c.font} icon="spinner" size="5x" spin />
    </div>
  );
};
