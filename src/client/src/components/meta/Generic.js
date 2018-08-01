import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Generic extends Component {
  render() {
    return (
      <div className="About">
        <Header />

        <Footer />
      </div>
    );
  }
}

export default Generic;
