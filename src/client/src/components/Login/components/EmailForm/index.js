import React from 'react';
import { connect } from 'react-redux';

import { reduxForm, Field, getFormSyncErrors } from 'redux-form';

import * as c from './components';
import * as u from './utils';

import * as css from './css';

const FORM_NAME = u.formNames.email;
const PASSWORD_FORM = u.formNames.password;

const field = 'email';
const v = u.validation;

export default reduxForm({
  form: FORM_NAME,
  fields: [field],
})(
  connect(
    state => ({
      form: state.form,
      formSyncErrors: getFormSyncErrors(FORM_NAME)(state),
    }),
    {},
  )(props => {
    const { handleSubmit, submitting, changeComp, formSyncErrors } = props;

    const submit = async ({ email }) => {
      await u.submit.email({ email });
      changeComp(PASSWORD_FORM, email);
    };

    return (
      <div className="EmailForm" style={css.EmailForm()}>
        <c.FormDescription />

        <form onSubmit={handleSubmit(submit)} style={css.form()}>
          <Field
            component={c.RenderField}
            label="email"
            name="email"
            type="text"
            validate={[v.requiredEmail, v.email]}
          />

          <div className="BottomContainer" style={css.BottomContainer()}>
            <c.CreateAccountLink />

            <c.StyledButton
              customStyle={JSON.stringify({ margin: '0 0 0 auto' })}
              error={formSyncErrors[field] !== undefined}
              submitting={submitting}
              text="next"
            />
          </div>
        </form>
      </div>
    );
  }),
);
