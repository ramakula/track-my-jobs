import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default ComposedComponent =>
  class extends Component {
    render() {
      return (
        <div className="Template">
          <Header />

          <ComposedComponent history={this.props.history} />

          <Footer />
        </div>
      );
    }
  };
