import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hasSubmitSucceeded } from 'redux-form';
import withSizes from 'react-sizes';

import FormEmail from './Email';
import FormPass from './Pass';

import * as u from './utils';

import * as c from '../../css/meta/colors';
import { response } from '../../css/meta/index';

const EMAIL_FORM = u.formNames.email;

const style = _ => ({
  height: '100%',
  textAlign: 'center',
});

class Login extends Component {
  render() {
    return (
      <div className="Login" style={style()}>
        <div
          className="FormContainer"
          style={{
            border: `1px solid ${c.font.translucent}`,
            margin: '0 auto',
            padding: '30px',
            width: '300px',
          }}
        >
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
