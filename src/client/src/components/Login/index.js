/**
 * JSX
 * *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
 * React / Redux imports
 * other imports
 *
 * components imports
 * utils imports
 * css imports
 *
 * init import (if applicable)
 *
 * `init()` (if applicable)
 *
 * constants
 *
 * export component
 * *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withSizes from 'react-sizes';

import * as c from './components';
import * as u from './utils';
import * as css from './css';

const emailForm = u.formNames.email;
const passwordForm = u.formNames.password;

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
        this.setState({ curr: emailForm });
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
                  case emailForm:
                    return <c.EmailForm changeComp={this.changeComp} />;

                  case passwordForm:
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
