import React from 'react';

import * as css from './css';

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="RenderFieldComp" style={{ textAlign: 'left' }}>
    <label style={css.RenderFieldComp()}>{label}</label>

    <div className="RenderFieldInputComp">
      <input
        {...input}
        type={type}
        autoFocus={true}
        style={css.RenderFieldInputComp()}
      />
      {touched &&
        ((error && <span style={css.span()}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
