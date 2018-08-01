import React from 'react';

const style = {
  fontSize: '1.75rem',
  height: '50px',
};

const Header = _ => {
  return (
    <div className="Header" style={style}>
      <p style={{ margin: '4px' }}>Track My Jobs</p>
    </div>
  );
};

export default Header;
