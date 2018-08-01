import React from 'react';
import withSizes from 'react-sizes';

import Ahref from './meta/Ahref';

import { centerFlex } from '../css/meta/flex';
import { titleSizes } from '../css/meta/font';

const style = isMobile => ({
  fontSize: isMobile ? titleSizes.sm : titleSizes.md,
  margin: '10px 0 10px 0',
  textAlign: 'center',
});

const Construction = ({ isMobile }) => {
  return (
    <div className="Construction">
      <div className="title" style={style(isMobile)}>
        We're under construction!
      </div>

      <div className="section" style={centerFlex}>
        <ul
          className="links"
          style={{ listStyle: 'none', margin: '0 auto', padding: '0' }}
        >
          <li className="links__el">
            <Ahref
              link="https://github.com/samscha/track-my-jobs"
              text="Github"
            />
          </li>

          <li>
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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 500,
});

export default withSizes(mapSizesToProps)(Construction);
