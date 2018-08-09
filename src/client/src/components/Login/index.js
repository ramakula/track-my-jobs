import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hasSubmitSucceeded } from 'redux-form';
import withSizes from 'react-sizes';

import FormEmail from './Email';
import FormPass from './Pass';

import * as u from './utils';

import * as css from './css';

import { response } from '../../css/meta';

const EMAIL_FORM = u.formNames.email;

class Login extends Component {
  render() {
    return (
      <div className="Login" style={css.Login()}>
        <div className="FormContainer" style={css.FormContainer()}>
          <div className="FormComponent" hidden={this.props.submitSucceeded}>
            <FormEmail />
          </div>

          <div className="FormComponent" hidden={!this.props.submitSucceeded}>
            <FormPass />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    submitSucceeded: hasSubmitSucceeded(`${EMAIL_FORM}`)(state),
  };
};

const mapSizesToProps = ({ width }) => ({
  isMobile: response.isMobile(width),
});

export default connect(
  mapStateToProps,
  {},
)(withSizes(mapSizesToProps)(Login));
