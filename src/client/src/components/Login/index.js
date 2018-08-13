import React, { Component } from 'react';
import { connect } from 'react-redux';

import withSizes from 'react-sizes';

import * as c from './components';

import * as u from './utils';

import * as css from './css';

const EMAIL_FORM = u.formNames.email;
const PASSWORD_FORM = u.formNames.password;

export default connect(
  state => ({}),
  {},
)(
  withSizes(({ width }) => ({ isMobile: u.response.isMobile(width) }))(
    class _ extends Component {
      state = {
        curr: '',
        email: '',
      };

      componentDidMount() {
        this.setState({ curr: EMAIL_FORM });
      }

      changeComp = (nextComp, email = this.state.email) => {
        this.setState({ curr: nextComp, email });
      };

      render() {
        return (
          <div className="Login" style={css.Login()}>
            <div className="FormContainer" style={css.FormContainer()}>
              {(_ => {
                switch (this.state.curr) {
                  case EMAIL_FORM:
                    return <c.EmailForm changeComp={this.changeComp} />;

                  case PASSWORD_FORM:
                    return (
                      <c.PasswordForm
                        changeComp={this.changeComp}
                        email={this.state.email}
                      />
                    );

                  default:
                    return (
                      <div className="Login-default-case">error occured!</div>
                    );
                }
              })()}
            </div>
          </div>
        );
      }
    },
  ),
);
