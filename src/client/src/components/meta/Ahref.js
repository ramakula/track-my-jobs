import React, { Component } from 'react';

import href from '../../css/href';

class Ahref extends Component {
  state = {
    color: '',
  };

  componentDidMount() {
    this.setState({ color: href.normal });
  }

  onMouseEnter = _ => {
    this.setState({ color: href.hover });
  };

  onMouseLeave = _ => {
    this.setState({ color: href.normal });
  };

  onMouseDown = _ => {
    this.setState({ color: href.active });
  };

  render() {
    const target = this.props.target;

    return (
      <div className="Ahref">
        <a
          href={this.props.link}
          target={target === 'null' ? null : '_blank'}
          rel="noopener noreferrer"
          style={{
            color: this.state.color,
          }}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onMouseDown={this.onMouseDown}
        >
          {this.props.text}
        </a>
      </div>
    );
  }
}

export default Ahref;
