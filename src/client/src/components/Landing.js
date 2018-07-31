import React, { Component } from 'react';

import Header from './meta/Header';

import Construction from './Construction';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Header />

        <Construction />
      </div>
    );
  }
}

export default Landing;
