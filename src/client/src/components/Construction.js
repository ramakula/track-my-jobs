import React from 'react';

import Ahref from './meta/Ahref';

import { centerFlex } from '../css/meta/flex';

const style = {
  fontSize: '2.4rem',
  textAlign: 'center',
  margin: '10px 0 10px 0',
};

const Construction = _ => {
  return (
    <div className="Construction">
      <div className="title" style={style}>
        We're under construction!
      </div>

      <div className="body" style={centerFlex}>
        <ul
          className="links"
          style={{ listStyle: 'none', margin: '0 auto', maxWidth: '200px' }}
        >
          <li className="links__el">
            <Ahref
              link="https://github.com/samscha/track-my-jobs"
              text="Github"
            />

            <Ahref
              link="mailto:chasamuels@gmail.com"
              text="Email"
              target="null"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Construction;
