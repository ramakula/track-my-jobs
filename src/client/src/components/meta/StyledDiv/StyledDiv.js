import React, { Component } from 'react';

import link from '../../../css/link';

/**
 * styled div
 *
 * required `props`:
 *  - `text`: the text to show for the `Link`
 *
 * optional `props`:
 *  - `backgroundColor`: the background color that the `Link` is "on top of".
 *                       The default is set to white (`#ffffff`) in css/link
 *  - `customStyle`: a JSON string with inline style properties
 *
 */
class StyledDiv extends Component {
  /**
   * initialize `colorSchema` with empty object keys
   * to avoid `undefined` errors before component mount
   *
   */
  state = {
    curr: '',
    colorSchema: { color: {}, backgroundColor: {}, textDecoration: {} },
  };

  componentDidMount() {
    this.setState({
      curr: 'normal',
      colorSchema: link(this.props.backgroundColor),
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
      <div className="StyledDiv">
        <div
          onClick={_ => this.props.onClickHandler(this.props.onClickArgs)}
          style={{
            color: color[state],
            cursor: 'pointer',
            backgroundColor: backgroundColor[state],
            padding: '2px',
            textDecoration: textDecoration[state],
            ...JSON.parse(customStyle),
          }}
          onMouseDown={this.onMouseDown}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default StyledDiv;
