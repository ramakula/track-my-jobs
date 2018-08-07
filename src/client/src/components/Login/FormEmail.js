import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import styledButtonHelper from '../meta/StyledButton/StyledButton.helper';

import { v } from '../meta/reduxForm';

import { renderFieldEmail } from './renderField';
import * as s from './customSubmit';

import * as f from '../../css/meta/font';
// import * as c from '../../css/meta/colors';

const style = _ => ({
  // display: 'flex',
  // flexDirection: 'column',
  // height: '100%',
  // textAlign: 'center',
});

export const formName = 'checkEmail';

const FormEmail = props => {
  const {
    handleSubmit, // pristine,
    // reset,
    submitting,
    // checkIfEmailExists,
    // changeLoginStage,
    // submitting,
  } = props;

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
        onSubmit={handleSubmit(s.email)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        {/* <label
          htmlFor="email"
          style={{
            color: c.font.subtitle,
            fontSize: f.textSizes.xsm,
            textAlign: 'left',
          }}
        >
          email
        </label> */}
        <Field
          name="email"
          label="email"
          placholder="email"
          component={renderFieldEmail}
          validate={[v.required, v.email]}
          // validate={v.email}
          type="text"
          // style={{
          //   border: 'none',
          //   borderBottom: `1px solid ${c.font.translucent}`,
          //   fontSize: f.textSizes.sm,
          //   margin: '10px 0',
          //   outline: 'none',
          // }}
        />

        <div
          className="bottomContainer"
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            margin: '10px 0',
          }}
        >
          <div
            className="createAccountLink"
            style={{
              color: 'blue',
              fontSize: f.textSizes.sm,
              margin: '10px 0',
              textAlign: 'left',
            }}
          >
            create an account
          </div>

          {styledButtonHelper(
            'next',
            JSON.stringify({ margin: '0 0 0 auto' }),
            submitting,
            // props.user.isChecking,
          )}

          {/* <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button> */}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    form: state.form,
    user: state.user,
  };
};

// const checkIfEmailExists = u.checkIfEmailExists;

export default reduxForm({
  form: formName,
  fields: ['email'],
})(
  connect(
    mapStateToProps,
    {
      // checkIfEmailExists,
    },
  )(FormEmail),
);
