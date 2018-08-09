import React from 'react';

import * as f from '../../../../css/meta/font';

export default props => (
  <div className="FormDescription">
    <div
      className="FormTitle"
      style={{ fontSize: f.textSizes.md, margin: '0 0 10px 0' }}
    >
      Track My Jobs
    </div>

    <div
      className="FormSubtitle"
      style={{ fontSize: f.textSizes.sm, margin: '0 0 10px 0' }}
    >
      {props.values ? props.values.email : ''}
    </div>
  </div>
);
