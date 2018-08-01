import React, { Component } from 'react';

import Header from './meta/Header';
import Footer from './meta/Footer';

import Construction from './Construction';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Header />

        <Construction />

        <Footer />
      </div>
    );
  }
}

export default Landing;
