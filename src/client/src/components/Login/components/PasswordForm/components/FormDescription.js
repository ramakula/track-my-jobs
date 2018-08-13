import React from 'react';

import * as f from '../../../../../css/meta/font';

import StyledDiv from '../../../../meta/StyledDiv/StyledDiv';

import * as u from '../../../utils';

const EMAIL_FORM = u.formNames.email;

export default props => (
  <div className="FormDescription">
    <div
      className="FormTitle"
      style={{ fontSize: f.textSizes.md, margin: '0 0 10px 0' }}
    >
      Track My Jobs
    </div>

    <StyledDiv
      className="FormSubtitle"
      text={props.email}
      customStyle={JSON.stringify({
        color: 'blue',
        fontSize: f.textSizes.sm,
        margin: '0 0 10px 0',
      })}
      onClickHandler={props.changeComp}
      onClickArgs={EMAIL_FORM}
    />
  </div>
);
