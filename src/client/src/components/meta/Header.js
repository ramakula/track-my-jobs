import React from 'react';

import StyledLink from './StyledLink/StyledLink';

import { font } from '../../css/meta/index';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 0 25px 0',
  padding: '5px 10px',
};

const Header = _ => {
  return (
    <div className="Header" style={style}>
      <StyledLink
        uri="/"
        text="Track My Jobs"
        backgroundColor="#ffffff"
        customStyle={JSON.stringify({
          color: 'black',
          fontSize: font.headerSizes.md,
        })}
      />

      <div className="portal" style={{ display: 'flex', flexDirection: 'row' }}>
        <StyledLink
          uri="/login"
          text="login"
          customStyle={JSON.stringify({
            color: 'black',
            fontSize: font.fontSizes.sm,
            margin: 'auto 10px',
          })}
        />

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
