import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { u } from '../../actions';

import styledButtonHelper from '../meta/StyledButton/StyledButton.helper';

import * as f from '../../css/meta/font';
import * as c from '../../css/meta/colors';

const style = _ => ({
  // display: 'flex',
  // flexDirection: 'column',
  // height: '100%',
  // textAlign: 'center',
});

const FormEmail = props => {
  const { handleSubmit, checkIfEmailExists } = props;

  const handleSubmitHandler = ({ email }) => {
    checkIfEmailExists(email);
  };

  return (
    <div className="FormEmail" style={style()}>
      <div
        className="formTitle"
        style={{ fontSize: f.textSizes.md, margin: '0 0 10px 0' }}
      >
        log in
      </div>

      <div
        className="formSubtitle"
        style={{ fontSize: f.textSizes.sm, margin: '0 0 10px 0' }}
      >
        to Track My Jobs
      </div>

      <form
        onSubmit={handleSubmit(handleSubmitHandler)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        <label
          htmlFor="email"
          style={{
            color: c.font.subtitle,
            fontSize: f.textSizes.xsm,
            textAlign: 'left',
          }}
        >
          email
        </label>
        <Field
          name="email"
          label="email"
          placholder="email"
          component="input"
          type="text"
          style={{
            border: 'none',
            borderBottom: `1px solid ${c.font.translucent}`,
            fontSize: f.textSizes.sm,
            margin: '10px 0',
            outline: 'none',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div
            className="createAccountLink"
            style={{
              color: 'blue',
              fontSize: f.textSizes.xsm,
              margin: '10px 0',
              textAlign: 'left',
            }}
          >
            create an account
          </div>

          {styledButtonHelper('next', JSON.stringify({ margin: '0 0 0 auto' }))}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    form: state.form,
  };
};

const checkIfEmailExists = u.checkIfEmailExists;

export default reduxForm({
  form: 'username',
  fields: ['email'],
})(
  connect(
    mapStateToProps,
    {
      checkIfEmailExists,
    },
  )(FormEmail),
);
