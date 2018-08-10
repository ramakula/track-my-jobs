import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import * as u from '../utils';
import * as a from '../../../actions';

import * as c from './components';

const FORM_NAME = u.formNames.password;

const style = _ => ({});

const PasswordForm = props => {
  const { handleSubmit, submitting, history, email } = props;

  const submit = async ({ password }, dispatch) => {
    return dispatch(
      a.u.authenticate(await u.submit.password({ email, password }), history),
    );
  };

  return (
    <div className="PasswordForm" style={style()}>
      <c.FormDescription email={email} />

      <form
        onSubmit={handleSubmit(submit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        <Field
          name="password"
          label="enter your password"
          component={c.RenderField}
          validate={[u.validation.requiredPassword]}
          type="password"
        />

        <div
          className="BottomContainer"
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            margin: '10px 0',
          }}
        >
          <c.ForgotPasswordLink />

          <c.StyledButton
            text="next"
            customStyle={JSON.stringify({ margin: '0 0 0 auto' })}
            submitting={submitting}
          />
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

export default reduxForm({
  form: FORM_NAME,
  fields: ['password'],
})(
  connect(
    mapStateToProps,
    {},
  )(withRouter(PasswordForm)),
);
