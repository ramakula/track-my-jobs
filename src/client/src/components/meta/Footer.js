import React from 'react';

import { flex, colors, font } from '../../css/meta/index';

import styledLinkHelper from './StyledLink/StyledLink.helper';

const style = _ => ({
  background: colors.background.dark,
  color: colors.font.light,
  display: 'flex',
  flexDirection: 'column',
  fontSize: font.textSizes.sm,
  minHeight: '50px',
  padding: '25px 0',
});

const styleLinkHeader = _ => ({
  fontSize: font.textSizes.sm,
  margin: '0 25px 10px 25px',
});

const backgroundColor = colors.background.dark;

const Footer = _ => {
  return (
    <div className="Footer" style={style()}>
      <div
        className="LinkSection"
        style={{
          ...flex.center,
          flexDirection: 'row',
          padding: '0 5px',
        }}
      >
        <div style={styleLinkHeader()}>
          {styledLinkHelper('/about', 'About', backgroundColor)}
        </div>

        <div style={styleLinkHeader()}>
          {styledLinkHelper('/support', 'Support', backgroundColor)}
        </div>

        <div style={styleLinkHeader()}>
          {styledLinkHelper('/donate', 'Donate', backgroundColor)}
        </div>
      </div>

      <div
        className="CopyrightSection"
        style={{
          color: colors.font.translucent,
          fontSize: font.textSizes.xsm,
          margin: '5px 0 0 0',
          textAlign: 'center',
        }}
      >
        &copy;2018 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
