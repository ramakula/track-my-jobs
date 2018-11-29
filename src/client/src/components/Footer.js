import React from 'react';

import styledLinkHelper from './meta/StyledLink/StyledLink.helper';

export default _ => (
  <div className="footer">
    <div className="links">
      <div className="links__item">
        {styledLinkHelper('/about', 'about', '#141414')}
      </div>

      <div className="links__item">
        {styledLinkHelper('/support', 'support', '#141414')}
      </div>

      <div className="links__item">
        {styledLinkHelper('/donate', 'donate', '#141414')}
      </div>
    </div>

    <div className="copyright">&copy;2018 All Rights Reserved</div>
  </div>
);
