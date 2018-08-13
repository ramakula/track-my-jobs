import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as u from './utils';
import * as css from './css';

const c = css.colors();

export default _ => {
  return (
    <div className="Loading" style={css.Loading()}>
      <FontAwesomeIcon color={c.font} icon={u.loadingIcon} size="5x" spin />
    </div>
  );
};
