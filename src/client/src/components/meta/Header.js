import React from 'react';

import { font } from '../../css/meta/index';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px 10px',
};

const Header = _ => {
  return (
    <div className="Header" style={style}>
      <div
        style={{
          // margin: '4px',
          fontSize: font.headerSizes.md,
        }}
      >
        Track My Jobs
      </div>

      <div className="portal" style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          className="login"
          style={{ margin: 'auto 10px', fontSize: font.fontSizes.sm }}
        >
          login
        </div>
        <div
          className="signup"
          style={{
            margin: 'auto 10px',
            marginRight: '0',
            fontSize: font.fontSizes.sm,
          }}
        >
          signup
        </div>
      </div>
    </div>
  );
};

export default Header;
