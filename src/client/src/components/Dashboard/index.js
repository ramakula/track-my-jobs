import React, { Component } from 'react';
import { connect } from 'react-redux';

const style = _ => ({
  height: '100%',
});

class Dashboard extends Component {
  render() {
    return (
      <div className="Donate" style={style()}>
        {JSON.stringify(this.props.user)}
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  {},
)(Dashboard);
