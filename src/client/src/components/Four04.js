import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className="four04">
        <h2 className="four04__title">page not found!</h2>

        <div className="four04__link">
          <button onClick={_ => this.props.history.goBack()}>return</button>
        </div>

        <div className="four04__link">
          <button onClick={_ => this.props.history.push('/')}>
            return home
          </button>
        </div>
      </div>
    );
  }
}
