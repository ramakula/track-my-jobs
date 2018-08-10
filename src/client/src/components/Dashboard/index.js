import React, { Component } from 'react';
import { connect } from 'react-redux';

const style = _ => ({
  height: '100%',
});

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard" style={style()}>
        <p style={{ overflowWrap: 'break-word', padding: '25px' }}>
          {JSON.stringify(this.props.user)}
        </p>
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
