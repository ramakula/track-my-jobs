import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormSyncErrors } from 'redux-form';

import * as u from '../utils';
import * as a from '../../../actions';

import * as c from './components';

const FORM_NAME = u.formNames.password;
const FIELD = 'password';

const style = _ => ({});

const PasswordForm = props => {
  const { handleSubmit, submitting, history, email, formSyncErrors } = props;

  const submit = async ({ password }, dispatch) => {
    return dispatch(
      a.u.authenticate(await u.submit.password({ email, password }), history),
    );
  };

  return (
    <div className="PasswordForm" style={style()}>
      <c.FormDescription email={email} changeComp={props.changeComp} />

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
            error={formSyncErrors[FIELD] !== undefined}
            submitting={submitting}
            changeComp={props.changeComp}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    form: state.form,
    formSyncErrors: getFormSyncErrors(FORM_NAME)(state),
  };
};

export default reduxForm({
  form: FORM_NAME,
  fields: [FIELD],
})(
  connect(
    mapStateToProps,
    {},
  )(withRouter(PasswordForm)),
);
