import React from 'react';

import { background, font } from '../../css/meta/colors';
import { fontSizes } from '../../css/meta/font';

const style = {
  color: font.light,
  background: background.dark,
  fontSize: fontSizes.sm,
  height: '25vh',
};

const Footer = _ => {
  return (
    <div className="Footer">
      <div className="empty-space" style={{ height: '75vh' }} />

      <div className="links" style={style}>
        links
      </div>
    </div>
  );
};

export default Footer;
