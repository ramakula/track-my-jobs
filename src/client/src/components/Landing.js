import React, { Component } from 'react';

import Construction from './Construction';

const style = _ => ({
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  height: '100%',
});

class Landing extends Component {
  render() {
    return (
      <div className="Landing" style={style()}>
        <Construction />
      </div>
    );
  }
}

export default Landing;
