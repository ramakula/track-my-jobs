import React from 'react';

import * as f from '../../css/meta/font';
import * as c from '../../css/meta/colors';

export const renderFieldEmail = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="renderFieldComp" style={{ textAlign: 'left' }}>
    <label
      style={{
        color: c.font.subtitle,
        fontSize: f.textSizes.xsm,
        // textAlign: 'left',
        // width: '100%',
      }}
    >
      {label}
    </label>
    <div className="renderFieldInputComp">
      <input
        {...input}
        type={type}
        style={{
          border: 'none',
          borderBottom: `1px solid ${c.font.translucent}`,
          fontSize: f.textSizes.md,
          margin: '10px 0',
          outline: 'none',
          padding: '0',
          width: '100%',
        }}
      />
      {touched &&
        ((error && (
          <span
            style={{
              color: 'red',
              fontSize: f.textSizes.sm,
              fontWeight: 'bold',
            }}
          >
            {error}
          </span>
        )) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);