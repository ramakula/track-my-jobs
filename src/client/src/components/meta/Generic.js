import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

const style = _ => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export default ComposedComponent => {
  return class extends Component {
    render() {
      return (
        <div className="Generic" style={style()}>
          <Header />

          <ComposedComponent history={this.props.history} />

          <Footer />
        </div>
      );
    }
  };
};
