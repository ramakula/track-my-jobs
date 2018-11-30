import React from 'react';
import { Link } from 'react-router-dom';

import styledLinkHelper from './meta/StyledLink/StyledLink.helper';

export default _ => (
  <div className="footer">
    <div className="links">
      <Link className="links__item" to="/about">
        about
      </Link>

      <Link className="links__item" to="/support">
        support
      </Link>

      <Link className="links__item" to="/donate">
        donate
      </Link>
    </div>

    <div className="copyright">&copy;2018 All Rights Reserved</div>
  </div>
);
