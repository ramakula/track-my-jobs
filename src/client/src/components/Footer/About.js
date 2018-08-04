import React, { Component } from 'react';

const style = _ => ({
  height: '100%',
});

class About extends Component {
  render() {
    return (
      <div className="About" style={style()}>
        About Us
      </div>
    );
  }
}

export default About;
