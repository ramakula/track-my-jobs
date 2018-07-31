import React, { Component } from 'react';

const style = {
  fontSize: '2.4rem',
  textAlign: 'center',
};

class Construction extends Component {
  render() {
    return (
      <div className="Construction">
        <div className="Construction-Title" style={style}>
          We're under construction!
        </div>
      </div>
    );
  }
}

export default Construction;
