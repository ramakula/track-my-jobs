import React from 'react';
import { connect } from 'react-redux';

import { reduxForm, Field, getFormSyncErrors } from 'redux-form';

import * as c from './components';
import * as u from './utils';

import * as css from './css';

const field = 'email';
const formName = u.formNames.email;
const passwordForm = u.formNames.password;
const v = u.validation;

export default reduxForm({
  form: formName,
  fields: [field],
})(
  connect(
    state => ({
      form: state.form,
      formSyncErrors: getFormSyncErrors(formName)(state),
    }),
    {},
  )(props => {
    const { changeComp, formSyncErrors, handleSubmit, submitting } = props;

    const submit = async ({ email }) => {
      await u.submit({ email });
      changeComp(passwordForm, email);
    };

    return (
      <div className="EmailForm" style={css.EmailForm()}>
        <c.EmailFormDescription />

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
