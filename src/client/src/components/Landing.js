import React, { Component } from 'react';

import Header from './meta/Header';
import Footer from './meta/Footer';

import Construction from './Construction';

const style = _ => ({
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   height: '100%',
});

class Landing extends Component {
  render() {
    return (
      <div className="Landing" style={style()}>
        {/* <Header /> */}

        <Construction />

        {/* <Footer /> */}
      </div>
    );
  }
}

export default Landing;
