import React, { Component } from 'react';

import button from '../../../css/meta/button';

class StyledButton extends Component {
  state = {
    curr: '',
    colorSchema: { color: {}, backgroundColor: {}, textDecoration: {} },
  };

  componentDidMount() {
    this.setState({
      curr: 'normal',
      colorSchema: button(),
    });
  }

  onMouseDown = _ => {
    this.setState({ curr: 'active' });
  };

  onMouseEnter = _ => {
    this.setState({ curr: 'hover' });
  };

  onMouseLeave = _ => {
    this.setState({ curr: 'normal' });
  };

  render() {
    const color = this.state.colorSchema.color;
    const backgroundColor = this.state.colorSchema.backgroundColor;
    const textDecoration = this.state.colorSchema.textDecoration;
    const customStyle = this.props.customStyle || '{}';

    const state = this.state.curr;

    return (
      // <div className="StyledButton">
      <button
        className="StyledButton"
        style={{
          backgroundColor: backgroundColor[state],
          border: 'none',
          color: color[state],
          cursor: 'pointer',
          height: '25px',
          margin: '0 auto',
          outline: 'none',
          textDecoration: textDecoration[state],
          width: '70px',
          ...JSON.parse(customStyle),
        }}
        onMouseDown={this.onMouseDown}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.text}
      </button>
      // </div>
    );
  }
}

export default StyledButton;
