import React, { Component } from 'react';

const style = _ => ({
  height: '100%',
  textAlign: 'center',
});

class Login extends Component {
  render() {
    return (
      <div className="Login" style={style()}>
        <div>login</div>
      </div>
    );
  }
}

export default Login;
