import React, { Component } from 'react';

import button from '../../css/button';

import { textSizes } from '../../css/meta/font';

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
        // disabled={this.props.disabled}
        disabled={this.props.disabled}
        type="submit"
        style={{
          backgroundColor: backgroundColor[state],
          border: 'none',
          color: color[state],
          cursor: this.props.disabled ? 'not-allowed' : 'pointer',
          fontSize: textSizes.sm,
          height: '40px',
          margin: '0 auto',
          opacity: this.props.disabled ? '0.2' : '1',
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
