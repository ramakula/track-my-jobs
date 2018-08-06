import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { reduxForm, Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import withSizes from 'react-sizes';

import FormEmail from './FormEmail';

import * as c from '../../css/meta/colors';
import { response } from '../../css/meta/index';

const style = _ => ({
  height: '100%',
  textAlign: 'center',
});

// const fieldStyle = _ => ({
//   margin: '5px 0',
//   textAlign: 'center',
// });

class Login extends Component {
  state = {
    stage: 0,
  };

  componentDidMount() {
    this.setState({ stage: 1 });
  }

  _getStage = _ => {
    if (this.state.stage === 1) return <FormEmail />;

    return <div />;
  };

  submitFormHandler = ({ email, password }) => {
    this.props.login(email, password, this.props.history);
  };

  render() {
    // const { handleSubmit } = this.props;

    return (
      <div className="Login" style={style()}>
        <div
          className="formContainer"
          style={{
            border: `1px solid ${c.font.translucent}`,
            // display: 'flex',
            // flexDirection: 'column',
            margin: '0 auto',
            padding: '10px',
            width: '300px',
          }}
        >
          <div className="formComponent">{this._getStage()}</div>

          {/* <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 auto',
              width: '200px',
            }}
          > */}
          {/* <label htmlFor="email">email</label> */}
          {/* <Field
              name="email"
              label="email"
              placeholder="email"
              component="input"
              type="text"
              style={fieldStyle()}
            /> */}

          {/* <label htmlFor="password">password</label> */}
          {/* <Field
              name="password"
              label="password"
              placeholder="password"
              component="input"
              type="password"
              style={fieldStyle()}
            />

            <button style={fieldStyle()}>login</button>
          </form> */}

          {/* <div className="signupLink">Don't have an account? Sign up</div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //
  };
};

const mapSizesToProps = ({ width }) => ({
  isMobile: response.isMobile(width),
});

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
})(
  connect(
    mapStateToProps,
    {
      /*action*/
    },
  )(withSizes(mapSizesToProps)(Login)),
);
