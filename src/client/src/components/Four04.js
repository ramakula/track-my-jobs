import React, { Component } from 'react';

import styledDivHelper from './meta/StyledDiv/StyledDiv.helper';
import styledLinkHelper from './meta/StyledLink/StyledLink.helper';

const style = _ => ({
  height: '100%',
  textAlign: 'center',
});

class Four04 extends Component {
  render() {
    return (
      <div className="Four04" style={style()}>
        <div>page not found!</div>

        <div style={{ margin: '10px 0 0 0' }}>
          {styledDivHelper(
            this.props.history.goBack,
            'return',
            null,
            JSON.stringify({ color: 'blue' }),
          )}
        </div>

        <div style={{ margin: '10px 0 0 0' }}>
          {styledLinkHelper(
            '/',
            'return home',
            null,
            JSON.stringify({ color: 'blue' }),
          )}
        </div>
      </div>
    );
  }
}

export default Four04;
