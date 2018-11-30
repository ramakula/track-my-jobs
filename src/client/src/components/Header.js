import React from 'react';
import { Link } from 'react-router-dom';

export default _ => (
  <div className="header">
    <Link className="header__link" to="/">
      Track My Jobs
    </Link>

    <div className="portal">
      <Link className="portal__link" to="/login">
        login
      </Link>

      <Link className="portal__link" to="/signup">
        signup
      </Link>
    </div>
  </div>
);
